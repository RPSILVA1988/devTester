
const ContactModel = require('../models/contact.model')
const UserModel = require('../models/user.model')

const auth = async (request) => {
    const userId = request.headers.authorization

    const foundUser = await UserModel.findById(userId)
    if (!foundUser)
        throw { error: 'Unauthorized', code: 401 }
}

module.exports = {
    async create(request, h) {

        if (request.payload === null)
            return h.response({ message: 'Not JSON' }).code(400)

        try {
            await auth(request)
        } catch (error) {
            return h.response(error).code(error.code)
        }

        const contact = new ContactModel({
            name: request.payload.name,
            number: request.payload.number,
            description: request.payload.description
        })

        console.log(!contact.name) //contact.name é undefined é true?

        if (!contact.name) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Name is required' }).code(409)

        if (!contact.number) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Number is required' }).code(409)

        if (!contact.description) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Description is required' }).code(409)

        const dup = await ContactModel.findOne({ number: contact.number }).exec();

        if (dup)
            return h.response({ error: 'Duplicated number.' }).code(409)

        try {
            let result = await contact.save()
            return h.response(result).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async remove(request, h) {
        try {
            await ContactModel.deleteOne({ _id: request.params.contactId })
            return h.response({}).code(204)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async list(request, h) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}
const ContactModel = require('../models/contact.model')
const UserModel = require('../models/user.model')

const auth = async (userId) => {

    //const userId = request.headers.authorization

    const foundUser = await UserModel.findById(userId)

    if (!foundUser) //se o valor d eusuário for Nulo, estoura excessão
        throw { error: 'Unauthorized', code: 401 }
}

module.exports = {
    async create(request, h) {

        const userId = request.headers.authorization

        try {
            await auth(userId)
        } catch (error) {
            return h.response(error).code(error.code)
        }

        if (request.payload === null)
            return h.response({ message: 'Not JSON' }).code(400)

        const contact = new ContactModel({
            name: request.payload.name,
            number: request.payload.number,
            description: request.payload.description,
            userId: userId
        })

        console.log(!contact.name) //contact.name é undefined é true?

        if (!contact.name) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Name is required' }).code(409)

        if (!contact.number) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Number is required' }).code(409)

        if (!contact.description) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Description is required' }).code(409)

        const dup = await ContactModel.findOne({ number: contact.number, userId: userId }).exec();

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

        const userId = request.headers.authorization

        try {
            await auth(userId)
        } catch (error) {
            return h.response(error).code(error.code)
        }

        try {
            const user = await ContactModel.findOne({ _id: request.params.contactId, userId: userId })

            if (!user)
                return h.response({}).code(404)

            await ContactModel.deleteOne({ _id: request.params.contactId, userId: userId })
            return h.response({}).code(204)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async list(request, h) {

        const userId = request.headers.authorization

        try {
            await auth(userId)
        } catch (error) {
            return h.response(error).code(error.code)
        }

        const contacts = await ContactModel.find({ userId: userId }).exec();
        return contacts;
    }
}

const ContactModel = require('../models/contact.model')

module.exports = {
    async create(request, h) {

        //console.log(request.payload)

        const contact = new ContactModel({
            name: request.payload.name,
            number: request.payload.number,
            description: request.payload.description
        })

        console.log(!contact.name) //contact.name é undefined é true?

        if (!contact.name) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response({ message: 'Name is required' }).code(409)

        if (!contact.number) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response(null).code(409)

        if (!contact.description) //se esse campo não existir, ou seja se for true, devolva 409
            return h.response(null).code(409)

        let result = await contact.save()

        return h.response(result).code(200);
    },
    async list(request, h) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}
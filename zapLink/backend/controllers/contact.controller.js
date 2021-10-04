
const ContactModel = require('../models/contact.model')

module.exports = {
    async create(request, h) {

        //console.log(request.payload)

        const contact = new ContactModel({
            name: request.payload.name,
            number: request.payload.number,
            description: request.payload.description
        })

        let result = await contact.save()

        return h.response(result).code(200);
    },
    async list(request, h) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}
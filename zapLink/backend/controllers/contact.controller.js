
const ContactModel = require('../models/contact.model')

module.exports = {
    async list(request, h) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}
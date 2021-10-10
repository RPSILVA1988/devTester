const ContactModel = require('../models/contact.model')
const UserModel = require('../models/user.model')

const md5 = require('md5')

module.exports = {
    async create(request, h) {

        if (request.payload === null)
            return h.response({ message: 'Not JSON' }).code(400)

        //console.log(request.payload)

        if (!request.payload.email)
            return h.response({ message: 'Email is required.' }).code(409)

        if (!request.payload.password)
            return h.response({ message: 'Password is required.' }).code(409)

        const user = new UserModel({
            email: request.payload.email,
            password: md5(request.payload.password)
        })

        const dup = await UserModel.findOne({ email: user.email }).exec();

        if (dup)
            return h.response({ error: 'Duplicated user.' }).code(409)

        try {
            let result = await user.save()
            return h.response(result).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }

    },
    async login() {
        return null;
    }
}
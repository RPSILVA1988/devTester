
const ContactController = require('../controllers/contact.controller')

module.exports = [
    {
        method: 'GET',
        path: '/contacts',
        handler: ContactController.list
    }
]

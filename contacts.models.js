const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({
    first_name: { type: String  },
    last_name: { type: String },
    email: { type: String  },
    phone_number: { type: String  }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact
const mongoose = require("mongoose");
const schema = mongoose.Schema

const contactSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("contacts",contactSchema);
								 
// db.contacts.create({"name":"bala", "email":"bala@gmail.com", "mobile":"9751214227"})
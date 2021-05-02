const mongoose = require('mongoose')

const contactListSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    contact : {
        type : Number,
        required : true,
        validate:function(value){
            let ans = value.toString()
            if(ans.length < 5){
                throw new Error('the number must have more than 5 digits')
            }
        }
    }
})

const contact = mongoose.model('contact',contactListSchema);

module.exports = {contact}
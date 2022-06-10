const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Part = require('./Part')






const emojiSchema = new Schema({
    name: {
        type: String,
        maxlength: 40
    },
    layers: [Part],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    shared: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
})


module.exports = mongoose.model('Emoji', emojiSchema)
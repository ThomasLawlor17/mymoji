const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rectSchema = new Schema({
    fill: String,
    transform: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Rect', rectSchema)
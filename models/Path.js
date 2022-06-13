const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pathSchema = new Schema({
    d: String,
    fill: String,
    fillRule: {
        type: String,
        default: ''
    },
    clipRule: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Path', pathSchema)
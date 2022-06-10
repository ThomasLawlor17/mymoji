const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: String,
    order: Number
}, {
    timestamps: true,
})


module.exports = mongoose.model('Category', categorySchema)
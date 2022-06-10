const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pathSchema = new Schema({
    d: String,
    fill: String,
    g: {
        type: Boolean,
        default: false
    },
    clipPath: {
        type: String,
        default: ''
    },
    defs: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        default: ''
    },
    fill2: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})

const partSchema = new Schema({
    name: String,
    paths: [pathSchema],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
}, {
    timestamps: true
})

module.exports = mongoose.model('Part', partSchema)
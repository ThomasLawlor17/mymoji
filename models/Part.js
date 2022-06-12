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

const rectSchema = new Schema({
    width: Number,
    height: Number,
    fill: String,
    transform: String,
}, {
    timestamps: true
})

const partSchema = new Schema({
    name: String,
    paths: [pathSchema],
    clipPath: {
        type: Boolean,
        default: false
    },
    rect: [rectSchema],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
}, {
    timestamps: true
})

module.exports = mongoose.model('Part', partSchema)
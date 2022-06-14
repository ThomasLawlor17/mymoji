const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partSchema = new Schema({
    name: String,
    paths: [{
        type: Schema.Types.ObjectId, ref: 'Path'
    }],
    clipPath: {
        type: Boolean,
        default: false
    },
    rect: [{
        type: Schema.Types.ObjectId, ref: 'Rect'
    }],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
}, {
    timestamps: true
})






module.exports = mongoose.model('Part', partSchema)
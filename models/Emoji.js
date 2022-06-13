const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emojiSchema = new Schema({
    name: {
        type: String,
        maxlength: 40
    },
    layers: { type: Schema.Types.ObjectId, ref: 'Part'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    shared: {
        type: Boolean,
        default: false,
    },
    downloads: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
})





emojiSchema.methods.addPartToLayers = async function (partId) {
    const layer = this
    const part = await mongoose.model('Part').findById(partId)
    layer.layers.push({part})
    return layer.save()
}




module.exports = mongoose.model('Emoji', emojiSchema)
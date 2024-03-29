const mongoose = require('mongoose')
const Schema = mongoose.Schema



const emojiSchema = new Schema({
    name: {
        type: String,
        maxlength: 40,
        default: 'Untitled'
    },
    layers: [{ type: Schema.Types.ObjectId, ref: 'Part'}],
    emoji: [{type: Schema.Types.ObjectId, ref: 'Path'}],
    saved: {
        type: Boolean,
        default: false
    },
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



emojiSchema.statics.getEmoji = async function (userId) {
    return this.findOneAndUpdate(
        {user: userId, saved: false},
        // update
        {user: userId},
        // options  
        {upsert: true, new: true}
    )
}


emojiSchema.statics.saveEmoji = async function () {
    return await this.create()
}

emojiSchema.methods.addPartToLayers = async function (partId) {
    const emoji = this
    const layers = this.layers
    const part = await mongoose.model('Part').findById(partId)
    layers.push(part._id)
    return emoji.save()
}

emojiSchema.methods.removeLayer = async function (partId) {
    const emoji = this
    const layers = this.layers
    layers.splice(layers.indexOf(partId), 1)
    return emoji.save()
}

emojiSchema.methods.shareEmoji = async function () {
    this.shared = !this.shared
    return this.save()
}

emojiSchema.methods.newName = async function (name) {
    console.log(name)
    const emoji = this
    emoji.name = name
    emoji.save()
}

emojiSchema.methods.layerUp = async function (partId) {
    const emoji = this
    const layers = this.layers
    const index = emoji.layers.indexOf(partId)
    layers.splice(index + 2, 0, partId)
    layers.splice(index, 1)
    return emoji.save()
}

emojiSchema.methods.layerDown = async function (partId) {
    const emoji = this
    const layers = this.layers
    const index = emoji.layers.indexOf(partId)
    layers.splice(index - 1, 0, partId)
    layers.splice(index + 1, 1)
    return emoji.save()
}

emojiSchema.methods.addDL = async function () {
    const emoji = this
    emoji.downloads += 1
    return emoji.save()
}





module.exports = mongoose.model('Emoji', emojiSchema)
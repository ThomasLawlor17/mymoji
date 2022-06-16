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


emojiSchema.virtual('totalDownloads').get(function () {
    return this.downloads
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

emojiSchema.statics.checkEmoji = async function (userId) {
    console.log(this.findOne({user: userId, saved: false}))
    return this.findOne({user: userId, saved: false}).populate({ path: 'layers', populate: {path:'paths'}})
}


emojiSchema.statics.saveEmoji = async function () {
    return await this.create()
}

emojiSchema.methods.addPartToLayers = async function (partId) {
    console.log('1')
    const emoji = this
    console.log('2')
    const layers = this.layers
    console.log('3')
    const part = await mongoose.model('Part').findById(partId)
    console.log('4')
    layers.push(part._id)
    console.log('5')
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






module.exports = mongoose.model('Emoji', emojiSchema)
const Emoji = require('../../models/Emoji')
const Part = require('../../models/Part')

module.exports = {
    profileIndex,
    layers,
    layersIndex,
    addToLayers,
    saveEmoji,
    edit,
    update,
    delete: deleteEmoji,
}


async function profileIndex(req, res) {
    const emojis = await Emoji.find({user: req.user._id}).populate('layers')
    res.json(emojis)
}


async function layers(req, res) {
    const emoji = await Emoji.getEmoji(req.user_id)
    res.json(emoji)
}

async function layersIndex(req, res) {
    const emoji = await Emoji.find({user: req.user._id}).populate({ path: 'layers', populate: {path:'paths'}})
    console.log(emoji)
    res.json(emoji)
}

async function addToLayers(req, res) {
    // Get the emoji to be added to
    const emoji = await Emoji.getEmoji(req.user._id)
    // Call upon model method puhsing part id into layers
    await emoji.addPartToLayers(req.params.id)
    // re-populate layers and paths
    const layers = await Emoji.find({user: req.user._id}).populate({path: 'layers', populate: {path: 'paths'}})
    res.json(layers)
}

async function saveEmoji(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)
    emoji.saved = true
    await emoji.save()
    res.json(emoji)
}

async function edit(req, res) {

}

async function update(req, res) {

}

async function deleteEmoji(req, res) {

}
const Emoji = require('../../models/Emoji')
const Part = require('../../models/Part')

module.exports = {
    index,
    layers,
    layersIndex,
    addToLayers,
    saveEmoji,
    edit,
    update,
    delete: deleteEmoji,
}


async function index(req, res) {
    const emojis = await Emoji.find(req.user._id)
    res.json(emojis)
}


async function layers(req, res) {
    const emoji = await Emoji.getEmoji(req.user_id)
    res.json(emoji)
}

async function layersIndex(req, res) {
    const emoji = await Emoji.find(req.params._id).populate('layers')
    res.json(emoji)
}

async function addToLayers(req, res) {
    const layers = await Emoji.getEmoji(req.user._id)
    await layers.addPartToLayers(req.params.id)
    res.json(layers)
}

async function saveEmoji(req, res) {
    const emoji = await Emoji.getEmoji(req.params.id)
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
const Emoji = require('../../models/Emoji')
const Part = require('../../models/Part')

module.exports = {
    profileIndex,
    layers,
    layersIndex,
    addToLayers,
    saveEmoji,
    removeLayer,
    newEmoji,
    shareEmoji,
}


// Get all user created emojis
async function profileIndex(req, res) {
    const emojis = await Emoji.find({user: req.user._id, saved: true}).populate({ path: 'layers', populate: {path:'paths'}})
    res.json(emojis)
}

// NOT USED
async function layers(req, res) {
    const emoji = await Emoji.checkEmoji(req.user_id)
    res.json(emoji)
}

// Get emoji and populate layers/paths
async function layersIndex(req, res) {
    const emoji = await Emoji.find({user: req.user._id, saved: false}).populate({ path: 'layers', populate: {path:'paths'}})
    res.json(emoji)
}

async function newEmoji(req, res) {
    console.log('hello')
}

// Find or create new emoji and add part to layers
async function addToLayers(req, res) {
    // Get the emoji to be added to
    const emoji = await Emoji.getEmoji(req.user._id)
    // Call upon model method puhsing part id into layers
    await emoji.addPartToLayers(req.params.id)
    // re-populate layers and paths
    const layers = await Emoji.find({user: req.user._id, saved: false}).populate({path: 'layers', populate: {path: 'paths'}})
    res.json(layers)
}

// Find emoji and remove part from layers
async function removeLayer(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)

    await emoji.removeLayer(req.params.id)

    const layers = await Emoji.find({user: req.user._id, saved: false}).populate({path: 'layers', populate: {path: 'paths'}})
    res.json(layers)
}

// Save emoji to db
async function saveEmoji(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)
    emoji.saved = true
    await emoji.save()
    res.json(emoji)
}

// Set emoji as shared
async function shareEmoji(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)
    emoji.shareEmoji()
    res.json(emoji)
}

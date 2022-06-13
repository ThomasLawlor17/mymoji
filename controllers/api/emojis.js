const Emoji = require('../../models/Emoji')
const Part = require('../../models/Part')

module.exports = {
    new: newEmoji,
    addLayer,
    create,
    edit,
    update,
    delete: deleteEmoji,
}

async function newEmoji(req, res) {
    const parts = await Part.find({})
        .sort('name')
        .populate('category')
        .populate('paths')
        .populate('rect')
        .exec()
    parts.sort((a, b) => a.category.order - b.category.order)
    res.json(parts)
}

async function addLayer(req, res) {
    
}

async function create(req, res) {

}

async function edit(req, res) {

}

async function update(req, res) {

}

async function deleteEmoji(req, res) {

}
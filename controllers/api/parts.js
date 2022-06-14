const Part = require('../../models/Part')
const Category = require('../../models/Category')
const Path = require('../../models/Path')
const Rect = require('../../models/Rect')

module.exports = {
    index
}

async function index(req, res) {
    const parts = await Part.find({}).sort('name').populate('category').populate('paths').populate('rect')
        .exec()
    parts.sort((a, b) => a.category.order - b.category.order)
    res.json(parts)
}
const Emoji = require('../../models/Emoji')
const User = require('../../models/User')

module.exports = {
    indexShared,
    indexUsers
}

async function indexShared(req, res) {
    const shared = await Emoji.find({saved: true, shared: true}).populate({path: 'layers', populate: {path: 'paths'}})
    res.json(shared)
}

async function indexUsers(req, res) {
    const users = await User.find({})
    res.json(users)
}
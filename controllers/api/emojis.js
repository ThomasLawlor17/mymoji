const Emoji = require("../../models/Emoji");
const Part = require("../../models/Part");

module.exports = {
	profileIndex,
	layers,
	layersIndex,
	addToLayers,
	saveEmoji,
	removeLayer,
	shareEmoji,
	changeName,
    layerUp,
    layerDown,
	addDL,
};

// Get all user created emojis
async function profileIndex(req, res) {
	const emojis = await Emoji.find({ user: req.user._id, saved: true }).populate(
		{ path: "layers", populate: { path: "paths" } }
	);
	res.json(emojis);
}

// NOT USED
async function layers(req, res) {
	const emoji = await Emoji.checkEmoji(req.user_id);
	res.json(emoji);
}

// Get emoji and populate layers/paths
async function layersIndex(req, res) {
	const emoji = await Emoji.find({ user: req.user._id, saved: false }).populate(
		{ path: "layers", populate: { path: "paths" } }
	);
	res.json(emoji);
}

// Find or create new emoji and add part to layers
async function addToLayers(req, res) {
	// Get the emoji to be added to
	const emoji = await Emoji.getEmoji(req.user._id);
	// Call upon model method puhsing part id into layers
	await emoji.addPartToLayers(req.params.id);
	// re-populate layers and paths
	const layers = await Emoji.find({
		user: req.user._id,
		saved: false,
	}).populate({ path: "layers", populate: { path: "paths" } });
	res.json(layers);
}

// Find emoji and remove part from layers
async function removeLayer(req, res) {
	const emoji = await Emoji.getEmoji(req.user._id);

	await emoji.removeLayer(req.params.id);

	const layers = await Emoji.find({
		user: req.user._id,
		saved: false,
	}).populate({ path: "layers", populate: { path: "paths" } });
	res.json(layers);
}

// Save emoji to db
async function saveEmoji(req, res) {
    console.log(req.user)
	const emoji = await Emoji.getEmoji(req.user._id);
	emoji.saved = true;
	if (req.body.name === "") {
		emoji.name = "Untitled"
	} else {
		emoji.name = req.body.name
	}
	await emoji.save();
	res.json(emoji);
}

// Set emoji as shared
async function shareEmoji(req, res) {
	const emoji = await Emoji.getEmoji(req.user._id);
	emoji.shareEmoji();
	res.json(emoji);
}

// Change name
async function changeName(req, res) {
    console.log(req.body)
	const emoji = await Emoji.find({ user: req.user._id, saved: false });
	await emoji.newName(req.body);
	const layers = await Emoji.find({
		user: req.user._id,
		saved: false,
	}).populate({ path: "layers", populate: { path: "paths" } });
	res.json(layers);
}

async function layerUp(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)
    await emoji.layerUp(req.params.id)
    const layers = await Emoji.find({
		user: req.user._id,
		saved: false,
	}).populate({ path: "layers", populate: { path: "paths" } });
    res.json(layers)
}

async function layerDown(req, res) {
    const emoji = await Emoji.getEmoji(req.user._id)
    await emoji.layerDown(req.params.id)
    const layers = await Emoji.find({
		user: req.user._id,
		saved: false,
	}).populate({ path: "layers", populate: { path: "paths" } });
    res.json(layers)
}

async function addDL(req, res) {
	console.log(req.body)
	const emoji = await Emoji.findById(req.params.id)
	await emoji.addDL(req.params._id)
	const shared = await Emoji.find({saved: true, shared: true}).populate('user').populate({path: 'layers', populate: {path: 'paths'}})
	console.log(emoji)
	res.json(shared)
}
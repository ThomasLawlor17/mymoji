require("dotenv").config();
require("./config/database");

const Category = require("./models/Category");
const Part = require("./models/Part")


(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: "Heads", order: 10 },
		{ name: "Eyes", order: 20 },
		{ name: "Mouths", order: 30 },
		{ name: "Toppers", order: 40 },
	]);

    await Part.deleteMany({})
    const parts = await Part.create([
        // Figure out how to import paths into array
    ])



});

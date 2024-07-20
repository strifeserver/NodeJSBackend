const { getAllHouses } = require('../models/housesModel');

async function getAllHousesController(req, res) {
    try {
        const { name, region, coatOfArms, words } = req.query;

        // Construct the filter object dynamically based on query parameters
        const filter = {};

        if (name) {
            filter.name = new RegExp(name, 'i'); // Case-insensitive match
        }

        if (region) {
            filter.region = new RegExp(region, 'i'); // Case-insensitive match
        }

        if (coatOfArms) {
            filter.coatOfArms = new RegExp(coatOfArms, 'i'); // Case-insensitive match
        }

        if (words) {
            filter.words = new RegExp(words, 'i'); // Case-insensitive match
        }

        const houses = await getAllHouses(filter);
        res.json(houses);
    } catch (err) {
        console.error('Error in controller:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getAllHousesController };

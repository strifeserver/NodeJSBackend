const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = new Schema({
    name: { type: String },
    region: { type: String },
    coatOfArms: { type: String },
    words: { type: String },
});

const House = mongoose.model('Houses', houseSchema);

async function getAllHouses(filter = {}) {
    try {
        return await House.find(filter);
    } catch (err) {
        console.error('Error fetching houses:', err);
        return [];
    }
}

module.exports = { getAllHouses, House };

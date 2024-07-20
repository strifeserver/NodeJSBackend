const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');  

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /api/houses', () => {
    it('should return all houses', async () => {
        const res = await request(app).get('/api/houses');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

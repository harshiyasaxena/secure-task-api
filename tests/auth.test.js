const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {

    test('Should return 404 for invalid route', async () => {

        const response = await request(app).get('/invalid-route');

        expect(response.statusCode).toBe(404);

    });

});
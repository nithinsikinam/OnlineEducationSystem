const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with 200 status and "Hello, world!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, world!')
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

//test.js
const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

test("Some test name", () => {
  expect(process.env.PORT).toBe("3000")
})

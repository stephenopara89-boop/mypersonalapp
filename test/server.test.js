const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../server");

test("GET / returns the application page", async () => {
  const response = await request(app).get("/");

  assert.strictEqual(response.status, 200);
  assert.match(response.text, /My Personal App/);
  assert.match(response.text, /Node\.js is working!/);
});

test("GET /api/health returns healthy status", async () => {
  const response = await request(app).get("/api/health");

  assert.strictEqual(response.status, 200);
  assert.deepStrictEqual(response.body, {
    status: "ok",
    message: "My Personal App is running"
  });
});

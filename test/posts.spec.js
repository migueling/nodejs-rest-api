const request = require("supertest");

const app = require("../src/index");

describe("Calling GET /posts", () => {
  test("It should response with a 200 status code", async () => {
    const response = await request(app).get("/posts").send();
    expect(response.status).toBe(200);
  });

  test("It should response with an array", async () => {
    const response = await request(app).get("/posts").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

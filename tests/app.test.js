const request = require("supertest");
const app = require("../src/app");

describe("Health endpoint", () => {
  test("GET /health returns healthy status", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});

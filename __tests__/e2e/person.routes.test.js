import request from "supertest";
import app from "../../app.js"; // Your main app.js
import PersonController from "../../controllers/person.controller.js";
import { jest } from "@jest/globals";


describe("Person Routes", () => {
  test("GET /person should return list", async () => {
    const res = await request(app).get("/person/");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

   test("POST /person should add person", async () => {
    const req = { body: { name: "Alice", email: `alice${Date.now()}@gmail.com`, password: "1234" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await PersonController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ name: "Alice" })
    );
   });
});

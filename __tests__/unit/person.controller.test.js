import PersonController from "../../controllers/person.controller.js";
import { jest } from "@jest/globals";


describe("Person Controller", () => {
  test("getPersons should return array", async () => {
    const req = {};
    const res = {
    status: jest.fn().mockReturnThis(), // important: returns `res` so you can chain .json()
    json: jest.fn()
    };


    await PersonController.getAll(req, res);

    expect(res.json).toHaveBeenCalled();
    expect(Array.isArray(res.json.mock.calls[0][0])).toBe(true);
  });

  test("addPerson should return success status Code", async () => {
    const req = { body: { name: "John", email: "John@gmail.com" ,password: "12345678909"} };
    const res = {
    status: jest.fn().mockReturnThis(), // important: returns `res` so you can chain .json()
    json: jest.fn()
    };


    await PersonController.create(req, res);
    expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({ name: "John" })
    );
    expect(res.status).toHaveBeenCalledWith(201);
  });
});

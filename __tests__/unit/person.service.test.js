import personService from "../../services/person.service.js";
import { jest } from "@jest/globals";

jest.mock("../../repositories/person.repository.js", () => ({
  findAll: jest.fn().mockResolvedValue([{ name: "Alice", email: "alice@gmail.com" }]),
  create: jest.fn().mockImplementation((data) => Promise.resolve(data)),
  findByEmail: jest.fn().mockResolvedValue(null),
}));

  test("should add a person", async () => {
    const result = await personService.createPerson({
      name: "Bob",
      email: "bob@gmail.com",
      password: "1234123456",
    });

    expect(result).toEqual(
      expect.objectContaining({ name: "Bob", email: "bob@gmail.com" })
    );
  });

  describe("Person Service", () => {
  test("should return all persons", async () => {
    await personService.createPerson({
      name: "Bob",
      email: "bob@gmail.com",
      password: "1234123456",
    });
    const result = await personService.getAllPersons();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toHaveProperty("name","Bob");
  });
});

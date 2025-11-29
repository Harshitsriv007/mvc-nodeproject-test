import Person from "../../models/person.model.js";

describe("Person Model", () => {
  test("should create a new person instance", () => {
    const p = new Person({ name: "Sam", email: "Sam@gmail.com" });
    expect(p.name).toBe("Sam");
    expect(p.email).toBe("Sam@gmail.com");
  });
});

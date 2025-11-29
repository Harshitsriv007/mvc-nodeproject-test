// services/person.service.js
import personRepo from "../repositories/person.repository.js";
import bcrypt from "bcryptjs";

class PersonService {

  async createPerson(data) {
    // check email exists
    const exists = await personRepo.findByEmail(data.email);
    if (exists) throw new Error("Email already exists");

    // encrypt password
    data.password = await bcrypt.hash(data.password, 10);

    return await personRepo.create(data);
  }

  async getAllPersons() {
    return await personRepo.findAll();
  }

  async getPerson(id) {
    return await personRepo.findById(id);
  }

  async updatePerson(id, data) {
    return await personRepo.update(id, data);
  }

  async deletePerson(id) {
    return await personRepo.delete(id);
  }
}

export default new PersonService();

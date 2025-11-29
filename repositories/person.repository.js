// repositories/person.repository.js
import Person from "../models/person.model.js";

class PersonRepository {
  
  async create(personData) {
    return await Person.create(personData);
  }

  async findAll() {
    return await Person.find();
  }

  async findById(id) {
    return await Person.findById(id);
  }

  async findByEmail(email) {
    return await Person.findOne({ email });
  }

  async update(id, updateData) {
    return await Person.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Person.findByIdAndDelete(id);
  }
}

export default new PersonRepository();

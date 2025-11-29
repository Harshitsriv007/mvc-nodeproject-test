// controllers/person.controller.js
import personService from "../services/person.service.js";

class PersonController {

  async create(req, res) {
    try {
      const result = await personService.createPerson(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    const persons = await personService.getAllPersons();
    return res.json(persons);
  }

  async getOne(req, res) {
    const person = await personService.getPerson(req.params.id);
    return res.json(person);
  }

  async update(req, res) {
    const updated = await personService.updatePerson(req.params.id, req.body);
    return res.json(updated);
  }

  async delete(req, res) {
    const deleted = await personService.deletePerson(req.params.id);
    return res.json({ message: "Deleted", deleted });
  }
}

export default new PersonController();

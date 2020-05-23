const connection = require("../database/connection");

class PatientController {
  async index(req, res) {
    const patients = await connection("patients").select("*");
    return res.json(patients);
  }
  async create(req, res) {
    try {
      const data = req.body;
      const [id] = await connection("patients").insert(data);
      const [patient] = await connection("patients").where({ id }).select("*");
      return res.json(patient);
    } catch (err) {
      return res.status(409).json({ message: "Duplicated entries" });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const [patient] = await connection("patients").where({ id }).select("*");
      return res.json(patient);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Error when connecting to Database" });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      await connection("patients").update(data).where({ id });
      const [patient] = await connection("patients").where({ id }).select("*");
      return res.json(patient);
    } catch (err) {
      return res.status(400).json({ message: "Error when updating" });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      await connection("patients").delete().where({ id });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({ message: "Error when destroying" });
    }
  }
}

module.exports = new PatientController();

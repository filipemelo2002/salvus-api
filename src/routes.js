const express = require("express");
const routes = express.Router();

const PatientController = require("./controller/PatientController");
routes.get("/", (req, res) =>
  res.json({
    greeting: "Hello there",
  })
);
routes.get("/api/patients", PatientController.index);
routes.get("/api/patients/:id", PatientController.show);
routes.put("/api/patients/:id", PatientController.update);
routes.delete("/api/patients/:id", PatientController.destroy);
routes.post("/api/patients", PatientController.create);
module.exports = routes;

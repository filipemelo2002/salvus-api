const express = require("express");
const routes = express.Router();

const PatientController = require("./controller/PatientController");
routes.get("/", (req, res) =>
  res.json({
    greeting: "Hello there",
  })
);
routes.get("/patients", PatientController.index);
routes.get("/patients/:id", PatientController.show);
routes.put("/patients/:id", PatientController.update);
routes.delete("/patients/:id", PatientController.destroy);
routes.post("/patients", PatientController.create);
module.exports = routes;

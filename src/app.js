const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get("/api/customers", (req, res) => {
  res.json([]);
});

app.post("/api/customers", (req, res) => {
  res.status(201).json({
    message: "Customer created"
  });
});

app.get("/api/customers/:id", (req, res) => {
  res.json({
    id: req.params.id
  });
});

app.delete("/api/customers/:id", (req, res) => {
  res.status(204).send();
});

module.exports = app;

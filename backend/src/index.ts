import express from "express";

const app = express();

app.use(express.json());

// GET
// PUT
// POST
// DELETE

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.get("/hello", (req, res, next) => {
  res.send("Hello World");
});

app.post("/hello", (req, res, next) => {
  console.log(req.body.name);
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
import express from "express";
const app = express();
// middleware
app.use(express.json());
// GET
// PUT
// POST
// DELETE
app.get("/", (req, res, next) => {
    res.send("Hello World");
});
app.put("/hello", (req, res, next) => {
    console.log(req.body.name);
    res.send("Hello World");
});
app.post("/hello", (req, res, next) => {
    console.log(req.body.name);
    res.send("Hello World");
});
app.delete("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    res.send(`User ${req.params.id} deleted`);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map
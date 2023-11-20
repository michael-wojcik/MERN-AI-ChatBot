import express from "express";
const app = express();
// GET
// PUT
// POST
// DELETE
app.get("/hello", (req, res, next) => {
    res.send("Hello World");
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
//# sourceMappingURL=index.js.map
import express from "express";
const app = express();
// Middlewares
app.use(express.json());
// Connections and listeners
app.listen(3000, () => console.log("Server is running on port 3000"));
//# sourceMappingURL=index.js.map
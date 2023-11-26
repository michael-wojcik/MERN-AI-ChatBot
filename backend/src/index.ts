import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connections and listeners
const PORT = process.env.PORT || 3000;
try {
    await connectToDatabase();
    app.listen(PORT, () => console.log("Server is running on port 3000"));
} catch (error) {
    console.log("Error connecting to database: ", error);
}

import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log('Connected to database');
    }
    catch (error) {
        console.log('Error connecting to database: ', error);
        throw new Error('Cannot connect to MongoDB');
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log('Disconnected from database');
    }
    catch (error) {
        console.log('Error disconnecting from database: ', error);
        throw new Error('Cannot disconnect from MongoDB');
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map
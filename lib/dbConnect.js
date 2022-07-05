import mongoose from 'mongoose';
const { MONGO_URI } = process.env;
const connection = {
    isConnected: false,
};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;

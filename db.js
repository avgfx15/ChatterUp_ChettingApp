import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const dbUrl = process.env.db_URL;

// Connect MongoDB at default port 27017.
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log('MongoDB Connection Succeeded.')
    } catch (error) {
        console.log('Error in DB connection: ' + err)
    }
};

export default connectDB;
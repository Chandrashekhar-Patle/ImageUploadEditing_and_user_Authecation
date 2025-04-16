const mongoose = require("mongoose")

const db_URL = process.env.MONGODB_URL


const dbConnection = async () => {
    
    try {
        await mongoose.connect(db_URL);
        console.log(`MongoDB connected successfully`);     
    } catch (error) {
        console.log(`Database connection Failed ${error}`);
        
    }
}

module.exports = dbConnection;
import mongoose from 'mongoose';
const log = console.log;

export const Connection = async (user, password) => {
    const URL = `mongodb+srv://${user}:${password}@ecommerce-web.8aarztn.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true});
        log('Database connnected successfully');
    }
    catch (error) {
        log(`Error while connecting with the database ${error.message}`);
    }
}

export default Connection;
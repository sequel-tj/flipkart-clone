import mongoose from 'mongoose';


export const Connection = async (user, password) => {
    const URL = `mongodb+srv://${user}:${password}@ecommerce-web.8aarztn.mongodb.net/ecommerce?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log('Database connnected successfully');
    }
    catch (error) {
        console.log(`Error while connecting with the database ${error.message}`);
    }
}

export default Connection;
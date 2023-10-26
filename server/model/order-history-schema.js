import mongoose from "mongoose";


const orderHistory = new mongoose.Schema({
    _id: {
        type: Date,
        default: Date.now() + 1.98e+7,
    },
    email: String,
    title: String,
    price: String,
    quantity: String,
    description: String,
})


const Orders = new mongoose.model('orders', orderHistory);

export default Orders;
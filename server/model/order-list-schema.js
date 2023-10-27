import mongoose from "mongoose";


const orderHistory = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now() + 1.98e+7
    },
    productId: String,
    quantity: String,
})


const Orders = new mongoose.model('orders', orderHistory);

export default Orders;
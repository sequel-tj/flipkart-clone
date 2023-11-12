import mongoose from "mongoose";


const orderHistory = new mongoose.Schema({
    order_id: String,
    product_id: String,
    quantity: String,
})


const Orders = new mongoose.model('orders', orderHistory);

export default Orders;
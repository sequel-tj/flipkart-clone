import mongoose from "mongoose";


const order = new mongoose.Schema({
    order_id: String,
    product_id: String,
    quantity: String,
})


const Orders = new mongoose.model('orders', order);

export default Orders;
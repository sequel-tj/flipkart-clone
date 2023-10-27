import mongoose from "mongoose";


const orderid = new mongoose.Schema({
    orderId: {
        type: Date,
        unique: true,
        default: Date.now() + 1.98e+7
    },
    username: String,
})


const OrderId = new mongoose.model('orderId', orderid);

export default OrderId;
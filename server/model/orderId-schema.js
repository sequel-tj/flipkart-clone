import mongoose from "mongoose";


const orderid = new mongoose.Schema({
    _id: String,
    payment_id: String,
    username: String,
    date: Date,

    // date: {
    //     type: Date,
    //     unique: true,
    //     default: Date.now() + 1.98e+7
    // },
})


const OrderId = new mongoose.model('orderId', orderid);

export default OrderId;
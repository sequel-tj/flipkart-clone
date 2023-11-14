import mongoose from "mongoose";


const payment = new mongoose.Schema({
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


const Payments = new mongoose.model('payments', payment);

export default Payments;
import Razorpay from 'razorpay';
import crypto from 'crypto';

import { placeOrder } from './order-controller.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


export const checkout = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
        });

        var options = {
            amount: req.body.amt * 100, // paise (not rupees), so convert accordingly i.e 500 * 100 => 500 rs
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        const response = await instance.orders.create(options).catch((error) => {
            res.status(500).json({
                message: 'something went wrong',
                error: error.error
            })
        });

        res.status(200).json({
            success: true,
            orderRes: response
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'server error',
            error: err.error,
        })
    }
}


export const paymentVerification = async (req, res) => {

    try {
        // console.log(req.body)
        const { username, payment, cartItems } = req.body;
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = payment;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            console.log('Payment Received.');
            console.log('Payment verified successfully.');

            // database payment creation
            // const orderid = razorpay_order_id;
            // const paymentid = razorpay_payment_id;

            // const mes = await placeOrder({ orderid, paymentid, username, cartItems });
            // console.log('\nplaceOrder message');
            // console.log(mes);

            // success page
            // if (status === 200)
            //   res.redirect(`http://localhost:3000/paymentsuccess?pid=${razorpay_payment_id}&oid=${razorpay_order_id}`);
            // else
                // res.redirect(`http://localhost:3000/paymentfailure`);

            
            console.log('payment controller');
            return res.status(200).json({
                message: "Order placed successfully",
            })
        }
        else {
            return res.status(400).json({
                message: "Invalid signature sent",
            })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error', error: error.error });
    }
}


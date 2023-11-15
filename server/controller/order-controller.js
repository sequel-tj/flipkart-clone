import Orders from "../model/order-schema.js";
import Payments from "../model/payment-schema.js";


export const getOrderIds = async (req, res) => {

    const username = req.params.username;

    try {
        let orderIds = await Payments
            .find({ "username": username })
            .sort({ 'date': 1 })
            .select({ 'date': 1, '_id': 1 });

        res.status(200).json(orderIds);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export const getOrders = async (req, res) => {
    const orderid = req.params.oid;

    try {
        let orders = await Orders
            .find({ "order_id": orderid })
            .select({ "product_id": 1, "quantity": 1, "_id": 0 })
            .sort({ product_id: 1 });

        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export const placeOrder = async (req, res) => {
    try {
        console.log('\norder controller');
        const { orderid, paymentid, username, cartItems } = req.body;
        const date = new Date(Date.now());
        // const date = new Date();
        // const dd = date.getDate();
        // const mm = date.getMonth() + 1;
        // const yyyy = date.getFullYear();

        // create order
        const payment = new Payments({
            _id: orderid,
            payment_id: paymentid,
            username: username,
            date: date,
        });

        await payment.save();

        console.log('Payment created');

        // insert cartItems
        cartItems.map(async (item) => {
            const { id, quantity } = item;
            const orderItem = new Orders({
                order_id: orderid,
                product_id: id,
                quantity: quantity,
            });

            await orderItem.save();
        })

        res.status(200).json({
            message: "order placed successfully",
        })

        console.log('Order created in database');
        console.log('order controller exit');
        console.log('--------------------------------\n');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
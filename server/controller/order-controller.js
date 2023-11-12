import Orders from "../model/order-list-schema.js";
import OrderId from "../model/orderId-schema.js";


export const getOrderIds = async (req, res) => {

    const username = req.params.username;

    try {
        let orderIds = await OrderId
            .find({ "username": username })
            .sort({ 'date': 1 })
            .select({ 'date': 1, '_id': 1 });

        // let orders = orderIds.map((order) => {
        //     return order._id;
        // })

        res.status(200).json(orderIds);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export const getOrders = async (req, res) => {
    const username = req.params.username;
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
        const { orderid, paymentid, username, cartItems } = req.body;
        const date = new Date(Date.now());
        // const date = new Date();
        // const dd = date.getDate();
        // const mm = date.getMonth() + 1;
        // const yyyy = date.getFullYear();

        // create order
        const order = new OrderId({
            _id: orderid,
            payment_id: paymentid,
            username: username,
            date: date,
        });

        await order.save();

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
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
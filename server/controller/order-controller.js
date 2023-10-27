import Orders from "../model/order-list-schema.js";
import OrderId from "../model/orderId-schema.js";


export const getOrderIds = async (req, res) => {

    const username = "tanmay";

    try {
        let orderIds = await OrderId
            .find({ "username": username })
            .sort({ orderId: 1 })
            .select({ 'orderId': 1, '_id': 0 });

        let orders = orderIds.map((order) => {
            return order.orderId;
        })

        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export const getOrders = async (req, res) => {

    const timestamp = req.params.orderId;

    try {
        let orders = await Orders
            .find({ "timestamp": timestamp })
            .select({ "productId": 1, "quantity": 1 })
            .sort({ productId: 1 });

        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}
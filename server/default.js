import { products, orders, orderIds } from "./constants/data.js";
import Product from "./model/product-schema.js";
import Orders from "./model/order-list-schema.js";
import OrderId from "./model/orderId-schema.js";

const DefaultData = async () => {
    try {
        // await Product.deleteMany();
        // await Product.insertMany(products);
        // await OrderId.deleteMany();
        // await OrderId.insertMany(orderIds);
        // await Orders.deleteMany();
        // await Orders.insertMany(orders);
        console.log('Data inserted successfully');
    }
    catch(err) {
        console.log(`Error while inserting default data ${err}`)
    }
}

export default DefaultData;
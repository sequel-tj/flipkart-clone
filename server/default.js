import { products, orders, payments } from "./constants/data.js";
import Product from "./model/product-schema.js";
import Orders from "./model/order-schema.js";
import Payments from "./model/payment-schema.js"

const DefaultData = async () => {
    try {
        // await Orders.deleteMany();
        // await Payments.deleteMany();
        // await Orders.insertMany(orders);
        // await Payments.insertMany(Payments);

        // console.log('Data inserted successfully');
    }
    catch(err) {
        console.log(`Error while inserting default data ${err}`)
    }
}

export default DefaultData;
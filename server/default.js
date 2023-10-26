import { products, orders } from "./constants/data.js";
import Product from "./model/product-schema.js";
import Orders from "./model/order-history-schema.js";

const DefaultData = async () => {
    try {
        // await Product.deleteMany();
        // await Product.insertMany(products);
        // await Orders.deleteMany();
        // await Orders.insertMany(orders);
        console.log('Data inserted successfully');
    }
    catch(err) {
        console.log(`Error while inserting default data ${err}`)
    }
}

export default DefaultData;
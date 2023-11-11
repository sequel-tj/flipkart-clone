import { instance } from '../index.js';


export const checkout = async (req, res) => {

    var options = {
        amount: 500 * 100, // paise (not rupees), so convert accordingly i.e 500 * 100 => 500 rs
        currency: "INR",
    };

    try {
        const response = await instance.orders.create(options);
    
        res.status(200).json({
            status: 200,
            success: true,
            payload: response
        })
    }
    catch(err) {
        res.status(500).json({
            status: 500,
            error: err.error,
        })
    }
}
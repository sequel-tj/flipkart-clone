import axios from 'axios';

// const URL = 'http://localhost:8000';
const URL = 'https://shopin-server.onrender.com';


export const authenticateSignup = async (data) => {
    try {
        return await axios.post(URL + '/signup', data);
    }
    catch (error) {
        console.log("error while calling the signup api:", error);
        return {status: 500, error: error.response};
    }
}


export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    }
    catch (error) {
        console.log("error while calling the login api:", error);
        return {status: 500, error: error.response};
    }
}


export const getUserDetails = async (username) => {
    try {
        return await axios.get(`${URL}/getUserDetails/${username}`);
    }
    catch (error) {
        console.log("user not exits");
        return {status: 500, error: error.response};
    }
}


export const getOrderHistory = async (username) => {
    try {
        const { data, status } = await axios.get(`${URL}/${username}/orders`);

        if (status !== 200) return data;

        let orderhistory = await Promise.all(data.map(async (orderids) => {
            try {
                const orders = await axios.get(`${URL}/${username}/orders/${orderids._id}`);
                return { "timestamp": orderids.date, "data": orders.data, "status": 200 }
            }
            catch (error) {
                console.log(error);
                return { "timestamp": orderids.date, "data": error, "status": 500 }
            }
        }))

        // console.log(orderhistory);
        return { data: orderhistory, status: 200 };
    }
    catch (error) {
        return { error, status: 500 };
    }
}


export const checkout = async (amt) => {
    const { data } = await axios.post(`${URL}/checkout`, { amt });
    return data;
}


export const getKey = async () => {
    const resp = await axios.get(`${URL}/api/rzrpayKeyID`);
    return resp;
}


export const initPayment = async (order, username, cartItems) => {
    return new Promise(async (resolve, reject) => {
        const { data: { key_id } } = await getKey();
        const { data: { user } } = await axios.get(`${URL}/getUserDetails/${username}`);

        var options = {
            key: key_id,
            amount: order.amount / 100,
            currency: order.currency,
            name: "Ecommerce Project Testing",
            description: "Test Transaction",
            image: "https://tanmayjaiswal.is-a.dev/img/favico/tJ.ico",
            order_id: order.id,

            prefill: {
                name: user.firstname + " " + user.lastname,
                email: user.email,
                contact: user.phone,
            },

            handler: async (response) => {
                try {
                    const verifyURL = `${URL}/paymentverification`;
                    const result = await axios.post(verifyURL, response);
                    // console.log(result);
                    
                    if (result.status === 200) {
                        resolve({
                            success: true,
                            message: result.data.message,
                            data: response
                        });
                    } else {
                        reject({
                            success: false,
                            message: 'Payment verification failed',
                            // error: data.message
                        });
                    }
                }
                catch (error) {
                    reject({
                        success: false,
                        message: 'Error occurred while verifying the payment',
                        error: error
                    });
                }
            },

            notes: {
                address: "Razorpay Corporate Office"
            },

            theme: {
                color: "#3399cc"
            },
        };

        const razor = new window.Razorpay(options);
        razor.open();
    });
}

export const placeOrder = async (orderid, paymentid, username, cartItems) => {
    try {
        const { data: { message } } = await axios.post(`${URL}/placeOrder`, { orderid, paymentid, username, cartItems });
        return { status: 200, data: message };
    }
    catch (error) {
        return { status: 500, data: error };
    }
}
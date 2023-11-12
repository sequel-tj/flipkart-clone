import axios from 'axios';

const URL = 'http://localhost:8000'


export const authenticateSignup = async (data) => {
    try {
        return await axios.post(URL + '/signup', data);
    }
    catch (error) {
        console.log("error while calling the signup api:", error);
        return error.response;
    }
}


export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    }
    catch (error) {
        console.log("error while calling the login api:", error);
        return error.response;
    }
}


export const getUserDetails = async (username) => {
    try {
        return await axios.get(`${URL}/getUserDetails/${username}`);
    }
    catch (error) {
        console.log("user not exits");
        return error.response;
    }
}


export const getOrderHistory = async (username) => {
    try {
        const { data, status } = await axios.get(`${URL}/${username}/orders`);

        if (status !== 200) return data;

        let orderhistory = await Promise.all(data.map(async (timestamp) => {
            try {
                const orders = await axios.get(`${URL}/${username}/orders/${timestamp}`);
                return { "timestamp": timestamp, "data": orders.data, "status": 200 }
            }
            catch (error) {
                console.log(error);
                return { "timestamp": timestamp, "data": error, "status": 200 }
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


export const initPayment = async (order, username) => {
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

        // callback_url: "http://localhost:8000/paymentverification",
        handler: async (response) => {
            try {
                const verifyURL = `${URL}/paymentverification`;
                const { data } = await axios.post(verifyURL, response);

            }
            catch (error) {
                console.log(error);
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
}

export const placeOrder = async (orderid, paymentid, username, cartItems) => {
    try {
        const { data: {message} } = await axios.post(`${URL}/placeOrder`, { orderid, paymentid, username, cartItems });
        return {status: 200, data: message};
    }
    catch (error) {
        return {status: 500, data: error};
    }
}
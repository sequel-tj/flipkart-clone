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


export const getOrderHistory = async(username) => {
    try {
        const {data, status} = await axios.get(`${URL}/${username}/orders`);

        if (status !== 200) return data;

        let orderhistory = await Promise.all(data.map(async (timestamp) => {
            try {
                const orders = await axios.get(`${URL}/${username}/orders/${timestamp}`);
                return {"timestamp": timestamp, "data": orders.data, "status": 200}
            }
            catch (error) {
                console.log(error);
                return {"timestamp": timestamp, "data": error, "status": 200}
            }
        }))

        // console.log(orderhistory);
        return {data: orderhistory, status: 200};
    }
    catch (error) {
        return {error, status: 500};
    }
}
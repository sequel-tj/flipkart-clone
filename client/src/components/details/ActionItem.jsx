/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from 'react';

import { Box, Button, css } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart, resetCart } from '../../redux/actions/cartActions';
import { checkout, getKey, initPayment, placeOrder } from '../../service/api'
import { DataContext } from '../../context/DataProvider';
// import tjlogo from '../../img/tj.png';



const leftContainer = css`
    min-width: 40%;
    padding: 40px 0 0 80px;
    @media (max-width: 1200px) {
        padding: 20px 40px;
    }
`;

const image = css`
    width: 90%;
    padding: 15px
    `;

const btn = css`
    width: 48%;
    height: 50px;
    border-radius: 2px;
    @media (max-width: 1200px) {
        width: 46%;
    }
    @media (max-width: 600px) {
        width: 48%;
    }
    `;


const ActionItem = ({ product }) => {

    const quantity = useState(1)[0];

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { account, setOpen } = useContext(DataContext);

    const { id } = product;


    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const handlePayment = async () => {
        if (!account) {
            setOpen(true);
            return;
        }

        try {
            const { orderRes } = await checkout(product.price.cost + 40);
            const { success, data, message } = await initPayment(orderRes, account, [product]);
            // console.log(paymentResponse);

            const { razorpay_order_id, razorpay_payment_id } = data;

            if (success) {
                const result = await placeOrder(razorpay_order_id, razorpay_payment_id, account, [product]);
                
                if (result.status === 200) {
                    // empty cart
                    console.log('resetting cart...');
                    dispatch(resetCart());
                    
                    console.log(result.data);
                    
                    // redirect to homepage
                    console.log('redirecting to homepage..');
                    navigate(`/paymentsuccess?pid=${razorpay_payment_id}&oid=${razorpay_order_id}`);
                }
                else {
                    console.log(result);
                }
            } else {
                console.log(message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <Box css={leftContainer}>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>;
                <img css={image} src={product.detailUrl} alt="product-img" />
            </Box>
            <Button onClick={addItemToCart} css={btn} variant="contained" style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</Button>
            <Button css={btn} onClick={handlePayment} variant="contained" style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</Button>
        </Box>
    )
}

export default ActionItem;
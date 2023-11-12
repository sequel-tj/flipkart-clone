/** @jsxImportSource @emotion/react */

import { Box, Button, Grid, Typography, css } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import TotalBalance from './TotalBalance';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { checkout, initPayment, placeOrder } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../redux/actions/cartActions';


const Container = css`
    padding: 30px 135px;
    @media screen and (max-width: 900px) {
        padding: 30px 24px;
    }
`;

const Header = css`
    padding: 15px 24px;
    background: #ffffff;
`;

const PlaceOrderWrapper = css`
    border-top: 1px solid #f0f0f0;
    padding: 16px 22px;
    background: #ffffff;
    box-shadow: 0 -2px 10px 0 rgba(0 0 0 / 10%);
`

const PlaceOrderBtn = css`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    height: 51px;
    color: #ffffff;
    border-radius: 2px;
    width: 250px;
    transition: 0.5s;
    :hover {
        background: #fb641b;
        color: #ffffff;
        box-shadow: 0px 0px 4px #878787;
    }
`

const LeftComponent = css`
    padding-right: 15px;
    @media screen and (max-width: 900px) {
        margin-bottom: 15px;
        padding-right: 0px;
    }
`


const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);
    const { account, setOpen } = useContext(DataContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePayment = async () => {
        if (!account) {
            setOpen(true);
            return;
        }

        try {
            let price = 0, discount = 0;

            cartItems.map(item => {
                price += (item.price.mrp * item.quantity);
                discount += ((item.price.mrp * item.quantity) - (item.price.cost * item.quantity));
            })

            // const {orderRes} = await checkout(price-discount+40);
            // initPayment(orderRes, account);

            const orderid = 'aaaaaaaaaa';
            const paymentid = 'bbbbbbbbb';

            const result = await placeOrder(orderid, paymentid, account, cartItems);
            
            if (result.status === 200) {
                // empty cart
                dispatch(resetCart());

                // redirect to homepage
                navigate('/');
            }
            else {
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                cartItems.length ?
                    <Grid container css={Container}>
                        <Grid css={LeftComponent} item lg={9} md={9} sm={12} xs={12}>
                            <Box css={Header}>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Box>

                            {
                                cartItems.map((item, idx) => (
                                    <CartItem key={idx} item={item} />
                                ))
                            }

                            <Box css={PlaceOrderWrapper}>
                                <Button css={PlaceOrderBtn} onClick={handlePayment}>Place Order</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems} />
                        </Grid>
                    </Grid>
                    :
                    <EmptyCart />
            }
        </>
    )
}

export default Cart;
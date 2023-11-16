/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, Typography, css } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

import { getOrderHistory } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';
import { addEllipsis } from '../../utils/common-utils';

const Header = css`
    padding: 15px 24px;
    background: #ffffff;
    text-align: center;
    margin-bottom: 2px;
    `;

const Container = css`
    padding: 30px 135px;
    // background: #ffffff;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 900px) {
        padding: 30px 24px;
    }
`;


const MyOrders = () => {

    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const { products } = useSelector(state => state.getProducts);

    useEffect(() => {
        async function fetchOrders() {
            if (!account) {
                navigate('/');
            }

            const { status, data } = await getOrderHistory(account);

            if (status === 200) {
                const d = data.reverse();
                console.log(d);
                setOrders(d);
            }
        }

        fetchOrders();
    }, [])

    
    const loadProduct = (id) => {
        navigate(`/product/${id}`);
    }


    return (
        <Grid container css={Container}>
            <Grid style={{ background: "#f1f1f1" }} item lg={12} md={12} sm={12} xs={12}>
                <Box css={Header}>
                    <Typography variant='h5'>My Orders</Typography>
                </Box>
                {/* <Box style={{ width: "100%", height: 1, background: "#878787" }}></Box> */}

                {
                    orders && orders.length > 0 &&
                    orders.map((order, idx) => {
                        const { status, data, timestamp } = order;
                        if (status === 200) {
                            const tstamp = new Date(timestamp);

                            for (let i = 0; i < data.length; i++) {
                                const { product_id, quantity } = data[i];
                                const { price, title, url } = products.filter(product => product.id === product_id)[0];
                                return (
                                    // <Link key={idx} to={`product/${product_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <Box onClick={() => loadProduct(product_id)} style={{ margin: '0px 0 5px 0', width: '100%', cursor: 'pointer' }}>
                                            <Box style={{ width: '100%', height: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', }}>
                                                <Box style={{ padding: 10, background: '#fff', textAlign: 'center' }}>
                                                    <img src={url} alt="product" style={{ height: 100, width: 100, objectFit: 'fill' }} />
                                                </Box>
                                                <Box style={{ width: '80%', margin: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box>
                                                        <Typography style={{ fontWeight: 600, }}>{addEllipsis(title.longTitle)}</Typography>
                                                        <Typography style={{ fontSize: 14 }}>Seller: Flipy Retails Pvt. Ltd.</Typography>
                                                        <Typography style={{ fontSize: 14 }}>Quantity: {quantity}</Typography>
                                                        <Typography>
                                                            <Typography variant='span' style={{ fontWeight: 100 }}>Date: </Typography>
                                                            <Typography variant='span' style={{ color: 'green' }}>{tstamp.toDateString()}</Typography>
                                                        </Typography>
                                                    </Box>
                                                    <Typography style={{ margin: "20px 0" }}>
                                                        <Box component="span" style={{ fontWeight: 600, fontSize: '17px' }}>₹{price.cost * quantity}</Box>&nbsp;&nbsp;&nbsp;
                                                        {/* <Box component="span" style={{ color: '#878787', fontSize: '14px' }}><strike>₹{price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp; */}
                                                        {/* <Box component="span" style={{ color: '#388E3C', fontSize: '15px', fontWeight: '600' }}>{price.discount} Off</Box> */}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    // </Link>
                                );
                            }
                        }
                    })
                }

                <Box style={{ background: '#fff', margin: '0 0 0 0', width: '100%', textAlign: 'end' }}>
                    <Button style={{ marginRight: 20 }}>Load More</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MyOrders;
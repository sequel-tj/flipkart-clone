/** @jsxImportSource @emotion/react */

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import { Box, Grid, Stack, Typography, css } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SavingsIcon from '@mui/icons-material/Savings';
import StoreIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { DataContext } from "../../context/DataProvider";

import { getOrderHistory } from "../../service/api";

import MixBarChart from "../charts/MixBarChart";
import PieChartCustomAcitve from "../charts/PieChartCustomActive";



const Component = css`
    margin: 0px 35px;
`
const gridItem = css`
    // margin: 10px;
`

const rightCard = css`
    padding: 10px;
`

const priceTitle = css`
    font-weight: 600;
`

const priceSubTitle = css`
    font-size: 14px;
`

const gradientBlue = css`
    background: rgb(40, 34, 70);
    background: linear-gradient(158deg, rgba(40, 34, 70, 1) 0%, rgba(30, 47, 141, 1) 100%);
`

const gradientLime = css`
    background: rgb(53, 138, 148);
    background: linear-gradient(158deg, rgba(53, 138, 148, 1) 0%, rgba(91, 180, 96, 1) 100%);
`

const gradientRed = css`
    background: rgb(230, 22, 22);
    background: linear-gradient(158deg, rgba(230, 22, 22, 0.85) 0%, rgba(230, 22, 26, 0.9) 100%);
`

const gradientYellow = css`
    background: rgb(255, 195, 0);
    background: linear-gradient(158deg, rgba(255, 191, 0, 1) 0%, rgba(241, 196, 15, 1) 100%);
`

let graphData = [
    {
        name: "Jan",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Feb",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Mar",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Apr",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "May",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Jun",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Jul",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Aug",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Sep",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Oct",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Nov",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
    {
        name: "Dec",
        MRP: 0,
        Cost: 0,
        Discount: 0
    },
];


const Dashboard = () => {

    let { products } = useSelector(state => state.getProducts);

    const username = useContext(DataContext).account;

    const navigate = useNavigate();

    const [category, setCategory] = useState({});
    const [barData, setBarData] = useState([]);
    const [monthlyExp, setMonthlyExp] = useState(0.0);
    const [totalExp, setTotalExp] = useState(0.0);
    const [monthlySavings, setMonthlySavings] = useState(0.0);
    const [totalSavings, setTotalSavings] = useState(0.0);


    const orderAPI = async () => {
        try {
            let { data, status } = await getOrderHistory(username);
            console.log(data);

            if (status === 200) {

                const currMonth = new Date().getMonth();

                let totalcost = 0.00;
                let totaldiscount = 0.00;

                let catArray = [];
                let map = {};

                data.map((item) => {
                    let mrp = 0.00;
                    let discount = 0.00;
                    let cost = 0.00;

                    const orders = item.data;
                    const timestamp = item.timestamp;

                    for (let i = 0; i < orders.length; i++) {
                        const { productId, quantity } = orders[i];
                        const { price, title } = products.filter(product => product.id === productId)[0];

                        // console.log(price);
                        mrp += (price.mrp * quantity);
                        cost += price.cost;
                        discount += (price.mrp - price.cost);

                        catArray.push(title.shortTitle);
                    }

                    let monthIdx = (timestamp[5] - '0') * 10 + (timestamp[6] - '1');

                    graphData[monthIdx].MRP = mrp;
                    graphData[monthIdx].Discount = discount;
                    graphData[monthIdx].Cost = cost;

                    if (monthIdx === currMonth) {
                        setMonthlyExp(cost);
                        setMonthlySavings(discount);
                    }

                    totalcost += cost;
                    totaldiscount += discount;

                })

                catArray.forEach((item) => {
                    if (map[item]) map[item]++;
                    else map[item] = 1;
                });

                setCategory(map);
                setBarData(graphData);
                setTotalExp(totalcost);
                setTotalSavings(totaldiscount);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { 
        if (username.length > 0) orderAPI();
    }, [username])


    return (
        <>
            {
                username.length == 0 ?
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        {
                            setTimeout(() => {
                                navigate('/');
                            }, 1000)
                        }
                        <h1>Unauthorized access</h1>
                        <Link to="/">Taking back to Home Page</Link>
                    </Box>
                    :
                    <Box css={Component}>
                        <Box sx={{ flexGrow: 1, p: 2 }} >
                            <Box height={15} />

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={6} css={gridItem}>
                                    <Stack spacing={3} direction={"row"}>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientRed}>
                                            <CardContent>
                                                <CreditCardIcon sx={{ color: '#fff' }} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    ₹ {monthlyExp.toFixed(2)}

                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: '#d1d1d1' }}>
                                                    Monthly Expenditure
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientYellow}>
                                            <CardContent>
                                                <ShoppingBagIcon sx={{ color: '#fff' }} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    ₹ {monthlySavings.toFixed(2)}
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: '#eee' }}>
                                                    Monthly Saving
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6} css={gridItem}>
                                    <Stack spacing={3} direction={"row"}>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientBlue}>
                                            <CardContent>
                                                <StoreIcon fontSize="medium" sx={{ color: "#fff" }} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    ₹ {totalExp.toFixed(2)}

                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: '#d1d1d1' }}>
                                                    Total Expenditure
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientLime}>
                                            <CardContent>
                                                <SavingsIcon sx={{ color: '#fff' }} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    ₹ {totalSavings.toFixed(2)}
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: '#e1e1e1' }}>
                                                    Total Saving
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Box height={35} />

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={7} css={gridItem}>
                                    <Card sx={{ width: '100%', height: '60vh' }}>
                                        <CardContent>
                                            {
                                                barData && barData.length > 0 &&
                                                <MixBarChart barGraphData={barData} />
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={5} css={gridItem}>
                                    <Card sx={{ maxWidth: '100%', height: '60vh' }}>
                                        <CardContent style={{ textAlign: 'center', width: '100%' }}>
                                            {
                                                Object.keys(category).length &&
                                                <PieChartCustomAcitve categories={category} />
                                            }
                                            <Typography variant="h6" style={{ fontWeight: "600" }}>Categories</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
            }
        </>
    )
}

export default Dashboard;
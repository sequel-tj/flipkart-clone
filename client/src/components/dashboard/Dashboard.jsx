/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

import { Box, Grid, Stack, Typography, css } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SavingsIcon from '@mui/icons-material/Savings';
import StoreIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MixBarChart from "../charts/MixBarChart";
import PieChartCustomAcitve from "../charts/PieChartCustomActive";


const Component = css`
    margin: 80px 55px;
    // border: 1px solid #000;
    // background: #d7d7d7;
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


const Dashboard = () => {

    const { account, setAccount } = useContext(DataContext);


    return (
        <>
            {
                !account ?
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1>Unauthorized access</h1>
                        <Link to="/">Go back to Home Page</Link>
                    </Box>

                    :
                    <Box css={Component}>
                        <Box sx={{ flexGrow: 1, p: 2 }} >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={6} css={gridItem}>
                                    <Stack spacing={3} direction={"row"}>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientRed}>
                                            <CardContent>
                                                <CreditCardIcon sx={{color: '#fff'}} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                                                    ₹ 3,908.00
                                                    
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: '#d1d1d1'}}>
                                                    Monthly Expenditure
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientYellow}>
                                            <CardContent>
                                                <ShoppingBagIcon sx={{color: '#fff'}} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                                                    ₹ 2,000.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: '#eee'}}>
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
                                                <StoreIcon fontSize="medium" sx={{color: "#fff"}} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                                                    ₹ 31,424.00
                                                    
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: '#d1d1d1'}}>
                                                    Monthly Expenditure
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ width: '100%', height: '150px' }} css={gradientLime}>
                                            <CardContent>
                                                <ShoppingBagIcon sx={{color: '#fff'}} />
                                                <Typography gutterBottom variant="h5" component="div" sx={{color: '#fff'}}>
                                                    ₹ 22,190.00
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{color: '#e1e1e1'}}>
                                                    Monthly Saving
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Box height={30} />

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={7} css={gridItem}>
                                    <Card sx={{ width: '100%', height: '60vh' }}>
                                        <CardContent>
                                            <MixBarChart />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={5} css={gridItem}>
                                    <Card sx={{ maxWidth: '100%', height: '60vh' }}>
                                        <CardContent style={{textAlign: 'center', width: '100%'}}>
                                            <PieChartCustomAcitve />
                                            <Typography variant="h6">Categories</Typography>
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
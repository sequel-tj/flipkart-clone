/** @jsxImportSource @emotion/react */

import { Box, Typography, css } from "@mui/material";
import { useEffect, useState } from "react";


const HeadingWrapper = css`
    padding: 15px 24px;
    background: #ffffff;
    border-bottom: 1px solid #f0f0f0;
`

const Heading = css`
    color: #878787;
`

const Container = css`
    padding: 15px 24px;
    background: #ffffff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
    }
`

const PriceWrapper = css`
    float: right;
    `
    
const DiscountWrapper = css`
    font-weight: 500;
    font-size: 16px;
    color: green;
`
    
const typoTotalBal = css`    
    // @media screen and (max-width: 1200px) {
    //     font-size: 12px !important;
    // }
`


const TotalBalance = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmt = () => {
        let price = 0, discount = 0; 

        cartItems.map(item => {
            price += (item.price.mrp * item.quantity);
            discount += ((item.price.mrp * item.quantity) - (item.price.cost * item.quantity));
            return {};
        })

        setPrice(price);
        setDiscount(discount);
    }

    useEffect(() => {
        totalAmt();
    })

    return (
        <Box>
            <Box css={HeadingWrapper}>
                <Typography css={Heading}>PRICE DETAILS</Typography>
            </Box>
            <Box css={Container}>
                <Typography>Price ({cartItems?.length} items)
                    <Box css={PriceWrapper} component="span">₹{price}</Box>
                </Typography>

                <Typography css={typoTotalBal}>Discount
                    <Box css={PriceWrapper} component="span">-₹{discount}</Box>
                </Typography>

                <Typography>Delivery Charges
                    <Box css={PriceWrapper} component="span">₹40</Box>
                </Typography>

                <Typography variant="h6">Total Amount
                    <Box css={PriceWrapper} component="span">₹{price - discount + 40}</Box>
                </Typography>

                <Typography css = {DiscountWrapper}>You will save ₹{discount - 40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalBalance;
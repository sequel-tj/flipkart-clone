/** @jsxImportSource @emotion/react */

import { Box, Typography, css } from "@mui/material";


const Component = css`
    background: #ffffff;
    width: 80%;
    margin: 80px auto;
    height: 65vh;
`
const Container = css`
    text-align: center;
    padding-top: 70px;
`


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (
        <Box css = {Component}>
            <Box css = {Container}>
                <img width="25%" src={imgurl} alt="empty" />
                <Typography style={{margin: '5px 0', color: '#878787'}}>Your Cart is <strong>EMPTY</strong></Typography>
                {/* <Typography>Add Items to it <strong>now</strong></Typography> */}
            </Box>
        </Box>
    )
}

export default EmptyCart;
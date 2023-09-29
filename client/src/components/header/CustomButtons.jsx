/** @jsxImportSource @emotion/react */

import { Box, Button, Typography, css } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext, useState } from "react";

// components
import LoginDiaglog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const wrapper = css`
    margin: 0 3% 0 auto;
    display: flex;
    & > div, & > p, & > button {
        margin-right: 40px !important;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 12;
        align-items: center;
    }
`;

const container = css`
    display: flex;
`;

const loginBtn = css`
    background: #fff;
    color: #2874f0 !important;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`;

const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Box css={wrapper}>
            {
                account ? <Profile account = {account} setAccount={setAccount}/>:
                <Button variant="contained" css={loginBtn} onClick={openDialog}>Login</Button>
            }

            <Typography style = {{marginTop: 3, width: 135}}>Become a Seller</Typography>
            <Typography style = {{marginTop: 3}}>More</Typography>

            <Box css={container}>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Box>
            <LoginDiaglog open={open} setOpen={setOpen}/>
        </Box>
    )
}

export default CustomButtons;
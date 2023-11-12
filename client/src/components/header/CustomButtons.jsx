/** @jsxImportSource @emotion/react */

import { Badge, Button, Box, Typography, css } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import LoginDiaglog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";



// custom theme------------------------
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({});

let customTheme = createTheme(theme, {
    palette: {
        orange: theme.palette.augmentColor({
            color: {
                main: '#fb641b',
            },
        }),
    },
});

// ---------------------------


const wrapper = css`
    margin: 0 3% 0 auto;
    display: flex;
    & > * {
        margin-right: 40px !important;
        text-decoration: none;
        color: inherit;
        font-size: 16;
        align-items: center;
    }
    @media only screen and (max-width: 900px) {
        display: block;
    }
`;

const container = css`
    display: flex;
    text-decoration: none;
    color: inherit;
    // @media only screen and (max-width: 900px) {
    //     display: block;
    // }
`;

const loginBtn = css`
    background: #979797;
    color: #ffffff !important;
    box-shadow: none !important;
    padding: 5px 40px;
    border-radius: 2px;
    font-weight: 600;
    height: 32px;
    transition: 0.3s;
    :hover {
        background: #878787;
    }
`;

const CustomButtons = () => {

    // const [open, setOpen] = useState(false);
    const { account, setAccount, open, setOpen } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);
    // const navigate = useNavigate();

    const openDialog = () => {
        setOpen(true);
    }

    // const openCart = () => {
    //     navigate('/cart');
    // }


    return (
        <ThemeProvider theme={customTheme}>
            <Box css={wrapper}>
                {
                    account ? <Profile account={account} setAccount={setAccount} /> :
                        <Button variant="contained" css={loginBtn} onClick={openDialog}>Login</Button>
                }

                <Typography style={{ marginTop: 3, width: 135, cursor: 'pointer' }}>Become a Seller</Typography>
                <Typography style={{ marginTop: 3, cursor: 'pointer' }}>More</Typography>

                <Link to="/cart" css={container} style={{ cursor: 'pointer' }}>
                    <Badge badgeContent={cartItems?.length} color="orange">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{marginLeft: '10px'}}>Cart</Typography>
                </Link>

                <LoginDiaglog open={open} setOpen={setOpen} />
            </Box>
        </ThemeProvider>
    )
}

export default CustomButtons;
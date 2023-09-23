/** @jsxImportSource @emotion/react */

import { Box, Button, Dialog, TextField, Typography, css } from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const components = {
    height: '70vh',
    width: '90vh',
}

const image = css`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 83.991%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;

const wrapper = css`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const RequestOtp = css`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const LoginBtn = css`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const Text = css`
    font-size: 12px;
    color: #878787;
`;

const createAccount = css`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;

const accountInitialization = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialization = {
    firstname: '',
    lastname: '',
    username:'',
    email: '',
    password: '',
    phone: ''
}

const LoginDiaglog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialization.login);
    const [signup, setSignup] = useState(signupInitialization);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialization.signup);
    }

    const toggleLogin = () => {
        toggleAccount(accountInitialization.login);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Box style={components}>
                <Box style = {{display: 'flex', height: '100%'}}>
                    <Box css = {image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style = {{margin: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box css = {wrapper}>
                            <TextField variant='standard' label="Enter Email/Mobile number"/>
                            <TextField variant='standard' label="Enter Password"/>
                            <Typography css={Text}> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button css = {LoginBtn}>Login</Button>
                            <Typography style = {{textAlign: 'center'}}>OR</Typography>
                            <Button css = {RequestOtp}>Request OTP</Button>
                            <Typography css = {createAccount} onClick={toggleSignup}>New to Flipkart? Create an account</Typography>
                        </Box>
                        :
                        <Box css = {wrapper}>
                            <TextField variant='standard'  onChange={(e) => {onInputChange(e)}} name='firstname' label="Enter Firstname"/>
                            <TextField variant='standard' onChange={(e) => {onInputChange(e)}} name='lastname' label="Enter Lastname"/>
                            <TextField variant='standard' onChange={(e) => {onInputChange(e)}} name='username' label="Enter username"/>
                            <TextField variant='standard' onChange={(e) => {onInputChange(e)}} name='email' label="Enter email"/>
                            <TextField variant='standard' onChange={(e) => {onInputChange(e)}} name='password' label="Enter Password"/>
                            <TextField variant='standard' onChange={(e) => {onInputChange(e)}} name='phone' label="Enter Phone"/>

                            <Button css = {LoginBtn} onClick={signupUser}>Continue</Button>
                            {/* <Button css = {LoginBtn}>Sign up</Button> */}
                            <Button css = {RequestOtp} onClick={toggleLogin}>Exisiting User? Log in</Button>
                        </Box>
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default LoginDiaglog;
/** @jsxImportSource @emotion/react */

import { Box, Button, Dialog, TextField, Typography, css } from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const components = {
    height: '75vh',
    width: '90vh',
}

const image = css`
    background: #575757 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    // background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 100%;
    overflow-x: hidden;
    padding: 0px 35px;
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
    background: #FB641B !important;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    :hover {
        background: #fb641bef !important;
    }
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

const wrongCred = css`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 200;
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

const loginIntialization = {
    username: '',
    password: ''
}

const LoginDiaglog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialization.login);
    const [signup, setSignup] = useState(signupInitialization);
    const [login, setLogin] = useState(loginIntialization);
    const [error, setError] = useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => {
        setError(false);
        setOpen(false);
        toggleAccount(accountInitialization.login);
    }

    const toggleSignup = () => {
        // setSignup(signupInitialization);
        // setLogin(loginIntialization);
        toggleAccount(accountInitialization.signup);
    }
    
    const toggleLogin = () => {
        // setLogin(loginIntialization);
        // setSignup(signupInitialization);
        toggleAccount(accountInitialization.login);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
        // console.log(login);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username);
        toggleAccount(accountInitialization.login);
    }

    const loginUser = async () => {
        const {status, data: {user}} = await authenticateLogin(login);
        // console.log(user);
        
        if (status === 200) {
            handleClose();
            setAccount(user.username);
        }
        else {
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Box style={components}>
                <Box style = {{display: 'flex', height: '100%'}}>
                    <Box css = {image}>
                        <Typography variant='h5' style={{margin: '40px 0'}}>{account.heading}</Typography>
                        <Typography style = {{margin: '20px 10px'}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box css = {wrapper}>
                            <TextField variant='standard' autoComplete='off' onChange={onValueChange} name='username' label="Enter username"/>

                            {error && <Typography css={wrongCred}>Please enter valid username/password.</Typography>}

                            <TextField variant='standard' autoComplete='off' type='password' onChange={onValueChange} name='password' label="Enter Password"/>
                            <Typography css={Text}> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button css = {LoginBtn} onClick={loginUser}>Login</Button>
                            <Typography style = {{textAlign: 'center'}}>OR</Typography>
                            <Button css = {RequestOtp}>Request OTP</Button>
                            <Typography css = {createAccount} onClick={toggleSignup}>New to Flipkart? Create an account</Typography>
                        </Box>
                        :
                        <Box css = {wrapper}>
                            <TextField variant='standard' autoComplete='off' onChange={(e) => {onInputChange(e)}} name='firstname' label="Enter Firstname"/>
                            <TextField variant='standard' autoComplete='off' onChange={(e) => {onInputChange(e)}} name='lastname' label="Enter Lastname"/>
                            <TextField variant='standard' autoComplete='off' onChange={(e) => {onInputChange(e)}} name='username' label="Enter username"/>
                            <TextField variant='standard' autoComplete='off' onChange={(e) => {onInputChange(e)}} name='email' label="Enter email"/>
                            <TextField variant='standard' autoComplete='off' type='password' onChange={(e) => {onInputChange(e)}} name='password' label="Enter Password"/>
                            <TextField variant='standard' autoComplete='off' onChange={(e) => {onInputChange(e)}} name='phone' label="Enter Phone"/>

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
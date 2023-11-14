/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetCart } from '../../redux/actions/cartActions';
import { useEffect, useState } from 'react';


const Container = css`
    width: 100%;
    height: 90vh;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Mainbox = css`
    width: 50%;
    height: 60vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`


const Success = () => {
    // const { cartItems } = useSelector(state => state.cart);
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useSearchParams()[0];
    const pid = params.get("pid");
    const oid = params.get("oid");

    const [timer, setTimer] = useState(10);

    // alert(pid, oid);

    // if (pid && oid && pid.length > 0 && oid.length > 0) {
        // empty cart
        // dispatch(resetCart());

        // redirect to homepage
        // navigate('/');
    // }

    useEffect(() => {
        setTimeout(() => {
            if (timer === 0) {
                navigate('/');
            }
            else {
                setTimer(timer-1);
            }
        }, 1000)
    }, [timer, navigate])

    return (
        <>
            {
                pid && oid && pid.length>0 && oid.length>0 ?
                <Box css={Container}>
                    <Box css={Mainbox}>
                        <Box style={{ width: '100%', height: '55%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 style={{ margin: 0, color: 'green', padding: 0 }}>Order Placed!!</h1>
                            <Box>
                                <h3 style={{ margin: 0, padding: '5px' }}>Payment id: {pid}</h3>
                                <h3 style={{ margin: 0, padding: '5px' }}>Order id: {oid}</h3>
                            </Box>
                            {/* <Typography onClick={() => { navigate('/') }} style={{
                                color: "#fff", background: "#878787", padding: 7, borderRadius: 3, cursor: 'pointer', maringTop: 10,
                                textAlign: 'center',
                                width: 45,
                            }}> Home </Typography> */}
                            <Typography style={{
                                color: "#979797",
                            }}> redirecting to homepage in: {timer} </Typography>
                        </Box>
                    </Box>
                </Box>
                :
                <Box css = {Container}>
                    <Box css={Mainbox}>
                        <Box style={{ width: '70%', height: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 style={{ margin: 0, color: 'red', padding: 0 }}>Order Failed!!</h1>
                            {/* <Box>
                                <h3 style={{ margin: 0, padding: '5px' }}>Payment id: {pid}</h3>
                                <h3 style={{ margin: 0, padding: '5px' }}>Order id: {oid}</h3>
                            </Box> */}
                            <Typography style={{ marginTop: 30}}>Please try again.</Typography>
                            <Typography style={{ marginTop: 10, marginBottom: 20, color: '#878787'}}>If money was deducted don't worry it will be redirected to your bank account within 3-5 working days.</Typography>
                            <Typography onClick={() => { navigate('/') }} style={{
                                color: "#fff", background: "#878787", padding: 7, borderRadius: 3, cursor: 'pointer',
                                width: 45,
                            }}> Home </Typography>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    )
}

export default Success;
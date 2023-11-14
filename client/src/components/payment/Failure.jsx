/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';


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

const Failure = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Box css={Container}>
                <Box css={Mainbox}>
                    <Box style={{ width: '70%', height: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 style={{ margin: 0, color: 'red', padding: 0 }}>Order Failed!!</h1>
                        {/* <Box>
                                <h3 style={{ margin: 0, padding: '5px' }}>Payment id: {pid}</h3>
                                <h3 style={{ margin: 0, padding: '5px' }}>Order id: {oid}</h3>
                            </Box> */}
                        <Typography style={{ marginTop: 30 }}>Please try again.</Typography>
                        <Typography style={{ marginTop: 10, marginBottom: 20, color: '#878787' }}>If money was deducted don't worry it will be redirected to your bank account within 3-5 working days.</Typography>
                        <Typography onClick={() => { navigate('/') }} style={{
                            color: "#fff", background: "#878787", padding: 7, borderRadius: 3, cursor: 'pointer',
                            width: 45,
                        }}> Home </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Failure;
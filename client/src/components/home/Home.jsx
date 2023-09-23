import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box } from "@mui/material";
// import { Fragment } from "react";

const component = {
    padding: '0.6% 10px',
    background: '#f1f3f6',
    // background: 'rgb(241, 242, 244)',
}

const Home = () => {
    return (
        <>
            <Box style = {component}>
                <Navbar />
            </Box>
            <Box style = {component}>
                <Banner /> 
            </Box> 
        </>
    );
};


export default Home;
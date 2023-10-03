/** @jsxImportSource @emotion/react */

import { Box, css } from "@mui/material";
import Slide from "./Slide";

const ad = css` 
    width: 17%;
    background: #fff;
    margin-left: 10px;
    padding: 5px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-item: center;
`


const MidSlide = ({ products, title, showTimer }) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Box style={{display: "flex"}}>
            <Box style={{width: "83%"}}>
                <Slide products={products} title={title} showTimer={showTimer} />
            </Box>

            <Box css={ad}>
                <img src={adURL} alt="ads" style={{width: "217px"}} />
            </Box>
        </Box>
    )
}


export default MidSlide;
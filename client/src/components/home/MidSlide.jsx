/** @jsxImportSource @emotion/react */

import { Box, css } from "@mui/material";
import Slide from "./Slide";

const leftComponent = css`
    width: 83%;
    height: 90%;
    @media (max-width: 1023px) {
        width: 100%;
    }
`;

const rightComponent = css` 
    width: 17%;
    height: 90%;
    background: #fff;
    margin-left: 10px;
    padding: 5px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-item: center;
    @media (max-width: 1023px) {
        display: none;
    }
`


const MidSlide = ({ products, title, showTimer }) => {

    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/c3189f057185c2bc.jpg?q=20';

    return (
        <Box style={{display: "flex", height: "320px"}}>
            <Box css={leftComponent}>
                <Slide products={products} title={title} showTimer={showTimer} />
            </Box>

            <Box css={rightComponent}>
                <img src={adURL} alt="ads" style={{width: "217px"}} />
            </Box>
        </Box>
    )
}


export default MidSlide;
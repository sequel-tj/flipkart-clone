/** @jsxImportSource @emotion/react */

import { Box, css } from "@mui/material";
import Slide from "./Slide";

const leftComponent = css`
    width: 86.2%;
    height: 100%;
    @media (max-width: 1023px) {
        width: 100%;
    }
`;

const rightComponent = css` 
    width: 13%;
    height: 100%;
    margin-top: 10px;
    text-align: end;
    @media (max-width: 1023px) {
        display: none;
    }
`


const MidSlide = ({ products, title, showTimer }) => {

    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/c3189f057185c2bc.jpg?q=20';

    return (
        <Box style={{display: "flex", height: "310px", justifyContent: 'space-between', width: '100%', overflow: 'hidden'}}>
            <Box css={leftComponent}>
                <Slide products={products} title={title} showTimer={showTimer} />
            </Box>

            <Box css={rightComponent}>
                <img src={adURL} alt="ads" style={{width: "100%"}} />
            </Box>
        </Box>
    )
}


export default MidSlide;
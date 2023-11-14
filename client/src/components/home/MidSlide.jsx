/** @jsxImportSource @emotion/react */

import { Box, css } from "@mui/material";
import Slide from "./Slide";

const leftComponent = css`
    width: 83%;
    @media (max-width: 1023px) {
        width: 100%;
    }
`;

const rightComponent = css` 
    width: 17%;
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

    const adURL = 'https://drive.google.com/uc?export=view&id=1fEpWF0zU-FQkCT_N5X3dYlRE1fZGnPH7';

    return (
        <Box style={{display: "flex"}}>
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
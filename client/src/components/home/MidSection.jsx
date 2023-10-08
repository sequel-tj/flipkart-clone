/** @jsxImportSource @emotion/react */

import { Grid, css } from "@mui/material";
import { imageURL } from "../../constants/data";

const wrapper = css`
    margin-top: 10px;
    justify-content: space-between;
`;

const image = css`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
        object-fit: cover;
        height: 120px;
    }
`;



const MidSection = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


    return (
        <>
            <Grid css={wrapper} item lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map((image, key) => (
                        <Grid key={key} item lg={4} sm={12} md={4} xs={12}>
                            <img src={image} alt="images" style={{ width: "100%" }} />
                        </Grid>
                    ))
                }
            </Grid>

            <img src={url} alt="covid" css={image} />
        </>
    )
}

export default MidSection;
/** @jsxImportSource @emotion/react */

import { Box, Button, css } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const leftContainer = css`
    min-width: 40%;
    padding: 40px 0 0 80px;
    @media (max-width: 1200px) {
        padding: 20px 40px;
    }
`;

const image = css`
    width: 90%;
    padding: 15px
`;

const btn = css`
    width: 48%;
    height: 50px;
    border-radius: 2px;
    @media (max-width: 1200px) {
        width: 46%;
    }
    @media (max-width: 600px) {
        width: 48%;
    }
`;


const ActionItem = ({ product }) => {
    return (
        <Box css={leftContainer}>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>;
                <img css={image} src={product.detailUrl} alt="product-img" />
            </Box>
            <Button css={btn} variant="contained" style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</Button>
            <Button css={btn} variant="contained" style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</Button>
        </Box>
    )
}

export default ActionItem;
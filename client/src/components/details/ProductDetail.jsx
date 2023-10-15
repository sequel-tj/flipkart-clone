/** @jsxImportSource @emotion/react */

import { Box, Table, TableBody, TableCell, TableRow, Typography, css } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';


const smallText = css`
    font-size: 14px;
    & > p {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-top: 10px;
    }
    vertical-align: baseline;
`;

const badgeCss = css`
    // margin-top: 10px;
    margin-right: 10px;
    color: #00cc00;
    font-size: 18px;
`;

const columnText = css`
    font-size: 14px;
    & > td {
        font-size: 14px;
        border: none;
    }
    vertical-align: baseline;
`;


const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 ratings & 1 review
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="flipkart assured img" /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>

            <Typography>Available offers</Typography>
            <Box css={smallText}>
                <Typography><Badge css={badgeCss} /> Bank Offer 10% off on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge css={badgeCss} /> Bank Offer 10% off on Select ICICI Bank Credit Cards, up to ₹1250 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge css={badgeCss} /> Bank Offer 10% off on Axis Bank and Citi Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge css={badgeCss} /> Special Price Get at flat ₹199 T&C</Typography>
                <Typography><Badge css={badgeCss} /> Partner Offer Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000* Know More</Typography>
                <Typography><Badge css={badgeCss} /> Partner Offer Purchase now & get 1 surprise cashback coupon in Future Know More</Typography>
                {/* <Typography><Badge css={badgeCss} /> Bank Offer5% off on Flipkart Axis Bank Credit Card, up to ₹625 on orders of ₹5,000 and above T&C</Typography> */}
                {/* <Typography><Badge css={badgeCss} /> Bank Offer 10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above T&C</Typography> */}
            </Box>
            <Table>
                <TableBody>
                    <TableRow css={columnText}>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow css={columnText}>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow css={columnText}>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: '#2874f0' }}>Flipy Retails Pvt. Ltd.</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow css={columnText}>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width: 390}} alt="supercoin" />
                        </TableCell>
                    </TableRow>
                    <TableRow css={columnText}>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;
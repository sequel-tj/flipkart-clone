/** @jsxImportSource @emotion/react */

import { Box, Button, Typography, css } from "@mui/material";
import { useDispatch } from "react-redux";

import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGrouped";
import { removeFromCart } from "../../redux/actions/cartActions";



const Component = css`
    border-top: 1px solid #f0f0f0; 
    display: flex;
    background: #ffffff;
`;

const LeftComponent = css`
    user-select: none;
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const SmallText = css`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`

const Remove = css`
    color: #000;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 600;
`


const CartItem = ({ item }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Box css={Component}>
            <Box css={LeftComponent}>
                <img src={item.url} alt="product" style={{height: 110}} />
                <ButtonGroup item={item} />
            </Box>
            <Box style={{margin: '20px'}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Typography css={SmallText}>Seller: Flipy Retails Pvt. Ltd.
                    <Box component="span">
                        <img src={fassured} alt="flipsure" style={{ width: '50px', marginLeft: '10px' }} />
                    </Box>
                </Typography>
                <Typography style={{margin: "20px 0"}}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: '17px' }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787', fontSize: '14px' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C', fontSize: '15px', fontWeight: '600' }}>{item.price.discount} Off</Box>
                </Typography>
                <Button css={Remove} onClick={() => {removeItemFromCart(item.id)}}>Remove</Button>
            </Box>
        </Box>
    )
}


export default CartItem;
/** @jsxImportSource @emotion/react */

import { Button, ButtonGroup, css } from "@mui/material"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions/cartActions";


const Component = css`
    margin-top: 30px;
`

const Btn = css`
    border-radius: 50%;
`


const ButtonGrouped = ({ item }) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    const [decrementBtn, setDecrementBtn] = useState(quantity > 1? false:true);
    const [incrementBtn, setIncrementBtn] = useState(quantity < 5? false: true);

    const decrementItem = () => {
        
        setIncrementBtn(false);

        const quant = quantity - 1;
        dispatch(addToCart(item.id, quant));
        setQuantity(quant);

        if (quant === 1) setDecrementBtn(true);
    }

    const incrementItem = () => {
        
        setDecrementBtn(false);

        const quant = quantity + 1;
        dispatch(addToCart(item.id, quant));
        setQuantity(quant);

        if (quant === 5) setIncrementBtn(true);
    }

    return (
        <ButtonGroup css={Component}>
            <Button css={Btn} onClick={decrementItem} disabled={decrementBtn}>-</Button>
            <Button disabled>{quantity}</Button>
            <Button css={Btn} onClick={incrementItem} disabled={incrementBtn}>+</Button>
        </ButtonGroup>
    )
}

export default ButtonGrouped;
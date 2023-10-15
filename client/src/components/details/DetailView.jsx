/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Grid, css } from '@mui/material'

import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const component = css`
    background: #f2f2f2;
    margin-top: 55px;
`;


const gridContainer = css`
    background: #ffffff;
    display: flex;
    @media (max-width: 900px) {
        margin: 0;
    }
`;


const rightContainer = css`
    margin-top: 50px;
    padding-left: 25px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id) dispatch(getProductDetails(id));
    }, [dispatch, id, loading, product])

    return (
        <Box css={component}>
            {
                product && Object.keys(product).length &&
                <Grid css={gridContainer} container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid css = {rightContainer} item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product = {product} />
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView;
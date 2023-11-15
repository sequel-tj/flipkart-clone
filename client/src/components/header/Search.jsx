/** @jsxImportSource @emotion/react */

import { css, Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts } from "../../redux/actions/productActions";


const searchContainer = css`
    width: 50%;
    border-radius: 10px;
    background-color: #f0f5ff;
    margin-left: 24px;
    display: flex;
    align-items: center;
    height: 40px;
    @media only screen and (max-width: 1000px) {
        width: 70%;
    }
`;

const inputBaseSearch = {
    // paddingLeft: '20px',
    width: '100%',
    fontSize: 'unset',
    height: '40px',
};

const searchIconWrapper = {
    color: '#979797',
    padding: '0 8px',
    display: 'flex',
}

const listWrapper = css`
    position: absolute;
    background: #f0f5ff;
    top: 46px;
    width: 46.75%;
    color: #000000;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;


const Search = () => {
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    let { products } = useSelector(state => state.getProducts);


    const getText = (text) => {
        setSearchText(text);
    }

    return (
        <Box css={searchContainer}>
            <Box style={searchIconWrapper}>
                <SearchIcon />
            </Box>
            <InputBase
                style={inputBaseSearch}
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={searchText}
            />

            {
                searchText &&
                <List css={listWrapper}>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(searchText.toLowerCase())).map((product, key) => (
                            <ListItem key={key}>
                                <Link
                                    to={`/product/${product.id}`}
                                    onClick={(e) => {setSearchText('')}}
                                    style={{color: 'inherit', textDecoration: 'none'}}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            }
        </Box>
    )
}


export default Search;
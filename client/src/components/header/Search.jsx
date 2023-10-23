/** @jsxImportSource @emotion/react */

import { css, Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts } from "../../redux/actions/productActions";


const searchContainer = {
    width: '38%',
    borderRadius: '2px',
    backgroundColor: '#fff',
    marginLeft: '10px',
    display: 'flex'
};

const inputBaseSearch = {
    paddingLeft: '20px',
    width: '100%',
    fontSize: 'unset'
};

const searchIconWrapper = {
    color: 'blue',
    padding: '5px',
    display: 'flex'
}

const listWrapper = css`
    position: absolute;
    background: #ffffff;
    margin-top: 33px;
    color: #000000;
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
        <Box style={searchContainer}>
            <InputBase
                style={inputBaseSearch}
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={searchText}
            />
            <Box style={searchIconWrapper}>
                <SearchIcon />
            </Box>

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
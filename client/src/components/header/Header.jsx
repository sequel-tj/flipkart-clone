/** @jsxImportSource @emotion/react */

import { AppBar, Toolbar, Box, Typography, css, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import Search from './Search';
import CustomButtons from './CustomButtons';
import { useState } from 'react';

const styledHeader = {
    background: '#575757',
    // background: '#2874f0',
    height: '55px',
    boxShadow: 'none'
};

const Component = {
    marginLeft: '10%',
    marginRight: '10px',
    lineHeight: '0px',
    color: 'inherit',
    textDecoration: 'none',
}

const subHeading = {
    fontSize: '10px',
    fontStyle: 'italic'
}

const plusImg = {
    width: '10px',
    height: '10px',
    marginLeft: '4px'
}

const CustomButtonWrapper = css`
margin: 0 5% 0 auto;
@media only screen and (max-width: 900px) {
    display: none;
}
`;

const menuBtn = css`
    display: none;
    @media only screen and (max-width: 900px) {
        display: block;
    }
`;



const Header = () => {
    const [open, setOpen] = useState(false);

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => {
        return (
            <Box onClick={handleClose} style={{width: 200}}>
                <List>
                    <ListItem>
                        <CustomButtons />
                    </ListItem>
                </List>
            </Box>
        )
    }

    return (
        <AppBar style={styledHeader}>
            <Toolbar style={{ minHeight: '55px' }}>
                <IconButton css={menuBtn} aria-label="menu-icon" color='inherit' onClick={handleOpen}>
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>

                <Link to='/' style={Component}>
                    <img src={logoURL} alt="logo img hai" style={{ width: '75px' }} />
                    <Box style={{ display: 'flex' }}>
                        <Typography style={subHeading}>
                            Explore&nbsp;
                            <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                        </Typography>
                        <img src={subURL} alt="plus-img" style={plusImg} />
                    </Box>
                </Link>
                <Search />
                <Box css={CustomButtonWrapper}>
                    <CustomButtons />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
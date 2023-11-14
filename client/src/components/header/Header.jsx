/** @jsxImportSource @emotion/react */

import { AppBar, Toolbar, Box, Typography, css, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import Search from './Search';
import CustomButtons from './CustomButtons';
import { useState } from 'react';

const styledHeader = {
    // background: '#575757',
    background: '#ffffff',
    padding: '0 5px',
    // background: '#2874f0',
    height: '65px',
    boxShadow: 'none',
    color: '#373737',
    display: 'flex',
    justifyContent: 'center',
};

const Component = {
    marginRight: '10px',
    lineHeight: '0px',
    color: 'inherit',
    textDecoration: 'none',
}

const subHeading = {
    fontSize: '12px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#9e9e9e',
}

const plusImg = {
    width: '10px',
    height: '10px',
    marginLeft: '4px'
}

const CustomButtonWrapper = css`
    width: 42%;
    margin: auto;
    // margin: 0 5% 0 auto;
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;

const menuBtn = css`
    display: none;
    @media only screen and (max-width: 1000px) {
        display: block;
    }
`;



const Header = () => {
    const [open, setOpen] = useState(false);

    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => {
        return (
            <Box onClick={handleClose} style={{ width: 200 }}>
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
            <Toolbar style={{ minHeight: '65px' }}>
                <IconButton css={menuBtn} aria-label="menu-icon" color='inherit' onClick={handleOpen}>
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>

                <Link to='/' style={Component}>
                    <img src={logoURL} alt="logo img hai" style={{ width: '130px', marginBottom: '2px' }} />
                    <Box style={{ display: 'flex', width: '130px', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Typography style={subHeading}>
                            Explore&nbsp;
                            <Box component="span" style={{ color: '#ffc200' }}>Plus</Box>
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
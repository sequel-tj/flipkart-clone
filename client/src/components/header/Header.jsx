/** @jsxImportSource @emotion/react */

import { AppBar, Toolbar, Box, Typography, css } from '@mui/material/';
import Search from './Search';
import CustomButtons from './CustomButtons';

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const styledHeader = {
    background: '#2874f0',
    height: '55px',
    boxShadow: 'none'
};

const Component = {
    marginLeft: '12%',
    lineHeight: '0px'
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
`;

const Header = () => {
    return (
        <AppBar style = {styledHeader}>
            <Toolbar style={{minHeight: '55px'}}>
                <Box style={Component}>
                    <img src={logoURL} alt="logo img hai" style={{width:'75px'}}/>
                    <Box style = {{display: 'flex'}}>
                        <Typography style={subHeading}>
                            Explore&nbsp;
                            <Box component="span" style = {{color: '#ffe500'}}>Plus</Box>
                        </Typography>
                        <img src={subURL} alt="plus-img" style={plusImg} />
                    </Box>
                </Box>

                <Search />

                <Box css={CustomButtonWrapper}>
                    <CustomButtons />
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
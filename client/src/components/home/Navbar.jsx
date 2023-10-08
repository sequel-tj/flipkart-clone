/** @jsxImportSource @emotion/react */

import { Box, Typography, css } from '@mui/material';
import { navData } from '../../constants/data';

const components = css`
    display: flex; 
    margin: 0 130px; 
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
        margin: 0;
        overflow: auto;
    }  
`;

const Navbar = () => {
    return (
        <Box style={{ background: '#fff' }}>
            <Box css={components}>
                {
                    navData.map((data, i) => {
                        return (
                            <Box key={i} style={{ padding: "12px 8px", textAlign: 'center' }}>
                                <img src={data.url} alt="nav-img" style={{ width: 64, fontWeight: '600', fontFamily: 'inherit' }} />
                                <Typography style={{ fontSize: '14px', }}>{data.text}</Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Navbar;

import { Box, Typography } from '@mui/material';
import { navData } from '../../constants/data';

const components = {
    display: 'flex', 
    margin: "0px 130px 0 130px", 
    justifyContent: 'space-between',
    alignItems: 'center',
    // background: 'yellow'     
};

const Navbar = () => {
    return (
        <Box style = {{background: '#fff'}}>
            <Box style={components}>
                {
                    navData.map((data, i) => {
                        return (
                            <Box key={i} style={{padding: "12px 8px", textAlign: 'center'}}>                        
                                <img src={data.url} alt="nav-img" style={{width: 64, fontWeight: '600', fontFamily: 'inherit'}} />
                                <Typography style={{fontSize: '14px',}}>{data.text}</Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Navbar;
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Box, Menu, MenuItem, Typography, css } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";

const component = css`
    margin-top: 5px;
`;

const logoutBtn = css`
    font-size: 14px;
    margin-left: 20px;
`;


const Profile = ({ account, setAccount }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                css={component}
            >

                <MenuItem onClick={handleClose}>
                    <Link to="/dashboard" style={{textDecoration: 'none', textTransform: 'none', color: '#000'}}>
                        <Typography>Dashboard</Typography>
                    </Link>
                </MenuItem>

                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Typography css={logoutBtn}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;
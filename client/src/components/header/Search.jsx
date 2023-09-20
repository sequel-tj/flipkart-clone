import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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


const Search = () => {
    return (
        <Box style = {searchContainer}>
            <InputBase style={inputBaseSearch} placeholder="Search for products, brands and more" />
            <Box style = {searchIconWrapper}>
                <SearchIcon />
            </Box>
        </Box>
    )
}


export default Search;
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { getProducts } from "../../redux/actions/productActions.js";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const component = {
    padding: '10px 0 0 0',
    position: 'relative',
    margin: '0px 10px 0px 10px',
    background: '#f1f3f6',
    // background: 'rgb(241, 242, 244)',
}


const Home = () => {

    let { products } = useSelector(state => state.getProducts);
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    
    return (
        <>
            <Box style={component}>
                <Navbar />
            </Box>

            <Box style={component}>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" showTimer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" showTimer={false} />
                <Slide products={products} title="Suggesting Items" showTimer={false} />
                <Slide products={products} title="Top Selection" showTimer={false} />
                <Slide products={products} title="Recommend Items" showTimer={false} />
                <Slide products={products} title="Trending Offers" showTimer={false} />
                <Slide products={products} title="Season's top Picks" showTimer={false} />
                <Slide products={products} title="Top Deals on Accessories" showTimer={false} />
            </Box>
        </>
    );
};


export default Home;
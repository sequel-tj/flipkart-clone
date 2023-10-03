/** @jsxImportSource @emotion/react */

import { Box, Typography, css, Button, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown';

import "react-multi-carousel/lib/styles.css";

const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 1
    // },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const component = css`
    margin-top: 10px;
    background-color: #fff;
`

const deal = css`
    padding: 15px 20px;
    display: flex;
`

const timer = css`
    display: flex;  
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
`

const dealText = css`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
`

const viewAllBtn = css`
    margin-left: auto;
    background: #2874f0;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
`

const image = css`
    width: auto;
    height: 150px;
`

const text = css`
    font-size: 14px;
`


const Slide = ({ products, title, showTimer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    }

    return (
        <Box css={component}>
            <Box css={deal}>
                <Typography css={dealText}>{title}</Typography>
                {
                    showTimer && 
                    <Box css={timer}>
                        <img style={{ width: 24 }} src={timerURL} alt="timer" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Box>
                }
                <Button color="primary" variant="contained" css={viewAllBtn}>View All</Button>
            </Box>

            <Divider />

            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((product, key) => (
                        <Box style={{ textAlign: "center", padding: "25px 15px" }}>
                            <img css={image} src={product.url} key={key} alt="product" />\
                            <Typography css={text} style={{ fontWeight: "600", color: "#212121" }}>{product.title.shortTitle}</Typography>
                            <Typography css={text} style={{ color: "green" }}>{product.discount}</Typography>
                            <Typography css={text} style={{ opacity: "0.6", color: "#212121" }}>{product.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;
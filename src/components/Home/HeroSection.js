import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../images/slider.svg";
import { Box, Button, Typography, Container } from "@mui/material";
import "../../styles/Home/HeroSection.scss";

const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <Box className="main_slider">
            <Container className="container" sx={{ position: "relative" }}>
                <Typography className="hero_heading poppins" variant="h5" component="div">
                    Get Started Digital Learning
                </Typography>
                <Slider {...settings} className="slider_img">
                    <Box>
                        <img src={Carousel} alt="picture_of_a_lady" />
                    </Box>
                    <Box>
                        <img src={Carousel} alt="picture_of_a_lady" />
                    </Box>
                    <Box>
                        <img src={Carousel} alt="picture_of_a_lady" />
                    </Box>
                </Slider>
                <Button className="hero_btn poppins" variant="contained">
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;

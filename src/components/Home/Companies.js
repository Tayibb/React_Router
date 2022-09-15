import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";
import Udemy from "../../images/udemy.svg";
import Coursera from "../../images/coursera.svg";
import Edu from "../../images/edu.svg";
import Indeed from "../../images/indeed.svg";
import Elcome from "../../images/elecom.svg";
import FedEx from "../../images/fed_ex.svg";
import "../../styles/Home/Companies.scss";

const Companies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    return (
        <Box className="companies">
            <Container className="container">
                <Typography className="poppins" variant="h1">
                    Trusted by over 800+ companies
                </Typography>
                <Box sx={{ pt: 6 }}>
                    <Slider {...settings}>
                        <Box className="coursera" sx={{ pt: 1 }}>
                            <img src={Coursera} alt="logo_coursera" />
                        </Box>
                        <Box className="udemy">
                            <img src={Udemy} alt="logo_udemy" />
                        </Box>
                        <Box className="fedEx">
                            <img src={FedEx} alt="logo_fedex" />
                        </Box>
                        <Box className="education">
                            <img src={Edu} alt="logo_education" />
                        </Box>
                        <Box className="elecom">
                            <img src={Elcome} alt="logo_elcom" />
                        </Box>
                        <Box className="indeed">
                            <img src={Indeed} alt="logo_indeed" />
                        </Box>
                        <Box className="coursera" sx={{ pt: 1 }}>
                            <img src={Coursera} alt="logo_coursera" />
                        </Box>
                        <Box className="udemy">
                            <img src={Udemy} alt="logo_udemy" />
                        </Box>
                        <Box className="fedEx">
                            <img src={FedEx} alt="logo_fedex" />
                        </Box>
                        <Box className="education">
                            <img src={Edu} alt="logo_education" />
                        </Box>
                        <Box className="elecom">
                            <img src={Elcome} alt="logo_elcom" />
                        </Box>
                        <Box className="indeed">
                            <img src={Indeed} alt="logo_indeed" />
                        </Box>
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Companies;

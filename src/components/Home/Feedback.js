import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";
import Commas from "../../images/commas.png";
import Rating from "../../images/Rating.svg";
import ClientTwo from "../../images/client_1.svg";
import ClientOne from "../../images/client_2.svg";
import "../../styles/Home/Feedback.scss";
const feedbackCard = [
    {
        imageComma: Commas,
        imageRating: Rating,
        imageClient: ClientOne,
        clientReviews:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        clientName: "Awlad Hossain",
        clientProfession: "UI Designer",
    },
    {
        imageComma: Commas,
        imageRating: Rating,
        imageClient: ClientTwo,
        clientReviews:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        clientName: "Shanta Akter",
        clientProfession: "Graphic Designer",
    },
    {
        imageComma: Commas,
        imageRating: Rating,
        imageClient: ClientOne,
        clientReviews:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        clientName: "Awlad Hossain",
        clientProfession: "UI Designer",
    },
    {
        imageComma: Commas,
        imageRating: Rating,
        imageClient: ClientTwo,
        clientReviews:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
        clientName: "Awlad Hossain",
        clientProfession: "UI Designer",
    },
];
const Feedback = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <Box className="feedback">
            <Container className="container">
                <Typography className="poppins" variant="h2">
                    Some Students Feedback
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography className="poppins" variant="h6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Box sx={{ pt: 6 }}>
                    <Slider {...settings} className="slide">
                        {feedbackCard.map((val) => (
                            <Box className="feedback_card">
                                <Box sx={{ px: 5, py: 4 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <img src={val.imageComma} alt="picture_of_comma" />
                                        <img src={val.imageRating} alt="picture_of_stars" />
                                    </Box>
                                    <Typography className="feedback_text poppins">{val.clientReviews}</Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <img src={val.imageClient} alt="picture_of_client" />
                                        <Box sx={{ pl: 2 }}>
                                            <Typography className="client_name poppins"> {val.clientName} </Typography>
                                            <Typography className="client_about poppins"> val.clientProfession </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Feedback;

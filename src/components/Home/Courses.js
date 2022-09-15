import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "../../styles/Home/Courses.scss";
import UI from "../../images/UI.svg";
import Code from "../../images/code.svg";
import Web from "../../images/web.svg";
import Mixture from "../../images/mixture.svg";
import Photography from "../../images/photography.png";
import Graphics from "../../images/graphics.svg";

const cards = [
    {
        imageName: UI,
        cardHeading: "Fundamental Of UI/UX Design",
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        imageName: Code,
        cardHeading: "Javascript Basic to advanced",
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        imageName: Web,
        cardHeading: "Fullstack Web Development",
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        imageName: Mixture,
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        imageName: Photography,
        cardHeading: "Photography Basic Rules",
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        imageName: Graphics,
        cardParagraph: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
];
const Courses = () => {
    return (
        <Box className="course">
            <Container className="container">
                <Box align="center" sx={{ pt: 10 }}>
                    <Typography className="course_heading poppins" variant="h2">
                        Discover Our Popular Courses
                    </Typography>
                </Box>

                <Box align="center" sx={{ pt: 3 }}>
                    <Typography className="course_paragraph poppins">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
                </Box>
                <Grid container spacing={3} sx={{ display: "flex", pt: 6 }}>
                    {cards.map((val) => (
                        <Grid item xs={6} sx={{ display: "flex" }}>
                            <Box className="course_card_img">
                                <img src={val.imageName} alt="Ui_image" />
                            </Box>
                            <Box className="course_card_text">
                                <Box sx={{ pl: 2, pt: 4 }}>
                                    <Typography className="poppins" variant="h2">
                                        {val.cardHeading}
                                    </Typography>
                                    <Typography className="course_card_p poppins">{val.cardParagraph}</Typography>
                                    <Typography className="poppins" variant="h5">
                                        {val.cardPrice}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Courses;

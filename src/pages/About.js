import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../../src/styles/Home/About.scss";

const About = () => {
    return (
        <Box className="mainAbout">
            <Container className="container">
                <Box className="about">
                    <Typography variant="h1">About</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default About;

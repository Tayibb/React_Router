import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/Home/Faq.scss";
const acordion = [
    {
        acordionHeading: "What other services are you compatible with?",
        acordionText:
            "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        acordionHeading: "I have a technical i need resolved, who do i email?",
        acordionText:
            "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        acordionHeading: "What other services are you compatible with?",
        acordionText:
            "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        acordionHeading: "What other services are you compatible with?",
        acordionText:
            "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
];
const Faq = () => {
    return (
        <Box className="faq">
            <Container className="container">
                <Typography className="poppins" variant="h1">
                    Frequently Asked Questions
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Typography className="poppins" variant="h6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                {acordion.map((val) => (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Accordion className="accordion">
                            <AccordionSummary>
                                <Typography className="accordion_h poppins"> {val.acordionHeading} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="accordion_text poppins">{val.acordionText}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default Faq;

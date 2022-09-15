import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "../../styles/Home/Institutes.scss";
import InstitutePic from "../../images/institute.svg";

const Institutes = () => {
    return (
        <Box className="institute">
            <Container className="container">
                <Grid xs={12} sx={{ display: "flex", alignItems: "center", backgroundColor: "#F4FAFD", borderRadius: "5px"}}>
                    <Grid item xs={5}>
                        <Box clasName="institute_image">
                            <img src={InstitutePic} alt="person_image" />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box className="institute_text">
                            <Typography className="poppins" variant="h1">
                                Explore The elearning Institute
                            </Typography>
                            <Typography className="intstitute_p1 poppins" sx={{ pt: 3 }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum, you need to be sure.
                            </Typography>
                            <Typography className="intstitute_p2 poppins" sx={{ pt: 5 }}>
                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                            </Typography>
                            <Box className="institute_counter">
                                <Box>
                                    <Typography variant="h3">3.2k+</Typography>
                                    <Typography variant="h6">Online Course</Typography>
                                </Box>
                                <Box sx={{ px: 4 }}>
                                    <Typography className="poppins" variant="h3">
                                        600+
                                    </Typography>
                                    <Typography className="poppins" variant="h6">
                                        Expert member
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className="poppins" variant="h3">
                                        1k+
                                    </Typography>
                                    <Typography className="poppins" variant="h6">
                                        Rating & Review
                                    </Typography>
                                </Box>
                            </Box>
                            <Button className="course_btn poppins" sx={{ px: 3, py: 1.5, mt: 6 }} variant="contained">
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Institutes;

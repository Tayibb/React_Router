import React from "react";
import { Box, Grid, Button, Typography, Container } from "@mui/material";
import "../../styles/Home/Register.scss";
const Register = () => {
    return (
        <Box className="register">
            <Container className="container">
                <Grid container sx={{ display: "flex", py: 8, justifyContent: "space-around", mt: 10, backgroundColor: "#289BDE", borderRadius: "5px" }}>
                    <Grid xs={6}>
                        <Box>
                            <Typography className="poppins" variant="h3">
                                Ready to join?
                            </Typography>
                            <Typography className="poppins" variant="h6">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button className="register_btn poppins" variant="contained">
                            Register Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;

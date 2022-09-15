import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../../src/styles/Home/Error.scss";

const Error = () => {
    return (
        <Box className="mainError">
            <Container className="container">
                <Box className="error">
                    <Typography variant="h1">404 Not Found</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Error;

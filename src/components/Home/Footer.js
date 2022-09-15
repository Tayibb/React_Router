import React from "react";
import { Box, Typography } from "@mui/material";
import Social from "../../images/social.svg";
import "../../styles/Home/Footer.scss";

const Footer = () => {
    return (
        <Box className="footer">
            <Box>
                <Typography className="poppins" variant="h1">
                    Pro Edu
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography className="poppins" variant="h6">
                        Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman
                    </Typography>
                </Box>
                <Typography className="poppins" variant="h5">
                    Privacy Ploicy<span> | </span>Terms of use
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" ,pt:3 }}>
                    <img src={Social} alt="social_media_plateform_picture" />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

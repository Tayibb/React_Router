import React from "react";
import { Box, Button, Card, CardContent, CardActionArea, CardMedia, Grid, Typography, Container } from "@mui/material";
import "../../styles/Home/Success.scss";
import UiDesigner from "../../images/Ui_designer.svg";
import WebDeveloper from "../../images/web_developer.svg";
import Motion from "../../images/motion.svg";
import Designer from "../../images/designer.svg";
const students = [
    {
        imageName: UiDesigner,
        studentName: "Awlad Hossain",
        studentProfession: "UIUX Designer",
    },
    {
        imageName: Motion,
        studentName: "Jannatul Islam",
        studentProfession: "Motion Design",
    },
    {
        imageName: Designer,
        studentName: "Imran Hossain",
        studentProfession: "Graphic Designer",
    },
    {
        imageName: WebDeveloper,
        studentName: "Nishi Akter",
        studentProfession: "Web Developer",
    },
];
const Success = () => {
    return (
        <Box className="success">
            <Container className="container">
                <Grid container>
                    <Grid xs={6}>
                        <Typography className="poppins" variant="h3">
                            Meet Our Successfull Students
                        </Typography>
                        <Typography className="poppins" variant="h6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ display: "flex", pt: 6 }}>
                    {students.map((val) => (
                        <Grid item xs={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" src={val.imageName} alt="green iguana" />
                                    <CardContent>
                                        <Typography gutterBottom className="card_name poppins" variant="h5" component="div">
                                            {val.studentName}
                                        </Typography>
                                        <Typography variant="body2" className="card_p poppins" color="text.secondary">
                                            {val.studentProfession}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box align="center">
                    <Button className="success_btn poppins" sx={{ px: 3, py: 1, mt: 6 }} variant="contained">
                        View All
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Success;

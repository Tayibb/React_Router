import * as React from "react";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/common/Header.scss";

const navItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Courses",
        path: "/courses",
    },
    {
        name: "Deals",
        path: "/deals",
    },
    {
        name: "Success",
        path: "/success",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Registerr",
        path: "/register",
    },
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Pro Edu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header">
            <AppBar className="appBar" component="nav">
                <Container className="container">
                    <Toolbar className="toolBar">
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ ml: "auto", display: { sm: "none" } }}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Grid item xs={2}>
                            <Typography className="header_logo poppins" variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                                Pro Edu
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{ mx: "auto" }}>
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                {navItems.map((item) => (
                                    <Button className="header_items poppins" key={item}>
                                        <NavLink className="items" to={item.path}>
                                            {item.name}
                                        </NavLink>
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Button className="header_btn poppins" variant="outlined">
                                Register
                            </Button>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "auto", height: "100vh" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;

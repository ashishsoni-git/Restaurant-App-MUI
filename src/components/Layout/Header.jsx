import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles(() => ({
    appbar: {
        background: "black",
    },
    drawerBox: {
        width: "300px",
        background: "black",
        color: "white"
    },
    siteTitle: {
        color: "goldenrod"
    }

}))

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <Typography
                variant='h6'
                color=''
                component='div'
            > <Box style={{ width: "210px", marginLeft: "20px" }}><FastfoodIcon />My Restaurant</Box></Typography>

            <ul style={{ textAlign: "left" }} className='mobile-navigation'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <Divider />
                <li>
                    <Link to={"/menu"}>Menu</Link>
                </li>
                <Divider />

                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <Divider />

                <li>
                    <Link to={"/contact"}>Contact Us</Link>
                </li>
                <Divider />


            </ul>
        </Box>
    )

    const classes = useStyles()
    return (
        <>
            <Box>
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography
                            variant='h6'
                            color=''
                            component='div'
                            className={classes.siteTitle}
                        > <FastfoodIcon /><Link style={{ textDecoration: "none", color: "goldenrod", }} to={"/"}>My Restaurant</Link></Typography>
                        <Divider />
                        <Box>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/menu"}>Menu</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact Us</Link>
                                </li>

                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav" className={classes.drawerBox} >
                    <Drawer  variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    )
}

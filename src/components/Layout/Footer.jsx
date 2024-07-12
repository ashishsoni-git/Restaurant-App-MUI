import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Widgets } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { hover } from '@testing-library/user-event/dist/hover';

const useStyles = makeStyles(() => ({
    footerBox: {
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",

    },
    iconBox: {
        width: "150px",
        display: "flex",
        justifyContent: "space-around",
    },
    icon: {
        cursor: "pointer"
    },
    footerText: {
        fontSize: "16px",
        textAlign: "center"
    }

}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.footerBox}>
                <Box className={classes.iconBox}>
                    <InstagramIcon className={classes.icon} />
                    <TwitterIcon className={classes.icon} />
                    <GitHubIcon className={classes.icon} />
                    <YouTubeIcon className={classes.icon} />
                </Box>
                <Typography className={classes.footerText} variant='h6'>
                    All Rights Reserved &copy; Ashish
                </Typography>
            </Box>
        </>
    )
}


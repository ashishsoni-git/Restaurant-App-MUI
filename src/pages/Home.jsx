import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const useStyle = makeStyles(() => ({
    home: {
        height: "100vh",
        padding: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    foodWebsiteHeading: {
        fontSize: "80px",
        color: "white",

    },
    bestfoodParagraph: {
        fontSize: "26px",
        color: "black"
    },
    orderBtn: {
        fontSize: "22px",
        backgroundColor: "green",
        color: "white",
        height: "50px",
        width: "170px",
        borderRadius: "10px",
        border: "none"
    },
}));

export default function Home() {
    const classes = useStyle();
    return (
        <>
            <div className={classes.home} style={{ backgroundImage: `url(${Banner})` }}>
                <div className='headerContainer'>
                    <h1 className={classes.foodWebsiteHeading}>Food Website</h1>
                    <p className={classes.bestfoodParagraph}>Best Food In India</p>
                    <Link to="/menu">
                        <button className={classes.orderBtn}>ORDER NOW</button>
                    </Link>
                </div>
            </div>
            <Menu />
        </>


    )
}

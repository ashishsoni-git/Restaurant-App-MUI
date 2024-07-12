import React from 'react'
import Layout from '../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import ImgMediaCard from '../components/ImgMediaCard';
import Data from '../Data/Data.json'
import { Grid, Typography } from '@material-ui/core';
const useStyle = makeStyles(() => ({
  home: {
    height: "91.1vh",
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
  imgMediaCardWrapperGrid: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 50
  },
  ourMenuHeading: {
    fontFamily: "roboto",
    fontSize: "40px",
    color: "goldenrod",
    textAlign: "center"
  },
}));

export default function Menu() {
  const classes = useStyle();
  return (
    <Layout>
      <Typography className={classes.ourMenuHeading}>MENU</Typography>
      <Grid className={classes.imgMediaCardWrapperGrid}>
        {Data.map((item) => (
          <ImgMediaCard className={classes.ImgMediaCard}
            name={item.name}
            price={item.price}
            ing={item.ing}
            src={item.src} />
        ))}
      </Grid>
    </Layout>
  )
}

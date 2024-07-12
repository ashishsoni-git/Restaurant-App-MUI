import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, TextField, makeStyles, Typography, Card, Button } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { hover } from '@testing-library/user-event/dist/hover';

const useStyle = makeStyles(() => ({
  wrapperCard: {
    height: "490px",
    width: "500px",


  },
  wrapperBox: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center"
  },
  CancleBtnBox: {
    display: "flex",
    justifyContent: "end",


  },
  contactUsText: {
    paddingLeft: 60,
    fontWeight: "bold",
    paddingTop: "20px",
    fontSize: "40px"

  },
  inputWrapperBox: {
    display: "flex",
    flexDirection: 'column',
    padding: 60,
    gap: 10,

  },
  submitBtn: {
    marginTop: 10,
    maxWidth: 120,
    height: 60,
    fontSize: 18,
    background: "green",
    color: "white",
  },
}))

export default function Contact() {
  const classes = useStyle();
  return (
    <Layout>
      <Box className={classes.wrapperBox}>
        <Card className={classes.wrapperCard}>
          <Box className={classes.CancleBtnBox}>
            <Button className={classes.CancleBtn}>
              <CancelOutlinedIcon />
            </Button>
          </Box>
          <Typography className={classes.contactUsText} variant='h5'>Contact Us</Typography>
          <Box className={classes.inputWrapperBox}>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
            <Button onClick={() => { alert("Submit Successfully") }} className={classes.submitBtn} variant="contained" >
            Submit
          </Button>
      </Box>
    </Card>
      </Box >
    </Layout >
  )
}

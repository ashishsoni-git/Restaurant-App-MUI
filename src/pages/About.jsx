import { makeStyles, useStyle, Typography, Box } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
const useStyles = makeStyles(() => ({
    aboutHeading: {
        fontSize: "30px",
        textAlign: "center"
    },
    heading: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
         marginTop:"20px"
    },
    wrapperBox: {
        textAlign: "start",
        textAlign: "center",
        marginTop:"10px"


    },

}));

export default function BasicCardSkeleton() {
    const classes = useStyles();
    return (
        <Layout>
            <Box className={classes.wrapperBox}>
                <Typography className={classes.heading}>OUR STORY</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!
                </Typography>

                <Typography className={classes.heading}>RELATED TO RESTAURANTS, C SCHEME</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!</Typography>

                <Typography className={classes.heading}>RESTAURANTS AROUND C SCHEME</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!</Typography>

                <Typography className={classes.heading}>FREQUENT SEARCHES LEADING TO THIS PAGE</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem nihil tempore velit aspernatur in corrupti illum mollitia voluptatum, suscipit, similique inventore cum est! Temporibus ea veniam molestiae porro modi!</Typography>
            </Box>
        </Layout>
    );
}

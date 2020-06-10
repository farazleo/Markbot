import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    webkitBoxShadow: "3px 3px 3px #7b7b7b",
    mozBoxShadow: "3px 3px 3px #7b7b7b",
    boxShadow: "3px 3px 3px #7b7b7b",
  },
  control: {
    padding: theme.spacing(2),
  },
  h2: {},
  buttonLayout: {
    flexDirection: "row",
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          {props.arr.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <Logo
                  value={value}
                  businessType={props.businessType}
                  align={props.align}
                  businessName={props.businessName}
                  color={props.color}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

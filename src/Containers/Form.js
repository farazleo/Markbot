import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Background from "../images/header-bg.png";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  back: {
    backgroundImage: `url(${Background})`,
    height: "100%",
    margin: 0
  },
  root: {
    display: "flex",
    "& > *": {
      width: "100%",
      padding: theme.spacing(10),
      margin: theme.spacing(20)
    }
  },
  button: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(50),
    background: "#fba808",
  }
}));

const categoryList = [{ title: "Food" }, { title: "Travel" }];
export default function AddressForm() {
  const classes = useStyles();

  return (
    <div className={classes.back}>
      <div className={classes.root}>
        <Paper variant="outlined">
          <Typography variant="h6" gutterBottom>
            Your Business Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="businessname"
                name="businessname"
                label="Business Name"
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="combo-box-demo"
                options={categoryList}
                getOptionLabel={option => option.title}
                fullWidth
                renderInput={params => (
                  <TextField
                    {...params}
                    id="businessindustry"
                    name="businessindustry"
                    label="Business Industry"
                    autoComplete="lname"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="subindustry"
                name="subindustry"
                label="Business Sub-Industry"
                fullWidth
                autoComplete="billing address-line1"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="location"
                name="location"
                label="Location of your Business"
                fullWidth
                autoComplete="billing address-line2"
              />
            </Grid>
          </Grid>
          <Link href="/markbot" style={{ textDecoration: "none", display: "flex"}}>
            <Button className={classes.button}>Continue</Button>
          </Link>
        </Paper>
      </div>
    </div>
  );
}

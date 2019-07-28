import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink}  from "react-router-dom";
import { Grid } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
    spacing: 20,
  }
};

function SubHeaderNotLoggedin(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid item xs={12} md={4} xl={4} spacing={30}>
          <Typography variant="h6" color="inherit">
          <NavLink to="homepage1" variant="h6" color="inherit">
            Home
          </NavLink >
          </Typography>
          </Grid>

          <Grid item xs={12} md={4} xl={4} spacing={30}>


          <Typography variant="h6" color="inherit">
          <NavLink to="homepage1" variant="h6" color="inherit">
            Home
          </NavLink >
          </Typography>
          </Grid>
        

        </Toolbar>
      </AppBar>
    </div>
  );
}

SubHeaderNotLoggedin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubHeaderNotLoggedin);

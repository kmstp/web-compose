import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TopicsLink from './links/Topics';
import SignupLink from './links/Signup';
import AboutLink from './links/About';
import AboutRoute from './routes/About';
import TopicsRoute from './routes/Topics';
import SignupRoute from './routes/Signup';
import AppBar from './layouts/AppBar';
import Panels from './layouts/Panels';

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TopicsLink />
            <TopicsRoute />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Panels />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <AboutLink />
            <AboutRoute />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SignupLink />
            <SignupRoute />
          </Paper>
        </Grid>
        <Grid item xs={4}>          
          <Paper className={classes.paper}>
            <SignupLink />
            <SignupRoute />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
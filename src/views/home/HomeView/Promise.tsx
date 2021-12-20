import React from 'react'
import type { FC } from 'react';
import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,

    marginTop: 120,
    display: 'flex',
    marginBottom: 240,
  },
  textWrapper: {
    marginTop: 15,
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    color: '#4B4FE4',
    fontWeight: 700,

  },
  largeTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',
  },
  quoteWrapper: {
    position: 'relative',
    marginTop: 45,
    maxWidth: 561,
    display: 'flex',
  },
  quoteIcon: {
    position: 'absolute',
    top: -36,
  },
  quoteText: {
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 400,
    color: '#546681'
  },
  verticalLine: {
    marginRight: 20
  },
  promiseImg: {
    position: 'absolute',
    left: 0,
    top: -80,
  }
}));

const Promise: FC = (props) => {
  const classes = useStyles();

  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <img alt="curriculum" src="/static/home/promise.png" className={classes.promiseImg} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography className={classes.title}>OUR PROMISE</Typography>
            </div>
            <div className={classes.textWrapper}>
              <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>To give you technical</Typography>
              <div className="d-flex">
                <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>tools</Typography>&nbsp;&nbsp;
                <Typography variant="h2" color="primary" className={classes.largeTitle}>to succeed in</Typography>
              </div>
              <Typography variant="h2" color="primary" className={classes.largeTitle}>engineering</Typography>
            </div>
            <div className={classes.quoteWrapper}>
              <img alt="learn more" src="/static/home/vertical_line.svg" className={classes.verticalLine} />
              <div>
                <p className={classes.quoteText}>
                  It's tough to learn a technical concept, regardless of
                </p>
                <p className={classes.quoteText}>background. We experienced the same frustration from</p>
                <p className={classes.quoteText}>lack of accessibility to classes and the isolation from</p>
                <p className={classes.quoteText}>self-paced online programs.</p>
                <br />
                <p className={classes.quoteText}>
                  That's why we are providing you with the real practice here.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Promise;
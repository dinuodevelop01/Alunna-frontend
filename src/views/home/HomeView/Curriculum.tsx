import React from 'react'
import type { FC } from 'react';
import { Container, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,

    marginTop: 120,
    display: 'flex',
    // maxWidth: '561px'
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
  horizontalLine: {
    marginTop: 28
  },
  curriculumImg: {
    position: 'absolute',
    right: 0,
    top: -80,
  }
}));

const Curriculum: FC = (props) => {
  const classes = useStyles();

  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <div>
          <div>
            <Typography className={classes.title}>OUR CURRICULUM</Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Take live classes that</Typography>
            <Typography variant="h2" color="primary" className={classes.largeTitle}>you only have access to</Typography>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>in a university</Typography>
          </div>
          <div className={classes.quoteWrapper}>
            <img alt="learn more" src="/static/home/quote.svg" className={classes.quoteIcon} />
            <p className={classes.quoteText}>
              "Stop worrying about how much time it's going to take to learn a new, technical concept.
            </p>
            <br />
            <p className={classes.quoteText}>
              We work with industry experts to create curriculums and projects that you will build and can discuss with future employers."
            </p>
          </div>
          <img alt="learn more" src="/static/home/horizontal_line.svg" className={classes.horizontalLine} />
        </div>
        <img alt="curriculum" src="/static/home/curriculum.png" className={classes.curriculumImg} />
      </Container>
    </div>
  );
};

export default Curriculum;
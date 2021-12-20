import React from 'react'
import type { FC } from 'react';
import { Container, makeStyles, Theme, Typography } from '@material-ui/core';
import CustomStepperNonContent from 'src/components/CustomStepperNonContent';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,

    marginTop: 120,
    display: 'flex',
    marginBottom: 120,
    justifyContent: 'space-between'
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
  stepsImg: {
    marginTop: 40,
  },
  verticalStepImg: {

  },
  stepper: {

  }
}));

const HowItWork: FC = (props) => {
  const classes = useStyles();
  const contents = [
    {
      step: 1,
      title: 'Sign up for a course',
      content: `Easy registration using your email or social media.`
    },
    {
      step: 2,
      title: 'Complete prerequisites',
      content: `To let us know a bit more about youself.`,
    },
    {
      step: 3,
      title: 'Begin the class',
      content: 'Begin when the start date comes.',
    },
    {
      step: 4,
      title: 'Build your capstone project',
      content: 'Use your newly acquired skills and knowledge',
    }
  ];
  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <div>
          <div>
            <Typography className={classes.title}>HOW IT WORKS</Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Just a few steps</Typography>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>to begin a class</Typography>
          </div>
          <img alt="curriculum" src="/static/home/steps.png" className={classes.stepsImg} />
        </div>
        <div className={classes.stepper}>
          <CustomStepperNonContent contents={contents} />
        </div>
      </Container>
    </div>
  );
};

export default HowItWork;
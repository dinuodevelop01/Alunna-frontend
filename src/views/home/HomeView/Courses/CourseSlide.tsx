import React from 'react';
import CourseCard from './CourseCard';
import {
  makeStyles,
  Container,
  Typography,
} from '@material-ui/core';
import { courses } from './data';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

interface OwnProps {}

type Props = OwnProps;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'absolute',
    width: '96vw',
    left: 0,
    minWidth: 900,
  },
  slideContainer: {
    width: 'max-content',
    marginRight: 8,
    marginLeft: 8,
    padding: 16
  },
  slide: {
    padding: 15
  }
};

const CourseSlide: React.FC<Props> = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container className={classes.root} style={{ position: 'relative' }}>
      {/* <div className={classes.mediaWrapper}>
        <img alt="test" className={classes.media} src="/static/cloud.png" />
      </div>
      <div style={{ zIndex: 100, position: 'relative' }}>
        <Typography className={classes.blackTitle} variant="h1">
          What do you want
        </Typography>
        <Typography className={classes.blueTitle} variant="h1">
          to learn?
        </Typography>
      </div>
      <div style={{ zIndex: 100, position: 'relative' }}>
        <Typography className={classes.subtitle}>
          View the available live courses:
        </Typography>
      </div> */}
      <AutoPlaySwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
        autoplay={true}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {courses.map((step, index) => (
          <CourseCard key={step.name + String(index)} {...step} />
        ))}
      </AutoPlaySwipeableViews>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 900
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  blackTitle: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  blueTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#4B4FE4'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B4FE4',
    textTransform: 'uppercase',
    marginBottom: 40,
    marginTop: 28
  },
  media: {
    width: 600,
    zIndex: 0
  },
  mediaWrapper: {
    position: 'absolute',
    top: -24,
    left: -86,
    zIndex: 0,
    width: 600
  }
}));

export default CourseSlide;

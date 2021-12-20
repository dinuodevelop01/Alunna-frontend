import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import { Row, Col } from "react-bootstrap";
import CustomMainButton from 'src/components/CustomMainButton';
import CourseSlide from './Courses/CourseSlide';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 90,
    backgroundImage: `url('/static/home/hero.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  cta: {
    width: 483,
  },
  title: {
    fontWeight: 700,
    fontSize: 55,
    lineHeight: '70px',
  },
  description: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',
  },
  inlineTextWithIconWrapper: {
    marginRight: 16,
  },
  inlineTextWithIcon: {
    marginLeft: 12,
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 600,
    color: '#0A1F44'
  },
  customCTAButton: {
    // width: 170,
    // height: 45,
    // borderRadius: 50,
    fontWeight: 300,
    padding: "13px 12.5px",
    width: 200
  },
  seeOurClassBtn: {
    marginLeft: 20,
    color: '#546681',
    background: '#fff'
  }
}));

const Hero: FC<HeroProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Row>
          <Col md={5}>
            <div className={classes.cta}>
              <Typography
                variant="h2"
                color="textPrimary"
                className={classes.title}
              >
                Live classes,
              </Typography>
              <Typography
                variant="h2"
                color="primary"
                className={classes.title}
              >
                taught online.
              </Typography>
              <Box mt={2}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.description}
                >
                  Real engineering with real learning. Get the accessibility of online classes with the environment of a live, in-person lab with peers.
                </Typography>
              </Box>
              <Box mt={2} display="flex">
                <div className={clsx("d-flex align-item-centers", classes.inlineTextWithIconWrapper)}>
                  <img alt="no transcripts" src="/static/home/no_transcript.svg" />
                  <Typography variant="body2" className={classes.inlineTextWithIcon}>No transcripts</Typography>
                </div>
                <div className={clsx("d-flex align-item-centers", classes.inlineTextWithIconWrapper)}>
                  <img alt="no transcripts" src="/static/home/no_cloud.svg" />
                  <Typography variant="body2" className={classes.inlineTextWithIcon}>No admissions</Typography>
                </div>
                <div className="d-flex align-item-centers">
                  <img alt="no transcripts" src="/static/home/no_isolation.svg" />
                  <Typography variant="body2" className={classes.inlineTextWithIcon}>No isolation</Typography>
                </div>
              </Box>
              <Box mt={3}>
                <CustomMainButton label="Get started" customClass={classes.customCTAButton}/>
                <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurClassBtn)}>See our classes</Button>
              </Box>
            </div>
          </Col>
{/*           
          <Col md={7}>
            <CourseSlide />
          </Col> */}
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >

                <Box mt={3}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Typography variant="h1" color="secondary">30+</Typography>
                      <Typography variant="overline" color="textSecondary">Demo Pages</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" color="secondary">UX</Typography>
                      <Typography variant="overline" color="textSecondary">Complete Flows</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1" color="secondary">300+</Typography>
                      <Typography variant="overline" color="textSecondary">Components</Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={3}>
                  <img alt="Javascript" className={classes.technologyIcon} src="/static/images/javascript.svg" />
                  <img alt="Typescript" className={classes.technologyIcon} src="/static/images/typescript.svg" />
                </Box>
              </Box>
            </Grid>
          </Grid> */}
        </Row>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;

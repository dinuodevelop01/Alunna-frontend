import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import CustomTextNormal from 'src/components/CustomTextNormal';
import CustomMainButton from 'src/components/CustomMainButton';

interface TestimonialsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1,
    marginLeft: '30px',
    marginRight: '30px'
  },
  container: {
    display: 'flex',
  },
  infomation: {
    marginLeft: '180px',
    marginTop: '40px'
  },
  logo: {
    marginTop: '30px',
    marginBottom: '12px'
  },
  arrow: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '50px'
  },
  count: {
    fontFamily: 'Inter',
    fontSize: '17px',
    color: '#0A1F44',
    marginLeft: '20px',
    marginRight: '20px',
    fontWeight: 'normal',
    lineHeight: '28px',
  },
  customBtn: {
    background: '#4B4FE4',
    boxShadow: 'unset',
    width: 44,
    height: 44,
    minWidth: '44px',
    '&:disabled': {
      background: 'unset',
      border: '1px solid #546681',
      borderRadius: '50%',
    }
  }
}));

const Testimonials: FC<TestimonialsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [ active, setActive ] = React.useState(0);
  const intro = [
    {
      content: `"The class on Machine Learning with ______ taught me so much. I'm incredibly excited to apply my project in the financial field I'm trying to break into as a data analyst."`,
      person: `Mark Smith (Student)`
    },
    {
      content: `"The class on Machine Learning with ______ taught me so much. I'm incredibly excited to apply my project in the financial field I'm trying to break into as a data analyst."`,
      person: `Mark Smith (Student 1)`
    },
  ];

  const handleBack = (i: any) => {
    if(i < 1) {
      return;
    }
    setActive(i - 1);
  }

  const handleNext = (i: any) => {
    console.log('i', typeof i, i);
    if(i >= intro.length - 1) {
      return;
    }
    setActive(i + 1);
  }

  return (
    <div
      className={classes.root}
    >
      <Container>
        {intro.map((i, index) => <div key={index} style={active !== index ? { display: 'none' }: {display: ''}} className={classes.container}>
          <img src="/static/home/testimonial_1.png" />
          <div className={classes.infomation}>
            <CustomTextNormal
              text={i.content}
              style={{ color: '#546681' }}
            />
            <img className={classes.logo} src="/static/home/logo.png" />
            <CustomTextNormal
              text={i.person}
              style={{ color: '#546681' }}
            />
            <div className={classes.arrow}>
            <CustomMainButton
              label={'←'}
              onClick={() => handleBack(index)} customClass={classes.customBtn}
              disabled={index === 0}
            />
            <span className={classes.count}>{ index + 1 } / {intro.length ?? 0}</span>
            <CustomMainButton
              label={'→'}
              onClick={() => handleNext(index)} customClass={classes.customBtn}
              disabled={index === intro.length - 1}
            />
            </div>
          </div>
        </div>)}
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;

import React from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import CustomTextNormal from 'src/components/CustomTextNormal';
import Footer from 'src/layouts/FooterLayout';
import IconWithText from 'src/components/IconWithText';
import CustomTextLarge from 'src/components/CustomTextLarge';
import CustomMainButton from 'src/components/CustomMainButton';
import TopBar from 'src/layouts/MainLayout/TopBar';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  notFoundNumber: {
    display: 'flex',
    flexDirection: 'row'
  },
  notFoundText: {
    fontFamily: 'Inter',
    fontSize: '200px',
    lineHeight: '280px',
    fontWeight: 'bold'
  },
  notFoundImg: {
    height: '280px',
    paddingTop: '26%'
  },
  leftContent: {
    marginTop: '10%',
    width: '34%',
    marginBottom: '10%'
  },
  notFoundContent: {
    marginTop: '3%'
  },
  backGroundImg: {
    height: window.screen.height * 0.6,
    position: 'absolute',
    right: 0,
    top: 0
  },
  backToHome: {
    marginTop: '4%'
  }
}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/robo.png"
        imageAlt="error"
        classImageBackground={classes.backGroundImg}
      />
      <Container>
        <div className={classes.leftContent}>
          <div className={classes.notFoundNumber}>
            <p className={classes.notFoundText}>40</p>
            <img
              className={classes.notFoundImg}
              src="/static/images/4.png"
              alt="404"
            />
          </div>
          <CustomTextLarge>
            Oopsy... <p style={{ color: '#373BCE' }}>Page not found</p>
          </CustomTextLarge>
          <div className={classes.notFoundContent}>
            <CustomTextNormal
              style={{ color: '#546681' }}
              text={
                'Please return to the homepage, and if this problem happens again, please email our team so we can address the issue at hand:'
              }
            />
            <IconWithText
              CIcon={'/static/images/message.png'}
              text={'tech@alunna.io'}
              style={{ color: '#4B4FE4', fontSize: '14px' }}
            />
            <CustomTextNormal
              style={{ color: '#546681' }}
              text={'Thank you!'}
            />
          </div>
          <div className={classes.backToHome}>
            <CustomMainButton label={'Back to Home page'} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default NotFoundPage;

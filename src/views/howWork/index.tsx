import React from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import Footer from 'src/layouts/FooterLayout';
import TopBar from 'src/layouts/MainLayout/TopBar';
import CustomTextLarge from 'src/components/CustomTextLarge';
import CustomTextNormal from 'src/components/CustomTextNormal';
import IconWithText from 'src/components/IconWithText';
import CustomStepper from 'src/components/CustomStepper';
import GotIdea from 'src/components/GotIdea';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  backGroundImg: {
    width: '100%',
    height: window.screen.height * 0.6,
    position: 'absolute',
    top: 0,
    zIndex: -2
  },
  boyImg: {
    height: '780px',
    position: 'absolute',
    right: 0,
    top: '200px',
    zIndex: -1
  },
  leftContent: {
    marginTop: '18%',
    width: '44%',
    marginBottom: '10%'
  },
  iconWrapper: {
    display: 'flex',
    marginTop: '15px',
    justifyContent: 'space-between'
  }
}));

const HowItWork = props => {
  const classes = useStyles();
  const contents = [
    {
      step: 1,
      title: 'Work with a few fun modules',
      content: `In order for you to maximize your time during the class period, we have created short, fun modules for you to work through. The way memory works is by connecting bits of neurons- you need to start with a starter "memory node," if you will. We provide all the material (it's not a lot) beforehand, then check in to see what you should focus on before you enroll.`
    },
    {
      step: 2,
      title: 'Our classes are intense & fast-paced',
      content: `We sincerely want you to succeed. We do not disqualify based on performance in this prerequisite period, we just want to get you up to speed.`,
      contentDescription: `And, yes, the material is free, even if you decide not to enroll.`
    },
    {
      step: 3,
      title: '',
      content: 'Check classes',
      button: true
    }
  ];
  return (
    <div className={classes.root}>
      <img
        className={classes.backGroundImg}
        src="/static/images/howItwork/halfBg.png"
        alt="howItwork"
      />
      <div className="position-relative">
        <img
          className={classes.boyImg}
          src="/static/images/howItwork/boy.png"
          alt="howItwork"
        />
      </div>
      <TopBar />

      <Container>
        <div className={classes.leftContent}>
          <CustomTextLarge>
            Complete prerequsuites &
            <p style={{ color: '#373BCE' }}>be 100% ready for class</p>
          </CustomTextLarge>
          <CustomTextNormal
            style={{ color: '#546681', marginTop: '20px' }}
            text={
              'Wait, I thought there were no conditions to start the class?'
            }
          />
          <CustomTextNormal
            style={{ color: '#546681' }}
            text={'What prerequisites?'}
          />
          <div className={classes.iconWrapper}>
            <IconWithText
              CIcon={'/static/images/howItWork/file_blank.png'}
              text={'team@alunna.io'}
              style={{ color: '#0A1F44' }}
            />
            <IconWithText
              CIcon={'/static/images/howItWork/no-letter.png'}
              text={'team@alunna.io'}
              style={{ color: '#0A1F44' }}
            />
            <IconWithText
              CIcon={'/static/images/howItWork/no-expiriense.png'}
              text={'team@alunna.io'}
              style={{ color: '#0A1F44' }}
            />
          </div>
        </div>
        <div style={{ width: '60%' }}>
          <CustomStepper contents={contents} />
        </div>
        <GotIdea />
      </Container>
      <Footer
        topBgImg={'/static/images/footer/topBg2.png'}
        topBgMargin={'-510px'}
      />
    </div>
  );
};
export default HowItWork;

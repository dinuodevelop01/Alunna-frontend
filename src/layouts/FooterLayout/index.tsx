import React from 'react';
import { makeStyles, Theme, Grid, Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextFooterNormal from './TextFooterNormal';
import TextFooterBold from './TextFooterBold';
import IconWithText from 'src/components/IconWithText';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundImage: `url('/static/images/footer.png')`,
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  },

  footerContent: {
    paddingTop: '24%'
  },
  socialContainer: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between',
    paddingRight: '80%'
  },
  copyRight: {
    marginTop: '45px',
    paddingBottom: '4%'
  },
  topBg: {
    width: '100%',
    zIndex: -1,
    position: 'absolute'
  }
}));

const Footer = props => {
  const classes = useStyles();
  const { topBgImg, topBgMargin } = props;
  return (
    <div className={classes.footer}>
      {topBgImg && (
        <img
          alt="how it works"
          className={classes.topBg}
          style={{ top: topBgMargin }}
          src={topBgImg}
        />
      )}
      <div className={classes.footerContent}>
        <Container>
          <Grid container spacing={10}>
            <Grid item md={6} sm={4} xs={12}>
              <TextFooterBold text={'Alunna'} />
              <div style={{ paddingRight: '40%', marginTop: '20px' }}>
                <TextFooterNormal
                  text={
                    'We are dedicated to the future engineers of this world. Please reach out with suggestions for content and improvements to the classes.'
                  }
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <IconWithText
                  CIcon={'/static/images/footer/message.png'}
                  text={'team@alunna.io'}
                  style={{ color: '#fff' }}
                />
                <IconWithText
                  CIcon={'/static/images/footer/chat.png'}
                  text={'Livechat'}
                  style={{ color: '#fff' }}
                />
              </div>

              <div className={classes.socialContainer}>
                <FacebookIcon style={{ color: '#fff' }} />
                <LinkedInIcon style={{ color: '#fff' }} />
                <GitHubIcon style={{ color: '#fff' }} />
                <TwitterIcon style={{ color: '#fff' }} />
              </div>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <TextFooterBold text={'Classes'} />
              <div style={{ marginTop: '20px' }}>
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'Python through algorithms'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'AWS Cloud Development'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'MERN Application'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'Machine Learning in Python'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'CI/CD Automation & Deployment'}
                />
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <TextFooterBold text={'Home'} />
              <div style={{ marginTop: '20px' }}>
                <TextFooterNormal styleCustom={'5px'} text={'Teachers'} />
                <TextFooterNormal styleCustom={'5px'} text={'How it works'} />
                <TextFooterNormal styleCustom={'5px'} text={'Contacts'} />
                <TextFooterNormal styleCustom={'5px'} text={'Blog'} />
              </div>
            </Grid>
          </Grid>
          <div className={classes.copyRight}>
            <TextFooterNormal text={'© Copyright 2020 Alunna Inc.'} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

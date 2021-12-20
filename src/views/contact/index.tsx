import React from 'react';
import {
  makeStyles,
  Theme,
  Container,
  Paper,
  Grid
} from '@material-ui/core';
import CustomTextFieldLabel from 'src/components/CustomTextFieldLabel';
import Footer from 'src/layouts/FooterLayout';
import CustomTextLarge from 'src/components/CustomTextLarge';
import CustomMainButton from 'src/components/CustomMainButton';
import CustomTextMini from 'src/components/CustomTextMini';
import TopBar from 'src/layouts/MainLayout/TopBar';
import GotIdea from 'src/components/GotIdea';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  leftContent: {
    marginTop: '18%',
    width: '28%',
    marginBottom: '10%'
  },
  backToHome: {
    marginTop: '4%'
  },
  formContact: {
    paddingTop: '10%'
  },
  contactContent: {
    padding: '4%'
  },
  btnSubmit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%'
  },
  customBtn: {
    width: 170,
    height: 45
  }
}));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/contact.png"
        imageAlt="alunna contact"
      />
      <Container>
        <div className={classes.leftContent}>
          <CustomTextMini
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: '#373BCE'
            }}
          >
            contact us
          </CustomTextMini>
          <CustomTextLarge>
            We welcome all feedback <p style={{ color: '#373BCE' }}>from you</p>
          </CustomTextLarge>
        </div>
        <div className={classes.formContact}>
          <Paper>
            <div className={classes.contactContent}>
              <Grid container spacing={6}>
                <Grid item lg={6}>
                  <CustomTextFieldLabel label={'First name'} />
                </Grid>
                <Grid item lg={6}>
                  <CustomTextFieldLabel label={'Last name'} />
                </Grid>
                <Grid item lg={6}>
                  <CustomTextFieldLabel label={'email address'} />
                </Grid>
                <Grid item lg={6}>
                  <CustomTextFieldLabel label={'phone'} />
                </Grid>
                <Grid item lg={12}>
                  <CustomTextFieldLabel multiline rows={8} label={'Message'} />
                </Grid>
              </Grid>
              <div className={classes.btnSubmit}>
                <CustomMainButton
                  label={'Submit'}
                  customClass={classes.customBtn}
                />
              </div>
            </div>
          </Paper>
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
export default ContactUs;

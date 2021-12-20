import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import Auth0Login from './Auth0Login';
import FirebaseAuthLogin from './FirebaseAuthLogin';
import JWTLogin from './JWTLogin';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  container: {
    display: 'flex'
  },
  banner: {
    height: '100vh'
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },
  formContainer: {

  },
  formTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '39px',
  },
  formFooter: {
    width: '75%',
  }
}));

const LoginView: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <img src="/static/images/astronaut.png" alt="alunna" className={classes.banner} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container justify="center" alignItems="center" className="d-flex h-100">
            <Grid item xs={12}>
              <div className={classes.formContainer}>
                <div className={classes.cardContent}>
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    mb={4}
                  >
                    <div className="d-flex">
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Welcome
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Back
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    mt={0}
                    className="d-flex justify-content-center flex-column"
                  >
                    {method === 'Auth0' && <Auth0Login /> }
                    {method === 'FirebaseAuth' && <FirebaseAuthLogin /> }
                    {method === 'JWT' && <JWTLogin /> }
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default LoginView;

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
import JWTRegister from './JWTRegister';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  formTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '39px',
  },
  banner: {
    height: '100vh'
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    alignItems: 'center',
  },
  formContainer: {

  },
  formFooter: {
    width: '75%',
  }
}));

const RegisterView: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <img src="/static/images/register.png" alt="alunna" className={classes.banner} />
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
                        Create
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Account
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    flexGrow={0}
                    mt={0}
                  >
                    {method === 'JWT' && <JWTRegister /> }
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

export default RegisterView;

import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  FormHelperText,
  Typography,
  Link,
  makeStyles,
  Theme,
  Divider
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import CustomTextField from 'src/components/CustomTextField';
import CustomMainButton from 'src/components/CustomMainButton';

interface JWTRegisterProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '325px',
  },
  btn: {
    padding: '13px 12.5px',
    borderRadius: '50px',
    // width: '75%',
    width: '200px',
    // width: '487px',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
    fontWeight: 600,
    textTransform: 'unset',
  },
  form: {
    width: '100%',
    marginTop: 16,
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginWrapper: {
    marginTop: 26,
  },
  loginText: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
  loginLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
  },
  socialWrapper: {

  },
  googleButton: {
    backgroundColor: theme.palette.common.white,
    textTransform: 'unset',
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'normal',
    '&:hover': {
      background: '#fff',
    }
  },
  linkedInButton: {
    backgroundColor: '#0077B5',
    textTransform: 'unset',
    color: '#fff',
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'normal',
    '&:hover': {
      background: '#0077B5',
    }
  },
  githubButton: {
    backgroundColor: '#161514',
    textTransform: 'unset',
    color: '#fff',
    fontSize: 16,
    lineHeight: '26px',
    '&:hover': {
      background: '#161514',
    }
  },
  providerIcon: {
    marginRight: theme.spacing(2)
  },
  btnCommon: {
    marginBottom: 10,
    borderRadius: 16,
    height: 45,
    fontWeight: 300,
    width: 325
  },
  divider: {
    flexGrow: 1,
    height: '2px',
    background: '#EFF0F6',
  },
  dividerText: {
    margin: theme.spacing(2)
  }
}));

const JWTRegister: FC<JWTRegisterProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();

  const history = useHistory();

  const handleGoogleClick = () => {

  };

  const handleLinkedInClick = () => {

  };

  const handleGithubClick = () => {

  };

  const handleEmailClick = () => {
    history.push('/complete-account-setup');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          console.log('Register submit');
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <div className={clsx("d-flex justify-content-center flex-column align-items-center", classes.root)}>
          <div className={classes.socialWrapper}>
            <Button
              className={clsx(classes.googleButton, classes.btnCommon)}
              fullWidth
              onClick={handleGoogleClick}
              size="large"
              variant="contained"
            >
              <img
                alt="Google"
                className={classes.providerIcon}
                src="/static/images/google.svg"
              />
              Continue with Google
            </Button>
            <Button
              className={clsx(classes.linkedInButton, classes.btnCommon)}
              fullWidth
              onClick={handleLinkedInClick}
              size="large"
              variant="contained"
            >
              <img
                alt="LinkedIn"
                className={classes.providerIcon}
                src="/static/images/linkedIn.svg"
              />
              Continue with Linkedin
            </Button>
            <Button
              className={clsx(classes.githubButton, classes.btnCommon)}
              fullWidth
              onClick={handleGithubClick}
              size="large"
              variant="contained"
            >
              <img
                alt="LinkedIn"
                className={classes.providerIcon}
                src="/static/images/github.svg"
              />
              Continue with Github
            </Button>
            <Box
              alignItems="center"
              display="flex"
              mt={2}
            >
              <Divider
                className={classes.divider}
                orientation="horizontal"
              />
              <Typography
                color="textSecondary"
                variant="body1"
                className={classes.dividerText}
              >
                or
              </Typography>
              <Divider
                className={classes.divider}
                orientation="horizontal"
              />
            </Box>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(className, classes.form)}
            {...rest}
          >
            <CustomTextField
              error={Boolean(touched.email && errors.email)}
              required={Boolean(touched.email && errors.email)}
              fullWidth
              autoFocus
              helperText={touched.email && errors.email}
              label="Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2} className={classes.btnWrapper}>
              <CustomMainButton
                onClick={() => { handleEmailClick() }}
                disabled={isSubmitting}
                label="Continue with Email"
                type="submit"
              />
              {/* <Button
                color="primary"
                className={classes.btn}
                disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Continue with Email
              </Button> */}
            </Box>
            <div className={clsx("d-flex justify-content-center", classes.loginWrapper)}>
              <Typography className={classes.loginText}>I'm already a member &nbsp;</Typography>
              <Typography>
                <Link
                  component={RouterLink}
                  to="/login"
                  variant="body2"
                  color="primary"
                  className={classes.loginLink}
                >
                  Log in
                </Link>
              </Typography>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

JWTRegister.propTypes = {
  className: PropTypes.string
};

export default JWTRegister;

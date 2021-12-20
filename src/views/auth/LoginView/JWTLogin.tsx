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
  makeStyles,
  Link,
  Typography
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Link as RouterLink } from 'react-router-dom';
import CustomTextField from 'src/components/CustomTextField';

interface JWTLoginProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
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
    textTransform: 'unset',
  },
  form: {
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '26px',
  },
  signupWrapper: {
    marginTop: 26,
  },
  signup: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
  signupLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
  }
}));

const JWTLogin: FC<JWTLoginProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { login } = useAuth() as any;
  const isMountedRef = useIsMountedRef();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        // password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          await login(values.email, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
        <div className="d-flex justify-content-center">
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(classes.root, className, classes.form)}
            {...rest}
          >
            <CustomTextField
              error={Boolean(touched.email && errors.email)}
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
            <CustomTextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label="Password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            {errors.submit && (
              <Box mt={0}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Link
              component={RouterLink}
              to="/forgot-password"
              variant="body2"
              color="primary"
              className={classes.forgotPassword}
            >
              Forgot password
            </Link>
            <Box mt={2} className={classes.btnWrapper}>
              <Button
                color="primary"
                className={classes.btn}
                disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </Box>
            <div className={clsx("d-flex justify-content-center", classes.signupWrapper)}>
              <Typography className={classes.signup}>I'm a new user &nbsp;</Typography>
              <Typography>
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="body2"
                  color="primary"
                  className={classes.signupLink}
                >
                  Sign up
                </Link>
              </Typography>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

JWTLogin.propTypes = {
  className: PropTypes.string,
};

export default JWTLogin;

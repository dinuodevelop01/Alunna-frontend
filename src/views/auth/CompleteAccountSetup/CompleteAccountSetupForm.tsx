import React, { useState } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import {
  Box,
  Checkbox,
  FormHelperText,
  Typography,
  Link,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {
  ToggleButtonGroup as FmToggleButtonGroup
} from 'formik-material-ui-lab';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import CustomTextField from 'src/components/CustomTextField';
import CustomMainButton from 'src/components/CustomMainButton';
import { ToggleButton } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';
import { CompleteAccountStep, UserType } from 'src/types/user';
import { useHistory } from 'react-router';


interface CompleteAccountSetupFormProps {
  className?: string;
  setStep: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
    maxWidth: '325px',
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  agreementText: {
    color: '#546681',
    fontSize: 12,
    lineHeight: '20px',
    fontWeight: 400,
  },
  agreementLink: {
    color: '#4B4FE4',
  },
  policy: {
    padding: '0 9px',
    transform: 'scale(1.2)'
  },
  userType: {

  },
  toggleBtn: {
    width: '50%',
  }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    width: '100%',
    background: '#4B4FE4',
    borderRadius: '16px',
  },
  grouped: {
    textTransform: 'none',
    margin: 2,
    color: '#fff',
    fontWeight: 300,
    fontSize: 16,
    lineHeight: '26px',
    width: '100%',
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
    '&.Mui-selected': {
      borderRadius: 15,
      color: '#546681',
      fontWeight: 600,
      background: '#fff',
      '&:hover': {
        background: '#fff',
        color: '#546681',
      }
    }
  },
}))(FmToggleButtonGroup);

const CompleteAccountSetupForm: FC<CompleteAccountSetupFormProps> = ({ className, setStep, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        userType: UserType.Student,
        username: '',
        firstName: '',
        middleName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().max(255).required('Username is required'),
        firstName: Yup.string().max(255).required('firstName is required'),
        middleName: Yup.string().max(255),
        lastName: Yup.string().max(255).required('lastName is required'),
        password: Yup.string().min(4).required('password is required'),
        confirmPassword: Yup.string().min(4).oneOf([Yup.ref('password'), null], 'Passwords must match'),
        policy: Yup.boolean().oneOf([true], 'You need to agree our terms & conditions'),
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          console.log('Complete Account Setup Submit');

          setStep(CompleteAccountStep.Teacher_Question);

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
          <form
            noValidate
            onSubmit={handleSubmit}
            className={clsx(className, classes.form)}
            {...rest}
          >
            <Box className={classes.userType} mb={4}>
              <Field component={StyledToggleButtonGroup} size="small" name="userType" exclusive type="checkbox">
                <ToggleButton value={UserType.Teacher} className={classes.toggleBtn}>I'm a Teacher</ToggleButton>
                <ToggleButton value={UserType.Student} className={classes.toggleBtn}>I'm a Student</ToggleButton>
              </Field>
            </Box>
            <CustomTextField
              error={Boolean(touched.username && errors.username)}
              fullWidth
              autoFocus
              helperText={touched.username && errors.username}
              required={Boolean(touched.username && errors.username)}
              label="Username*"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.username}
            />
            <CustomTextField
              error={Boolean(touched.firstName && errors.firstName)}
              fullWidth
              autoFocus
              helperText={touched.firstName && errors.firstName}
              required={Boolean(touched.firstName && errors.firstName)}
              label="First name*"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.firstName}
            />
            <CustomTextField
              error={Boolean(touched.middleName && errors.middleName)}
              fullWidth
              autoFocus
              helperText={touched.middleName && errors.middleName}
              label="Middle name"
              name="middleName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.middleName}
            />
            <CustomTextField
              error={Boolean(touched.lastName && errors.lastName)}
              fullWidth
              autoFocus
              helperText={touched.lastName && errors.lastName}
              required={Boolean(touched.lastName && errors.lastName)}
              label="Last name*"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.lastName}
            />
            <CustomTextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              autoFocus
              helperText={touched.password && errors.password}
              required={Boolean(touched.password && errors.password)}
              label="Create password*"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              endElement={showPassword
                ? (<img src="/static/images/visibility.svg" alt="show password" onClick={() => setShowPassword(!showPassword)}/>)
                : (<img src="/static/images/visibility_off.svg" alt="hide password" onClick={() => setShowPassword(!showPassword)} />)
              }
            />
            <CustomTextField
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              fullWidth
              autoFocus
              helperText={touched.confirmPassword && errors.confirmPassword}
              required={Boolean(touched.confirmPassword && errors.confirmPassword)}
              label="Confirm password*"
              name="confirmPassword"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.confirmPassword}
            />
            <Box
              alignItems="flex-start"
              display="flex"
              mt={2}
              ml={-1}
            >
              <Checkbox
                checked={values.policy}
                name="policy"
                onChange={handleChange}
                className={classes.policy}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.agreementText}
              >
                Yes, I understand agree to the&nbsp;
                <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    Terms of Service
                  </Link>
                </span>,
                including the <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    User Agreement
                  </Link>
                </span>&nbsp;and&nbsp;
                <span className={classes.agreementLink}>
                  <Link
                    component="a"
                    href="#"
                    color="secondary"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </Typography>
            </Box>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2} className={classes.btnWrapper}>
              <CustomMainButton
                disabled={isSubmitting}
                onClick={() => {
                  if (values.userType === UserType.Teacher) {
                    setStep(CompleteAccountStep.Teacher_Question);
                  } else {
                    history.push('/thank-you?action=registration')
                  }
                }}
                label="Create account"
                type="submit"
              />
            </Box>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default CompleteAccountSetupForm;

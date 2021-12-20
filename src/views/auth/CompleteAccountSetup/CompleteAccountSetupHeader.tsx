import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Typography,
  Container,
  Link,
  Theme
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface CompleteAccountSetupHeaderProps {
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 100,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  banner: {
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  cardContent: {

  },
  logo: {

  },
  logoLink: {

  },
  loginWrapper: {

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
}));

const CompleteAccountSetupHeader: FC<CompleteAccountSetupHeaderProps> = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        className={classes.cardContainer}
        maxWidth="lg"
      >
        <Link
          component={RouterLink}
          to="/"
          variant="body2"
          color="primary"
          className={classes.logoLink}
        >
          <img
            alt="Logo"
            className={classes.logo}
            src="/static/images/logo.svg"
          />
        </Link>
        <div className={clsx("d-flex justify-content-center", classes.loginWrapper)}>
          <Typography className={classes.loginText}>I'm already a member, &nbsp;</Typography>
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
      </Container>
    </div>
  );
}

export default CompleteAccountSetupHeader;
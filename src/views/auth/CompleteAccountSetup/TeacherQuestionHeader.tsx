import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Container,
  Link,
  Theme
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface TeacherQuestionHeaderProps {
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
    justifyContent: 'center',
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

const TeacherQuestionHeader: FC<TeacherQuestionHeaderProps> = ({ ...rest }) => {
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
      </Container>
    </div>
  );
}

export default TeacherQuestionHeader;
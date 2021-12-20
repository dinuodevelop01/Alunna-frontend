import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';

interface FeaturesProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 160,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const Features: FC<FeaturesProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img alt="01" src="/static/home/01.svg" />
          </div>
          <div>
            <img alt="02" src="/static/home/02.svg" />
          </div>
          <div>
            <img alt="03" src="/static/home/03.svg" />
          </div>
          <div>
            <img alt="04" src="/static/home/04.svg" />
          </div>
          <div>
            <img alt="05" src="/static/home/05.svg" />
          </div>
          <div>
            <img alt="06" src="/static/home/06.svg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
};

export default Features;

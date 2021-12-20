import React from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

interface MainLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // display: 'flex',
    // height: '100%',
    // overflow: 'hidden',
    // width: '100%'
  },
  wrapper: {
    // display: 'flex',
    // flex: '1 1 auto',
    // overflow: 'hidden',
    // paddingTop: 100
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    width: '100%',
  },
  content: {
    // flex: '1 1 auto',
    // height: '100%',
    // overflow: 'auto',
    width: '100%',
  }
}));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar inlineImageUrl="/static/home/hero.png" imageAlt="hero" />
      {/* <div>
        <img
          alt="hero"
          src="/static/home/hero.png"
        />
      </div> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Inter',
    lineHeight: '28px',
    fontWeight: 'normal',
    fontSize: '17px'
  }
}));

const CustomTextNormal = (props: { text: string; style?: any; className?: string; }) => {
  const { text, style, className } = props;
  const classes = useStyles();
  return style ? (
    <p className={clsx(classes.root, className)} style={{ ...style }}>
      {text}
    </p>
  ) : (
    <p className={clsx(classes.root, className)}>{text}</p>
  );
};
export default CustomTextNormal;

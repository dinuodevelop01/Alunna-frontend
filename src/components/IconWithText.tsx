import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import CustomTextNormal from './CustomTextNormal';
const useStyles = makeStyles((theme: Theme) => ({
  iconText: {
    display: 'flex',
    alignItems: 'center',
  },
  imgIconText: {
    height: '16px',
    marginRight: '8px',
  }
}));
const IconWithText = (props: { CIcon: any; text: string; style?: any; className?: string; }) => {
  const classes = useStyles();
  return (
    <div className={classes.iconText}>
      <img className={classes.imgIconText} src={props.CIcon} alt="icon" />
      <CustomTextNormal
        style={props.style && { ...props.style }}
        text={props.text}
        className={props.className}
      />
    </div>
  );
};
export default IconWithText;

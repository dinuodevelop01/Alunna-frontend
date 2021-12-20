import React from 'react'
import type { FC } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,

    marginTop: 120,
    display: 'flex',
    marginBottom: 240,
    position: 'relative',
  },
  textWrapper: {
    marginTop: 15,
  },
  titleWrapper: {
    paddingTop: 30,
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    color: '#4B4FE4',
    fontWeight: 700,

  },
  card: {
    width: '100%',
    background: 'linear-gradient(0deg, #EDEDFF, #EDEDFF), linear-gradient(180deg, #3B5AAF 6.22%, #292167 100%), #FFFFFF',
    border: '1px solid #D6D8E7',
    boxShadow: '0px 0px 20px rgba(11, 14, 112, 0.15), 0px 0px 40px rgba(140, 143, 255, 0.1)',
  },
  largeTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',
  },
  leaveEmailWrapper: {
    position: 'relative',
    marginTop: 15,
  },
  leaveEmailImg: {
    // position: 'absolute',
    // left: 0,
    // top: -80,
  },
  input: {
    width: 600,
    height: 45,
    borderRadius: 50,
    background: '#fff',
    border: '1px solid #D6D8E7',
    outline: 'none',
    color: '#546681',
    padding: '10px 25px',
    fontSize: 16,
    lineHeight: '26px',
    '&::placeholder': {
      color: '#A6A9C2'
    },
    '&:hover': {
      border: '2px solid #4B4FE4',
    },
    '&:focus': {
      border: '2px solid #4B4FE4',
    }
  },
  hitMeUp: {
    height: 45,
    width: 160,
    position: 'absolute',
    background: '#4B4FE4',
    color: '#fff',
    padding: '13px 12.5px',
    outline: 'none',
    borderRadius: '50px',
    borderColor: 'unset',
    border: 'none',
    fontSize: 16,
    lineHeight: '19px',
    fontWeight: 600,
    right: 0,
    cursor: 'pointer',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
  }
}));

const LeaveEmail: FC = (props) => {
  const classes = useStyles();

  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <img alt="leave email" src="/static/home/leave_email.png" className={classes.leaveEmailImg} />
              </Grid>
              <Grid item xs={12} md={7} className="d-flex align-items-center">
                <div>
                  <div className={classes.textWrapper}>
                    <div className="d-flex">
                      <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Want to</Typography>&nbsp;&nbsp;
                      <Typography variant="h2" color="primary" className={classes.largeTitle}>teach?</Typography>
                    </div>
                  </div>
                  <div className={classes.titleWrapper}>
                    <Typography className={classes.title}>Leave your email and we'll reach out to you</Typography>
                  </div>
                  <div className={classes.leaveEmailWrapper}>
                    <input type="text" className={classes.input} placeholder="Enter your email" />
                    <button className={classes.hitMeUp}>Hit me up!</button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default LeaveEmail;
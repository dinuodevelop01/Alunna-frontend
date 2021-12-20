import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import ClassCard from './ClassCard';

const useStyles = makeStyles(() => ({
    root: {
    },
    titleContainer: {
        margin: '15px 0px',
        textAlign: 'center'
    },
    title: {
        fontSize: 46,
        fontWeight: 600,
        lineHeight: '58px',
        marginBottom: 46,
        '& > span': {
            fontSize: 'inherit',
            fontWeight: 'inherit',
            lineHeight: 'inherit'
        }
    },
}));

const ClassesData = [
    {
        imgSrc: '/static/classes/ci.png',
        title: 'CI/CD Automation & Deployment',
        description: 'CI/CD automation is one of the most important parts of software that is rarely taught. After enrolling, you can actually say you do know CI/CD in your interviews!',
    },
    {
        imgSrc: '/static/classes/ci.png',
        title: 'CI/CD Automation & Deployment',
        description: 'CI/CD automation is one of the most important parts of software that is rarely taught. After enrolling, you can actually say you do know CI/CD in your interviews!',
    },
    {
        imgSrc: '/static/classes/ci.png',
        title: 'CI/CD Automation & Deployment',
        description: 'CI/CD automation is one of the most important parts of software that is rarely taught. After enrolling, you can actually say you do know CI/CD in your interviews!',
    },
];


const ComingClassesList = () => {
    const classes = useStyles();
    

    return (
        <Container className={classes.root}>
            <div className={classes.titleContainer}>
                <img src="/static/classes/coming-soon.png" />
                <Typography className={classes.title} variant="h2" color="textPrimary" align="center">
                    Coming
                    <Typography component="span" color="primary">
                        soon
                    </Typography>
                </Typography>
            </div>
            <div>
                <Grid container={true} alignItems="flex-start" justify="space-between" spacing={8}>
                    {ClassesData.map((courseData, i) => (
                        <Grid item={true} md={4} sm={12}>
                            <ClassCard 
                                key={i}
                                imgSrc={courseData.imgSrc}
                                title={courseData.title}
                                description={courseData.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    );
};

export default ComingClassesList;

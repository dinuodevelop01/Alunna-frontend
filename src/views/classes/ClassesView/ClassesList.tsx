import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import ClassCard from './ClassCard';

const useStyles = makeStyles(() => ({
    root: {
    },
    titleContainer: {
        margin: '15px 0px'
    },
    title: {
        fontSize: 46,
        fontWeight: 600,
        lineHeight: '58px',
    },
    subTitlte: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '17px',
        letterSpacing: '0.1em',
        marginBottom: 46
    },
    loadMore: {
        margin: '40px 0px'
    },
    customCTAButton: {
        width: 170,
        height: 45,
        borderRadius: 50,
    },
    seeOurProcessBtn: {
        color: '#546681',
        background: '#fff',
        textTransform: 'unset'
    }
}));

const ClassesData = [
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
    {
        imgSrc: '/static/classes/data-structure.png',
        startDate: new Date(),
        title: 'Data Structures & Algorithms',
        description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
        learningWeeks: 3,
        availablePlaces: 10,
    },
];


const ClassesList = () => {
    const classes = useStyles();
    

    return (
        <Container className={classes.root}>
            <div className={classes.titleContainer}>
                <Typography className={classes.title} variant="h2" color="textPrimary">
                    What do you want
                </Typography>
                <Typography className={classes.title} variant="h2" color="primary">
                    to learn
                </Typography>
            </div>
            <Typography className={classes.subTitlte} variant="body2" color="primary">
                View the available live courses:
            </Typography>
            <div>
                <Grid container={true} alignItems="flex-start" justify="space-between" spacing={8}>
                    {ClassesData.map((courseData, i) => (
                        <Grid item={true} md={4} sm={12}>
                            <ClassCard 
                                key={i}
                                imgSrc={courseData.imgSrc}
                                title={courseData.title}
                                description={courseData.description}
                                availablePlaces={courseData.availablePlaces}
                                learningWeeks={courseData.learningWeeks}
                                startDate={courseData.startDate}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Box className={classes.loadMore} display="flex" justifyContent="center">
                <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurProcessBtn)}>
                    Load more
                </Button>
            </Box>
        </Container>
    );
};

export default ClassesList;

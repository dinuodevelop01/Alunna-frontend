import React from 'react';
import clsx from 'clsx';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import CustomMainButton from 'src/components/CustomMainButton';

const useStyles = makeStyles(theme => createStyles({
    root: {
        width: 444,
        margin: 'auto',
        marginTop: 140,
        textAlign: 'center',
    },
    title: {
        fontSize: 46,
        fontWeight: 600,
        lineHeight: '58px',
        '& > span': {
            fontSize: 'inherit',
            fontWeight: 'inherit',
            lineHeight: 'inherit'
        }
    },
    desc: {
        fontSize: 17,
        lineHeight: '28px',
        color: '#546681',
        margin: '22.4px 0px',
    },
    customCTAButton: {
        width: 170,
        height: 45,
        borderRadius: 50,
    },
    seeOurProcessBtn: {
        marginLeft: 20,
        color: '#546681',
        background: '#fff',
        textTransform: 'unset'
    }
}))

const CourseIdea = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <Typography
                    className={classes.title}
                    variant="h2"
                    color="textPrimary"
                >
                    Got a course <Typography component="span" color="primary">idea?</Typography>
                </Typography>
                <Typography className={classes.desc}>
                    Feel free to ping us at&nbsp;
                    <Link href="mailto:team@alunna.io" color="primary">
                        team@alunna.io.
                    </Link>&nbsp;
                    We value your input and are happy to make courses that help you!
                </Typography>
                <Box mt={3}>
                    <CustomMainButton label="Sign up" customClass={classes.customCTAButton}/>
                    <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurProcessBtn)}>
                        See our process
                    </Button>
                </Box>
            </div>
        </Container>
    );
}

export default CourseIdea;

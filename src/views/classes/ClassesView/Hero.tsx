import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import CustomMainButton from 'src/components/CustomMainButton';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: 90,
    },
    technologyIcon: {
        height: 40,
        margin: theme.spacing(1)
    },
    image: {
    },
    shape: {
        position: 'absolute',
        top: 0,
        left: 0,
        '& > img': {
        maxWidth: '90%',
        height: 'auto'
        }
    },
    cta: {
        width: 483,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        textTransform: 'uppercase',
        // color: #4B4FE4;
        margin: '15px 0px'
    },
    title: {
        fontWeight: 700,
        fontSize: 55,
        lineHeight: '70px',
    },
    description: {
        color: '#546681',
        fontSize: 17,
        lineHeight: '28px',
    },
    inlineTextWithIconWrapper: {
        marginRight: 16,
    },
    inlineTextWithIcon: {
        marginLeft: 12,
        fontSize: 24,
        lineHeight: '29px',
        fontWeight: 600,
    },
    customCTAButton: {
        width: 170,
        height: 45,
        borderRadius: 50,
    },
    seeOurClassBtn: {
        marginLeft: 20,
        color: '#546681',
        background: '#fff'
    }
}));

const Hero: FC<HeroProps> = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Container maxWidth="lg">
                <div className={classes.cta}>
                    <Typography
                        className={classes.subTitle}
                        color="primary"
                    >
                        Classes
                    </Typography>
                    <Typography
                        variant="h2"
                        color="textPrimary"
                        className={classes.title}
                    >
                        Reduce the feedback loops in learning 
                    </Typography>
                    <Typography
                        variant="h2"
                        color="primary"
                        className={classes.title}
                    >
                        technology
                    </Typography>
                    <Box mt={2}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.description}
                            gutterBottom={true}
                        >
                            Learning is simply a process of downloading information and applying it.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.description}
                            component="p"
                        >
                            We focus on the necessities of certain subjects to give you the core, 
                            and allow the projects and lessons to expand the the 
                            adjacent topics that accelerate your ability.
                        </Typography>
                    </Box>
                    <Box mt={2} display="flex">
                        <div className={clsx("d-flex align-items-center", classes.inlineTextWithIconWrapper)}>
                            <img src="/static/classes/focus.svg" />
                            <Typography variant="body2" className={classes.inlineTextWithIcon} color="primary">
                                Focused on amplification
                            </Typography>
                        </div>
                    </Box>
                    <Box mt={2}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={classes.description}
                            component="p"
                        >
                            Working with others grants you new insights-we aim 
                            to make your classmates part of your long-term network.
                        </Typography>
                    </Box>
                </div>
            </Container>
        </div>
    );
};


export default Hero;
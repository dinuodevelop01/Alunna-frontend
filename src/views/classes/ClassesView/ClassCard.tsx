import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import { 
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent, 
    Typography,
    CardActions,
    Button,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomMainButton from 'src/components/CustomMainButton';

interface Props {
    imgSrc?: string;
    title?: string;
    description?: string;
    startDate?: Date;
    learningWeeks?: number;
    availablePlaces?: number;
}

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid #D6D8E7',
        borderRadius: 15,
        boxSizing: 'border-box',
        height: 707,
    },
    media: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 220,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    content: {
        padding: 25
    },
    actions: {
        display: 'block',
        padding: '0px 25px 25px 25px',
    },
    bgIcon: {
        height: 150,
    },
    title: {
        margin: '16px 0px',
        fontSize: 24,
        lineHeight: '29px',
        fontWeight: 600,
    },
    description: {
        fontSize: 17,
        lineHeight: '28px',
        color: '#546681',
    },
    clock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#EEF0FF',
        borderRadius: 10,
        fontSize: 14,
        lineHeight: '17px',
        letterSpacing: '10%',
        fontWeight: 700
    },
    clockIcon: {
        height: 17
    },
    clockText: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        fontWeight: 'inherit',
    },
    clockTextPrimary: {
        margin: '0px 8px',
    },
    clockTextSecondary: {
        color: '##546681',
        fontWeight: 400
    },
    btn: {
        marginTop: 16,
    },
    actionIcons: {
        marginBottom: 16, 
    },
    icon: {
        height: 14,
        marginRight: 8
    }
}));

const ClassCard = (props: Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={8}>
            <CardMedia
                className={classes.media}
                image="/static/classes/card-bg.png"
            >
                <img className={classes.bgIcon} src={props.imgSrc} />
            </CardMedia>
            <CardContent className={classes.content}>
                {props.startDate && (
                    <div className={classes.clock}>
                        <img className={classes.clockIcon} src="/static/classes/clock.svg" />
                        <Typography 
                            className={clsx(classes.clockText, classes.clockTextPrimary)} 
                            color="primary" 
                            component="span"
                        >
                            Start date:
                        </Typography>
                        <Typography 
                            className={clsx(classes.clockText, classes.clockTextSecondary)} 
                            component="span" 
                            color="textSecondary"
                        >
                            {moment(props.startDate).format('DD MMM YYYY')}
                        </Typography>
                    </div>
                )}
                <Typography className={classes.title} variant="h4" color="textPrimary">
                    {props.title}
                </Typography>
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <div className={classes.actions}>

                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.actionIcons}>
                    {props.learningWeeks !== undefined && (
                        <Box alignItems="center" display="flex">
                            <img className={classes.icon} src="/static/classes/calendar.svg" />
                            <Typography variant="body2" color="textSecondary">
                                {props.learningWeeks} learning weeks
                            </Typography>
                        </Box>
                    )}
                    {props.availablePlaces !== undefined && (
                        <Box alignItems="center" display="flex">
                            <img className={classes.icon} src="/static/classes/user.svg" />
                            <Typography variant="body2" color="textSecondary">
                                {props.availablePlaces} places left
                            </Typography>
                        </Box>
                    )}
                </div>

                <CustomMainButton label="Learn more" className={classes.btn} />
            </CardActions>
        </Card>
    );
};

export default ClassCard;

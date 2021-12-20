import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Typography,
  makeStyles,
  Container,
  Menu,
  MenuItem
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from 'src/components/Logo';
import CustomMainButton from 'src/components/CustomMainButton';

interface TopBarProps {
  className?: string;
  inlineImageUrl?: string;
  imageAlt?: string;
  classImageBackground?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'unset',
    position: 'relative'
  },
  container: {
    // paddingLeft: 0,
    // paddingRight: 0,
  },
  appbar: {
    backgroundColor: theme.palette.background.default,
    height: 100,
  },
  toolbar: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  menuWrapper: {
    marginLeft: 70,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  anchor: {
    color: '#4B4FE4',
    // color: '#fff',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px',
    textTransform: 'none',
    '&:hover': {
      // background: '#fff',
      color: '#5fc4b8',
    }
  },
  menu: {
    marginTop: 40,
    inset: 'unset !important',
    display: 'inline-block !important',
    '& > div[aria-hidden]': {
      // display: 'none'
    },
    '& .MuiMenu-paper': {
      border: '1px solid #DADCEC',
      boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12)',
      borderRadius: '10px',
      top: '24px !important',
      left: '0px !important',
      maxHeight: 'unset !important',
      maxWidth: 'unset !important',
      '& .MuiList-padding': {
        paddingTop: 0,
        paddingBottom: 0,
        '& .MuiMenuItem-root':{
          paddingTop: 12,
          paddingBottom: 12,
          '&:hover': {
            background: '#EEF0FF',
          }
        }
      }
    }
  },
  menuItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
    // marginLeft: 45
  },
  opening: {
    color: '#4B4FE4',
  },
  closing: {
    color: '#546681',
  },
  arrow: {
    marginLeft: -4,
    zIndex: 2,
    fontSize: 20,
  },
  phoneWrapper: {
    // marginLeft: 71,
  },
  phoneText: {
    color: '#546681',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19px',
    marginLeft: 8,
  },
  signupBtn: {
    width: 110,
    height: 45,
    marginLeft: 41
  },
  absoluteImage: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  activeLink: {
    color: '#4B4FE4',
    borderTop: '2px solid #4B4FE4',
  },
  activeButton: {
    color: '#5fc4b8',
  }
}));

const TopBar: FC<TopBarProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { className, inlineImageUrl, imageAlt, ...rest } = props;


  const [classesAnchorEl, setClassesAnchorEl] = React.useState(null);
  const [teacherAnchorEl, setTeacherAnchorEl] = React.useState(null);

  const handleClickClasses = (event) => {
    history.push('/classes');
  };

  const handleSelecClass = () => {
    setClassesAnchorEl(null);
  };

  const handleCloseClassAnchor = () => {
    setClassesAnchorEl(null);
  };

  const handleClickTeacher = (event) => {
    setTeacherAnchorEl(null);
  };

  const handleCloseTeacherAnchor = () => {
    setTeacherAnchorEl(null);
  };

  return (
    <AppBar
      className={clsx(className, classes.root)}
      color="default"
      position="static"
      {...rest}
    >
      <Container
        className={classes.container}
        maxWidth="lg"
      >
        <div className={classes.toolbar}>
          <RouterLink to="/" style={{ zIndex: 2 }}>
            <Logo className={classes.logo} />
          </RouterLink>
          <div className={classes.menuWrapper}>
            <div className={clsx(classes.menuItemWrapper, location.pathname === '/' ? classes.activeLink : '')}>
              <Button className={clsx(classes.anchor, location.pathname === '/' ? classes.activeButton : '')} onClick={() => history.push('/')}>
                Home
              </Button>
            </div>
            <div 
              className={classes.menuItemWrapper} 
              onMouseEnter={(e) => setClassesAnchorEl(e.target)}
              onMouseLeave={handleCloseClassAnchor}
            >
              <Button
                onClick={handleClickClasses}
                className={classes.anchor}
                endIcon={<KeyboardArrowDownIcon className={clsx(classes.arrow, classes.closing)} />}
              >
                Classes
              </Button>
              <Menu
                anchorEl={classesAnchorEl}
                open={Boolean(classesAnchorEl)}
                onClose={handleCloseClassAnchor}
                className={classes.menu}
                hideBackdrop={true}
                disablePortal={true}
              >
                <MenuItem onClick={handleSelecClass}>Python through algorithms</MenuItem>
                <MenuItem onClick={handleSelecClass}>AWS Cloud Development</MenuItem>
                <MenuItem onClick={handleSelecClass}>MERN Application</MenuItem>
                <MenuItem onClick={handleSelecClass}>Machine Learning in Python</MenuItem>
                <MenuItem onClick={handleSelecClass}>CI/CD Automation & Deployment</MenuItem>
              </Menu>
            </div>
            <div 
              className={classes.menuItemWrapper}
              onMouseEnter={(e) => setTeacherAnchorEl(e.target)}
              onMouseLeave={handleCloseTeacherAnchor}
            >
              <Button
                onClick={handleClickTeacher}
                className={classes.anchor}
                endIcon={<KeyboardArrowDownIcon className={clsx(classes.arrow, classes.closing)} />}
              >
                Teachers
              </Button>
              <Menu
                anchorEl={teacherAnchorEl}
                open={Boolean(teacherAnchorEl)}
                onClose={handleCloseTeacherAnchor}
                className={classes.menu}
                hideBackdrop={true}
                disablePortal={true}
              >
                <MenuItem onClick={handleCloseTeacherAnchor}>Jenny Wilson</MenuItem>
                <MenuItem onClick={handleCloseTeacherAnchor}>Ronald Richards</MenuItem>
                <MenuItem onClick={handleCloseTeacherAnchor}>Brooklyn Simmons</MenuItem>
                <MenuItem onClick={handleCloseTeacherAnchor}>Cameron Williamson</MenuItem>
                <MenuItem onClick={handleCloseTeacherAnchor}>Marvin McKinney</MenuItem>
              </Menu>
            </div>
            <div className={clsx(classes.menuItemWrapper, location.pathname === '/how-it-works' ? classes.activeLink : '')}>
              <Button className={clsx(classes.anchor, location.pathname === '/how-it-works' ? classes.activeButton : '')} onClick={() => history.push('/how-it-works')}>
                How it works
              </Button>
            </div>
            <div className={classes.menuItemWrapper}>
              <Button className={clsx(classes.anchor, location.pathname === '/blog' ? classes.activeButton : '')}>
                Blog
              </Button>
            </div>
            <div className={clsx(classes.menuItemWrapper, classes.phoneWrapper)}>
              <img alt="Alunna phone" src="/static/images/phone.svg" />
              <Typography className={classes.phoneText}>(+1) 818 808-9948</Typography>
            </div>
            <div className={clsx(classes.menuItemWrapper)}>
              <Button className={classes.anchor} onClick={() => history.push('/login')}>
                Login
              </Button>
              <CustomMainButton label="Signup" customClass={classes.signupBtn} onClick={() => history.push('/register')}/>
            </div>
          </div>
        </div>
      </Container>
      {/* <div>
        <img
          alt={imageAlt}
          src={inlineImageUrl}
          className={clsx(props.classImageBackground, classes.absoluteImage)}
        />
      </div> */}
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;

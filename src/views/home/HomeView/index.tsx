import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from 'src/layouts/FooterLayout';
import Mission from './Mission';
import Curriculum from './Curriculum';
import Promise from './Promise';
import HowItWork from './HowItWork';
import BecomeTeacher from './BecomeTeacher';
import CaseStudy from './CaseStudy';
import LeaveEmail from './LeaveEmail';
import CourseSlide from './Courses/CourseSlide';
import CourseElasticSlide from './Courses/CourseElasticSlide';

const useStyles = makeStyles(() => ({
  root: {},
  backgroundImage: {
    // backgroundColor: '#4B4FE4',
    backgroundImage: `url('/static/home/home_bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

const HomeView: React.FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Alunna">
      <div className={classes.backgroundImage}>
        <Hero />
        <Features />
        <CourseElasticSlide />
        <Mission />
        <Curriculum />
        <Promise />
        <HowItWork />
        <BecomeTeacher />
        <CaseStudy />
        <LeaveEmail />
        <Testimonials />
        <Footer 
          topBgImg={'/static/home/testimonial_bg.png'}
          topBgMargin={'-200px'}
         />
      </div>
    </Page>
  );
};

export default HomeView;

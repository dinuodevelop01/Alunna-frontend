import React from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

import Footer from 'src/layouts/FooterLayout';
import Hero from './Hero';
import CourseIdea from './CourseIdea';
import ClassesList from './ClassesList';
import ComingClassesList from './ComingClassesList';

const useStyles = makeStyles(() => ({
  root: {},
  backgroundImage: {
    backgroundImage: `url('/static/classes/hero.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
  }
}));

const HomeView: FC = () => {
	const classes = useStyles();

	return (
		<Page
			className={classes.root}
			title="Classes"
		>
			<div className={classes.backgroundImage}>
				<Hero />
				<ClassesList />
				<ComingClassesList />
				<CourseIdea />
				<Footer />
			</div>
		</Page>
	);
};

export default HomeView;

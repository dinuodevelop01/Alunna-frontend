import React from 'react';
import type { FC } from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent
} from '@material-ui/core';
import CompleteAccountSetupHeader from './CompleteAccountSetupHeader';
import CompleteAccountSetupForm from './CompleteAccountSetupForm';

interface CompleteAccountSetupProps {
  className?: string;
  setStep: any;
}

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: 'url("/static/images/complete_account_setup_bg.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  cardContainer: {

  },
  card: {
    boxShadow: '0px 4px 40px rgba(11, 14, 112, 0.2)',
    borderRadius: '15px',
  },
  cardContent: {

  },
  formTitle: {
    fontWeight: 'bold',
    lineHeight: '39px',
    fontSize: '32px',
  }
}));

const CompleteAccountSetupPage: FC<CompleteAccountSetupProps> = ({ className, setStep, ...rest }) => {
  const classes = useStyles();
  return (
    <>
      <CompleteAccountSetupHeader />
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              mb={0}
            >
              <div className="d-flex">
                <Typography
                  color="textPrimary"
                  variant="h2"
                  className={classes.formTitle}
                >
                  Complete
                </Typography>
                &nbsp;
                <Typography
                  color="primary"
                  variant="h2"
                  className={classes.formTitle}
                >
                  Account setup
                </Typography>
              </div>
            </Box>
            <Box
              flexGrow={1}
              mt={4}
            >
              <CompleteAccountSetupForm setStep={setStep} />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default CompleteAccountSetupPage;
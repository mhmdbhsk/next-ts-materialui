import React, { Fragment } from 'react';
import { Container, AppBar } from '@components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { firebase, provider } from '@config/firebase';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Login = () => {
  const classes = useStyles();
  const Router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoginGoogle = async () => {
    await firebase.default.auth().signInWithPopup(provider);
    Router.push('/profile');
  };

  return (
    <Fragment>
      <AppBar />
      <Container>
        <div className={classes.contentWrapper}>
          <Button variant="contained" onClick={handleLoginGoogle}>
            Login With Google
          </Button>
          <Button onClick={() => Router.push('/')}>Go Back</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Login;

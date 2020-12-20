import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, AppBar } from '@components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { firebase, provider } from '@config/firebase';
import { useAuth } from '@hooks/use-auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const Router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Fragment>
      <AppBar />
      <Container>
        <div className={classes.contentWrapper}>Hai {user?.displayName}</div>
      </Container>
    </Fragment>
  );
};

export default Profile;

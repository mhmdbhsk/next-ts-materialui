import { Fragment } from 'react';
import Image from 'next/image';
import { AppBar, Container } from '@components';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    jumbotron: {
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageWrapper: {
      width: '60%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    image: {
      width: 'fit-content',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: 'center',
      width: '100%',
    },
  })
);

const NEXT_JS_LOGO = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png`;
const MATERIAL_UI_LOGO = `https://material-ui.com/static/logo.png`;
const TYPESCRIPT_LOGO = `https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png`;
const REACT_QUERY_LOGO = `https://react-query.tanstack.com/_next/static/images/logo-a65f848e05592e7de1dc2150454230fa.svg`;

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar />
      <Container>
        <Grid container className={classes.jumbotron}>
          <Grid className={classes.imageWrapper}>
            <div className={classes.image}>
              <Image
                src={NEXT_JS_LOGO}
                alt="Next JS Logo"
                width={150}
                height="100%"
              />
            </div>
            <div className={classes.image}>
              <Image
                src={MATERIAL_UI_LOGO}
                alt="Material UI Logo"
                width="100%"
                height="100%"
              />
            </div>
            <div className={classes.image}>
              <Image
                src={TYPESCRIPT_LOGO}
                alt="Typescript Logo"
                width={100}
                height="100%"
              />
            </div>
            <div className={classes.image}>
              <Image
                src={REACT_QUERY_LOGO}
                alt="Next JS Logo"
                width={200}
                height="100%"
              />
            </div>
          </Grid>
          <Grid className={classes.title}>
            <h1>NextJs + Material-UI</h1>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

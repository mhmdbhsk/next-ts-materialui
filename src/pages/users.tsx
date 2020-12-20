import React, { Fragment, useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, AppBar } from '@components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getUsers } from '@services/example';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      paddingTop: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    table: {
      minWidth: 650,
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getUsers();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <AppBar />
      <Container>
        <div className={classes.contentWrapper}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell size="small">No</TableCell>
                  <TableCell size="small">Id</TableCell>
                  <TableCell size="small">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell size="small" component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell size="small">{row.id}</TableCell>
                    <TableCell size="small">{row.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </Fragment>
  );
};

export default Profile;

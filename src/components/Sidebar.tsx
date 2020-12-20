import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { SidebarPropsType } from '@libs/dto/Sidebar';
import { useAuth } from '../hooks/use-auth';
import { useRouter } from 'next/router';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

const Sidebar = (props: SidebarPropsType) => {
  const { isOpen, onClose } = props;
  const { user, signOut } = useAuth();
  const Router = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon className={classes.icon}>
            {user ? <FaSignOutAlt /> : <FaSignInAlt />}
          </ListItemIcon>
          <ListItemText primary={user ? 'Logout' : 'Login'} />
        </ListItem>
      </List>
    </Fragment>
  );

  return (
    <Fragment>
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={isOpen}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;

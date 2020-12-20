import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { MdDehaze, MdAccountCircle } from 'react-icons/md';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { HideOnScrollPropsType } from '@libs/dto/Sidebar';
import { Container, Sidebar } from '@components';
import { useAuth } from '@hooks/use-auth';
import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      justifyContent: 'space-between',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const HideOnScroll = (props: HideOnScrollPropsType) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const MenuAppBar = (props) => {
  const classes = useStyles();
  const Router = useRouter();
  const { user, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar position="static">
          <Container>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleSidebar}
              >
                <MdDehaze />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                NextTS Boilerplate
              </Typography>
              {user ? (
                <div>
                  <IconButton
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <MdAccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => Router.push('/')}>Home</MenuItem>
                    <MenuItem onClick={() => Router.push('/users')}>
                      Users
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => Router.push('/profile')}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  onClick={() => Router.push('/login')}
                  variant="contained"
                >
                  Login
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Sidebar isOpen={isOpen} onClose={handleSidebar} />
    </div>
  );
};

export default MenuAppBar;

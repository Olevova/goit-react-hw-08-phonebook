import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { postLogOut } from '../../servise/fetch';

const NavigationLink = styled(NavLink)`
  color: white;
  margin-right: 15px;
  &:hover {
    color: #080d10;
  }

  &.active {
    color: #080d10;
  }
`;

const menu = [
  { href: 'register', text: 'register' },
  { href: 'login', text: 'login' },
  // { href: 'contacts', text: 'contacts' },
];

export const Navigation = () => {
  const { isLoggedIn, isUser } = useAuth();
  console.log(isLoggedIn, isUser);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ backgroundColoe: 'teal' }}>
        <div style={{ backgroundColor: 'teal' }}>
          <AppBar position="static">
            <Toolbar
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <nav>
                <NavigationLink to="/">HOME</NavigationLink>
                {isLoggedIn ? (
                  <NavigationLink to="contacts">CONTACTS</NavigationLink>
                ) : (
                  ''
                )}
              </nav>
              <nav>
                {isLoggedIn ? (
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <p>Hi you email: {isUser.email}</p>
                    <Button
                      color="inherit"
                      onClick={() => {
                        dispatch(postLogOut());
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  menu.map(({ href, text }) => (
                    <Button color="inherit" key={text}>
                      <NavigationLink to={href}>{text}</NavigationLink>
                    </Button>
                  ))
                )}
              </nav>
            </Toolbar>
          </AppBar>
        </div>
      </Box>
      <Outlet />
    </>
  );
};

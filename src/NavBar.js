import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div className='Head'>
          <Typography variant="h6" color="inherit" >
          <Link to="/Product">Product</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="/Cart">Cart</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="/Login">Login</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="/Register">Register</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to="/Home">Home</Link>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
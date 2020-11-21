import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Navbar.module.scss';

export default () => {
  const loading = useSelector(({ loading }) => loading);
  return (
    <AppBar className={style.navbar} position="static">
      <div className="app-width-wrapper">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">
              Blogs Demo
            </Link>
          </Typography>
        </Toolbar>
      </div>
      {loading && <LinearProgress color="secondary" />}
    </AppBar>
  );
};

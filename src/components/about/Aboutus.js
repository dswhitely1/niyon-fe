import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

function Aboutus() {
    const classes = useStyles();

  return (
        <div className="container">
          <h1>Meet the Crew</h1>
            </div>
  );
}
export default Aboutus;
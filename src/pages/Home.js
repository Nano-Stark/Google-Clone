import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { makeStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';
import Search from './Search';

//check hometest.js for using class component suring styling
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  nop: {
    height: '40px',
    width: '40px'
  },
});


function Home() {
  const classes = useStyles();
  return (
    <div className='home'>
    {/*<div className={`home ${classes.root}`}>*/}

      <div className='home_header'>

        <div className='home_headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>

        <div className='home_headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar className={classes.nop}/>
        </div>

      </div>

      <div className='home_body'>
        <img
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"}
          alt="Google's Official Logo"
          />

        <div className="home_inputContainer">
          <Search  />
        </div>

      </div>

    </div>
  );
}

export default Home;
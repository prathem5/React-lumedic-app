import React, { Component } from 'react';
import './App.css';
import { Button, Column, Content } from 'carbon-components-react';
import Header from './components/molecules/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/organism/';
import { createUseStyles } from 'react-jss';
import { color, flex, flexDirection, flexGrow, maxWidth } from 'styled-system';

const styles = createUseStyles({
  bxContainer:{
    margin: {
      top: '0',
      right: 'auto',
      bottom: 0,
      left: 'auto'
    },
    maxWidth:'800px',
    backgroundColor:'#a8a8a8'
  },
   

    Container:{
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      backgroundColor:'#a8a8a8'

    }
    
})


const App = () => {
  const classes = styles()
  return (
    <div>
  <Header />
  <div className={classes.Container}>
  <Content className ={classes.bxContainer}>
  <Switch>
  <Route exact path="/" component={LandingPage} />
  
</Switch>
  </Content>
  </div>
  </div>
  );

}

export default App;

import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import LumedicHeader from './components/molecules/Header/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/page/LandingPage/LandingPage';
import { createUseStyles } from 'react-jss';

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
  <LumedicHeader />
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

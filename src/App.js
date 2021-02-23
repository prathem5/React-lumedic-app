import React from 'react';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import LumedicHeader from './components/molecules/Header/Header';
import LandingPage from './components/page/LandingPage/LandingPage';

const styles = createUseStyles({
  bxContainer: {
    margin: {
      top: '0',
      right: 'auto',
      bottom: 0,
      left: 'auto',
    },
    padding:0,
    maxWidth: '800px',
    backgroundColor: '#a8a8a8',
  },

  Container: {
   
    backgroundColor: '#a8a8a8',

  },
 


});

const App = () => {
  const classes = styles();
  return (
    <div>
      <LumedicHeader />
      <div className={classes.Container}>
        <Content className={classes.bxContainer}>
          <Switch>
            <Route exact path="/" component={LandingPage} />

          </Switch>
        </Content>
      </div>
    </div>
  );
};

export default App;

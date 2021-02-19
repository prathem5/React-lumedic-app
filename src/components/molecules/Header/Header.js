import React from 'react';

import {
  Header,
  HeaderName,

} from 'carbon-components-react';

import Logo from './Logo';
import {createUseStyles} from 'react-jss';

const styles =createUseStyles({
  logo:{
    marginLeft:'1.5rem'
  }
});

const LumedicHeader = () => {
  const classes = styles();

  return (
  <div className="container">
    <span />
    <Header style={{ backgroundColor: '#f4f4f4', border: 0 }}>
      <div className={classes.logo}>
      <Logo/>
      </div>
      <HeaderName style={{ color: '#161616' }} href="#" prefix="">
        Lumedic
      </HeaderName>
    </Header>
  </div> 
  );
  };

export default LumedicHeader;

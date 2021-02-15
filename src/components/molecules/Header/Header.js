import React from 'react';
import {
    AppSwitcher20,
    Notification20,
    UserAvatar20,
  } from '@carbon/icons-react';
import {
  Header,
  HeaderName,
  
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import lumedic from './lumedic.svg'
import Logo from './Logo';

const TutorialHeader = () => (
  <div className="container">
    <span>
    <Logo/>
    </span>
    <Header style={{backgroundColor:'#f4f4f4',border:0}} >
      <HeaderName style ={{color:'#161616'}}href="#" prefix="">
        Lumedic
      </HeaderName>
    </Header>
  </div>
);

export default TutorialHeader;
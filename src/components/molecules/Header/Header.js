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

import LumedicLogo from './Logo';

const LumedicHeader = () => (
  <div className="container">
    <span>
   
    </span>
    <Header style={{backgroundColor:'#f4f4f4',border:0}} >
 <LumedicLogo/>
      <HeaderName style ={{color:'#161616'}}href="#" prefix="">
        Lumedic
      </HeaderName>
    </Header>
  </div>
);

export default LumedicHeader;
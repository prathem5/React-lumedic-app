import React from 'react';
import {

  Button,
  TextInput,
  Form,
  Select,
  SelectItem,
  Grid,
  Row,
  Column,
 
 
} from 'carbon-components-react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../molecules/ProgressBar/ProgressBar';
import States from '../atom/States';
import name from 'react-hook-form';

const styles = createUseStyles({
  contentWrapper: {
    paddingTop:'10rem',
    maxWidth:'100%',
    minHeight: ' calc(100% - 82)',
    
  }
 ,
 formContainer:{
   padding:{
     top: 40,
     right: 40,
     bottom:40,
     left:40

   },
   maxWidth:'100%',
   backgroundColor:'#e0e0e0   '
   
 },
 dexcriptionText:{
  fontWeight:'800',
  fontSize : '0.875rem',
   
   lineHeight:'1.25rem',
   letterSpacing:0.16
 },
 pageHeading:{
   fontSize:'2rem',
   fontWeight:'400',
   lineHeight:'2.5rem',
   letterSpacing:0.16,
   paddingTop:' 4rem',
   paddingBottom:'3rem',
   fontFamily:'Victor'
 },

 infoDescription:{
  
 fontSize : '0.875rem',
 
  lineHeight:'1.25rem',
  letterSpacing:0.16

 }
} );






const LandingPage = () => {
  const classes = styles(); 
  
  return (
  
    <div  className={classes.contentWrapper}>
      <div className={classes.pageHeading} >
        <h1>Enter your personal information</h1>
   </div>
   <ProgressBar/>
   
      <div className ={classes.formContainer}>
      <div> 
      <label className= {classes.dexcriptionText} style={{fontWeight: ''}} >Please enter the same information you provided in your Providence health system medical record.</label>
      </div>
      <div  style={{paddingTop: '2rem'}}> 
      <label className={classes.infoDescription}>The information you provide on this page is used to locate your record from your health system for the
         purpose of issuing your vaccine records to your mobile device. By providing your mobile number you are consenting 
         to be contacted regarding the availability of your vaccine records. Your mobile number will not be used for mobile
          marketing, and messaging or data charges may be imposed by your carrier.</label>
          </div>   
  <Form>
    <Grid>
      
  <Row  style={{paddingTop: '2rem'}}>
        
  <Column >
    <TextInput
   
      id="test2"
      invalidText="Invalid error message."
      labelText="FirstName"
      placeholder="Jhon"
      onchange={(e) => {
        if
      }}
      
      
    />
</Column>
  <Column >
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="LastName"
      placeholder="Doe"
      backgroundColor='#e0e0e0'
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
      
  <Column >
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Date of Birth"
      placeholder="DD/MM/YYYY"
    />
</Column>
  <Column >
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Social Security Number (Last 4 Digits, optional)"
      placeholder="####"
    />
  </Column>
  </Row>
  <div style={{paddingTop: '2rem'}}>
    
  <span style={{fontSize:'.75rem'}}>Mobile Number</span>  
  
  <Row >
  
  <Column style={{lineHeight:'0',}}>  
  
    <TextInput
    
      id="test2"
      invalidText="Invalid error message."
      labelText="To receive text messages and download our mobile application"
      placeholder="(###)###-###"
    />
</Column>
  <Column style={{paddingTop:'1rem'}}>
    
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Email"
      placeholder="you@mail.com"
     

    />
  </Column>
  </Row>
  </div>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address"
    
      placeholder="Primary Street Address"
    />
</Column>
  <Column>
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address 2 (optional)"
      
      placeholder="Unit #, Apt, Suite"
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="City"
      placeholder="Seatle"
    />
</Column>
<Column className="bx--column" >
  <Row>
    <Column>
    <Select
      defaultValue="placeholder-item"
      id="select-1"
      invalidText="This is an invalid error message."
      labelText="State"
    >
     {States.map((statename) =>
        <SelectItem key={statename.abbr}
        text={statename.abbr}
        value={statename.name}
      />
     )}
     
     
    </Select>
    </Column>
  

  <Column>
  <TextInput
      id="test2"
      invalidText="Invalid error message."
      labelText="Postal Code"
      placeholder="#####"
    />
    </Column>
    </Row>
  </Column>
  
  </Row>
  
  <Row style={{paddingTop: '2rem'}}> 
    <Button
    style={{marginLeft:'1rem'}}
    kind="secondary"
    tabIndex={0}
    type="submit"
  >
    Continue
  </Button></Row>
  </Grid>
 
</Form>


  </div>
</div>
    );
};

export default LandingPage;
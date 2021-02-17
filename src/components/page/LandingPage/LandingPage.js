import React,{ useState } from 'react';
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
import ProgressBar from '../../molecules/ProgressBar/ProgressBar';
import States from '../../atom/States';
import FormHandler from '../../classes/FormHandler';
import FormSubmit from '../../classes/FormSubmit';
import {useForm} from 'react-hook-form';


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
  const [validity ,setValidity] =    useState({

    firstName:true,
      lastName:true,
      dateOfBirth:true,
      email:true,
      last4SSN:true,
      phoneNumber:true,
      addressLine1:true,
      addressLine2:true,
      city:true,
      state:true,
      zip:true,
      
      
      });
  //   //   const[errors,setErrors] = useState({});

  //     const handleChange = event =>  {
  //       const {name,value} =  event.target;
  //      setValues({
  //        ...Values,
  //        [name]:value
  //      });  
  //    };
  const {handleChange,Values} = FormHandler({});
  const {submit} =FormSubmit();
  
  // const [validity ,setvalidity] =useState(false)
   

  const classes = styles(); 
 const {register,errors} =useForm();

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
  <Form  onSubmit={submit}>
    <Grid>
      
  <Row  style={{paddingTop: '2rem'}}>
        
  <Column >
    <TextInput
      ref={register({required : true} )}
      
      name ="firstName"
      id="test2"
      onChange={handleChange}
     value={Values.firstName}
      invalidText="Invalid error message."
      labelText="FirstName"
      placeholder="Jhon"
      // onFocus ={()=>{
      //   setvalidity(false);
      // }}
      // onBlur={(e)=>{
      //   if(e.target.value.length ==0){
      //     setvalidity(true);
          
      //   }
      //   else{setvalidity(false);
      //   }
      // }}
    />
    
</Column>
  <Column >
  <TextInput
   ref={register({required : true} )}
   name ="lastName"
      id="test2"
      onChange={handleChange}
      value={Values.lastName}
      invalidText="Invalid error message."
      labelText="LastName"
      placeholder="Doe"
     
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
      
  <Column >
    <TextInput
     ref={register({required : true} )}
     name ="dateOfBirth"
      id="test2"
      invalidText="Invalid error message."
      labelText="Date of Birth"
      placeholder="DD/MM/YYYY"
      onChange={handleChange}
      value={Values.dateOfBirth}
    />
</Column>
  <Column >
  <TextInput
   ref={register({required : true} )}
   name ="last4SSN"
      id="test2"
      invalidText="Invalid error message."
      labelText="Social Security Number (Last 4 Digits, optional)"
      placeholder="####"
      onChange={handleChange}
      value={Values.last4SSN}
    />
  </Column>
  </Row>
  <div style={{paddingTop: '2rem'}}>
    
  <span style={{fontSize:'.75rem'}}>Mobile Number</span>  
  
  <Row >
  
  <Column style={{lineHeight:'0',}}>  
  
    <TextInput
     ref={register({required : true} )}
     name ="phoneNumber"
      id="test2"
      invalidText="Invalid error message."
      labelText="To receive text messages and download our mobile application"
      placeholder="(###)###-###"
      onChange={handleChange}
      value={Values.phoneNumber}
    />
</Column>
  <Column style={{paddingTop:'1rem'}}>
    
  <TextInput
   ref={register({required : true} )}
   name ="email"
      id="test2"
      invalidText="Invalid error message."
      labelText="Email"
      placeholder="you@mail.com"
      onChange={handleChange}
      value={Values.email}
     

    />
  </Column>
  </Row>
  </div>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
     ref={register({required : true} )}
     name ="addressLine1"
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address"
    
      placeholder="Primary Street Address"
      onChange={handleChange}
      value={Values.addressLine1}
    />
</Column>
  <Column>
  <TextInput
   ref={register({required : false} )}
   name ="addressLine2"
      id="test2"
      invalidText="Invalid error message."
      labelText="Mailing Address 2 (optional)"
      
      placeholder="Unit #, Apt, Suite"
      onChange={handleChange}
      value={Values.addressLine2}
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
     ref={register({required : true} )}
     name ="city"
      id="test2"
      invalidText="Invalid error message."
      labelText="City"
      placeholder="Seatle"
      onChange={handleChange}
      value={Values.city}
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
      onChange={handleChange}
        value={Values.state}
        name="state"
    >
     {States.map((statename) =>
        <SelectItem key={statename.abbr}
        text={statename.abbr}
        value={statename.abbr}
        
      />
     )}
     
     
    </Select>
    </Column>
  

  <Column>
  <TextInput
   ref={register({required : true} )}
     name ="zip"
      id="test2"
      invalidText="Invalid error message."
      labelText="Postal Code"
      placeholder="#####"
      onChange={handleChange}
      value={Values.zip}
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
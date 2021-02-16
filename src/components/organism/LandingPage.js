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
import ProgressBar from '../molecules/ProgressBar/ProgressBar';
import States from '../atom/States';
import {useForm} from 'react-hook-form';
import axios from 'axios';


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
  const [values,setValues] =useState({

    firstName:"",
  lastName:"",
  dateOfBirth:"",
  email:"",
  last4SSN:"",
  phoneNumber:"",
  addressLine1:"",
  addressLine2:"",
  city:"",
  stateList:"",
  zip:"",
  credName:"COVID-19 Vaccine"
  
  })
  // const [validity ,setvalidity] =useState(false)
   const {register, handleSubmit,errors} = useForm();

  const classes = styles(); 
 const handleChange = event =>  {
   const {name,value} =  event.target;
  setValues({
    ...values,
    [name]:value
  });
  
};
  const submit = event => {
    event.preventDefault();
    console.log(values);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
              firstName:"test",
               lastName:"test",
               dateOfBirth:"12/12/1990",
           email:"positivetestuser@lumedic.io",
           last4SSN:"1234",
             phoneNumber:"8469767964",
        
             addressLine1:"test",
               addressLine2:"test",
               city:"test",
               state:"WA",
               zip:"12345",
               credName:"COVID-19 Vaccine"
               })
     
  };
  fetch('https://api.lumedic.id/portal/v1/patient/validate', requestOptions)
      .then(response => { 
        console.log(response);
});
    
}
    try{
//     //axios.post
//     console.log(values);
//     axios.post('https://api.lumedic.id/portal/v1/patient/validate',{
//       firstName:"test",
//       lastName:"test",
//       dateOfBirth:"12/12/1990",
//       email:"positivetestuser@lumedic.io",
//       last4SSN:"1234",
//       phoneNumber:"8469767964",
//       addressLine1:"test",
//       addressLine2:"test",
//       city:"test",
//       state:"WA",
//       zip:"12345",
//       credName:"COVID-19 Vaccine"
//       })
//     .then(res => {
//       console.log(res);
//       console.log(res.data);    
//     })
  }

catch(e){
  console.log(e);

  } 
    

  
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
      value={values.firstName}
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
     {errors.firstname && ""}
   
</Column>
  <Column >
  <TextInput
   ref={register({required : true} )}
   name ="lastName"
      id="test2"
      onChange={handleChange}
      value={values.lastName}
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
      value={values.dateOfBirth}
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
      value={values.last4SSN}
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
      value={values.phoneNumber}
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
      value={values.email}
     

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
      value={values.addressLine1}
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
      value={values.addressLine2}
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
      value={values.city}
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
        value={values.stateList}
        name="stateList"
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
   ref={register({required : true} )}
     name ="zip"
      id="test2"
      invalidText="Invalid error message."
      labelText="Postal Code"
      placeholder="#####"
      onChange={handleChange}
      value={values.zip}
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
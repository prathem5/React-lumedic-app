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
import {useForm} from 'react-hook-form';
import {PatientValidate} from '../../classes/LumedicApi/PatientValidateApi'


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
 textInput:{
   border:' 3px ridge red'
 },

 infoDescription:{
  
 fontSize : '0.875rem',
 
  lineHeight:'1.25rem',
  letterSpacing:0.16

 }
} );

const LandingPage = () => {
  const [Values ,setValues] =    useState({

    firstName:"",
      lastName:"",
      dateOfBirth:"",
      email:"",
      last4SSN:"",
      phoneNumber:"",
      addressLine1:"",
      addressLine2:"",
      city:"",
      state:"",
      zip:"",
      credName:"COVID-19 Vaccine"
      
      });
  const [invalidity ,setinValidity] =    useState({

    firstName:false,
      lastName:false,
      dateOfBirth:false,
      email:false,
      last4SSN:false,
      phoneNumber:false,
      addressLine1:false,
      addressLine2:false,
      city:false,
      state:false,
      zip:false
      
      
      
      });
     
    const[errorText,setErrorText] = useState({
      
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    email:"",
    last4SSN:"",
    phoneNumber:"",
    addressLine1:"",
    addressLine2:"",
    city:"",
    state:"",
    zip:"",
    });

      const handleChange = e =>  {
        const {name,value} =  e.target;
       setValues({
         ...Values,
         [name]:value
       }); 
       if(e.target.id === 'firstName'){
       if(e.target.value === ''){
        setinValidity({...invalidity, [e.target.id]: true});
        setErrorText({...errorText,[e.target.id]:'FirstName is Required'})
      }else{
        setinValidity({...invalidity, [e.target.id]: false})
      }
      
    }
    if(e.target.id === 'lastName'){
      if(e.target.value === ''){
       setinValidity({...invalidity, [e.target.id]: true})
       setErrorText({...errorText,[e.target.id]:'LastName is Required'})
     }
     else{
      setinValidity({...invalidity, [e.target.id]: false})
    }
    }
   
   if(e.target.id === 'dateOfBirth'){
    if(e.target.value === '' || e.target.value !=('/d{2}\//d{2}\//d{4}')){
     setinValidity({...invalidity, [e.target.id]: true})
     setErrorText({...errorText,[e.target.id]:'Please enter the correct date format'})
   }else{
    setinValidity({...invalidity, [e.target.id]: false})
  }
   
 }
 if(e.target.id === 'last4SSN'){
  if(e.target.value === '' || e.target.value !=('/d{3}')){
   setinValidity({...invalidity, [e.target.id]: true})
   setErrorText({...errorText,[e.target.id]:'SSN is Required'})
 }else{
  setinValidity({...invalidity, [e.target.id]: false})
}
 
}
if(e.target.id === 'phoneNumber'){
  if(e.target.value === ''||e.target.value != ('([^\d])\d{9}([^\d])')){
   setinValidity({...invalidity, [e.target.id]: true})
   setErrorText({...errorText,[e.target.id]:'Mobile Number  is Required'})
 }else{
  setinValidity({...invalidity, [e.target.id]: false})
}

}
if(e.target.id === 'email'){
  if(e.target.value === '' || e.target.value != ('([a-z0-9\.]+@[a-z]+\.[a-z]+)')){
   setinValidity({...invalidity, [e.target.id]: true})
   setErrorText({...errorText,[e.target.id]:'Please enter valid email in format: you@mail.com'})
 }else{
  setinValidity({...invalidity, [e.target.id]: false})
}
 
}

if(e.target.id === 'addressLine1'){
  if(e.target.value === ''){
   setinValidity({...invalidity, [e.target.id]: true})
   setErrorText({...errorText,[e.target.id]:'Address is Required'})
 }else{
  setinValidity({...invalidity, [e.target.id]: false})
}
 
}
if(e.target.id === 'city'){
  if(e.target.value === ''){
   setinValidity({...invalidity, [e.target.id]: true})
 }else{
  setinValidity({...invalidity, [e.target.id]: false})
}
 
}
if(e.target.id === 'zip' || e.target.value !=('/d{4}') ){
  if(e.target.value === ''){
   setinValidity({...invalidity, [e.target.id]: true})
 }
 else{
  setinValidity({...invalidity, [e.target.id]: false})
}
 
}
}
     

  //  const validateInfo=(event)=>{
   
  //    event.preventDefault();
  //    if(event.target.value ==''){
  //     setinValidity({...invalidity,[name]:true});
  //     setErrorText({...errorText,[name]:event.target.labelText+"required"
      
  //     })
  //    }
  // }
   
  
  // const [invalidity ,setvalidity] =useState(false)
   

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
  <Form  onSubmit={(event) => {
    event.preventDefault();
   console.log(invalidity)
    // event.preventDefault(PatientValidate(Values))
    }}>
    <Grid>
      
  <Row  style={{paddingTop: '2rem'}}>
        
  <Column >
    <TextInput
      ref={register({required : true} )}
     onFocus={()=> ""}
      name ="firstName"
      id="firstName"
    //   onChange={handleChange}
    // value={Values.firstName}
      labelText="FirstName"
      placeholder="Jhon"
      onBlur={handleChange}
       invalid={invalidity.firstName}
      invalidText={errorText.firstName}
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
      id="lastName"
      onBlur={handleChange}
      // value={Values.lastName}
      invalid={invalidity.lastName}
      invalidText={errorText.lastName}
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
      id="dateOfBirth"
      invalid={invalidity.dateOfBirth}
      invalidText={errorText.dateOfBirth}
      labelText="Date of Birth"
      placeholder="DD/MM/YYYY"
      onBlur={handleChange}
      
    />
</Column>
  <Column >
  <TextInput
   ref={register({required : true} )}
   name ="last4SSN"
      id="last4SSN"
      invalid={invalidity.last4SSN}
      invalidText={errorText.last4SSN}
      labelText="Social Security Number (Last 4 Digits, optional)"
      placeholder="####"
      onBlur={handleChange}
      
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
      id="phoneNumber"
      invalid={invalidity.phoneNumber}
      invalidText={errorText.phoneNumber}
      labelText="To receive text messages and download our mobile application"
      placeholder="(###)###-###"
      onBlur={handleChange}
    />
</Column>
  <Column style={{paddingTop:'1rem'}}>
    
  <TextInput
   ref={register({required : true} )}
   name ="email"
      id="email"
      invalid={invalidity.email}
      invalidText={errorText.email}
      labelText="Email"
      placeholder="you@mail.com"
      onBlur={handleChange}
     

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
      id="addressLine1"
      invalid={invalidity.addressLine1}
      invalidText={errorText.addressLine1}
      labelText="Mailing Address"
    
      placeholder="Primary Street Address"
      onBlur={handleChange}
    />
</Column>
  <Column>
  <TextInput
   ref={register({required : false} )}
   name ="addressLine2"
      id="addressLine2"
      invalid={invalidity.addressLine2}
      invalidText={errorText.addressLine2}
      labelText="Mailing Address 2 (optional)"
      
      placeholder="Unit #, Apt, Suite"
      blur={handleChange}
    />
  </Column>
  </Row>
  <Row  style={{paddingTop: '2rem'}}>
        <div></div>
  <Column>
    <TextInput
     ref={register({required : true} )}
     name ="city"
      id="city"
      invalid={invalidity.city}
      invalidText={errorText.city}
      labelText="City"
      placeholder="Seatle"
      onBlur={handleChange}
    />
</Column>
<Column className="bx--column" >
  <Row>
    <Column>
    <Select
      defaultValue="placeholder-item"
      id="state"
      invalid={invalidity.state}
      invalidText={errorText.state}
      labelText="State"
      onBlur={handleChange}
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
      id="zip"
      invalid={invalidity.zip}
      invalidText={errorText.zip}
      labelText="Postal Code"
      placeholder="#####"
      onBlur={handleChange}
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
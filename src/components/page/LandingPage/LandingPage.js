import React, { useState } from 'react';
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
import { PatientValidate } from '../../classes/LumedicApi/PatientValidateApi';

const styles = createUseStyles({
  contentWrapper: {
    paddingTop: '10rem',
    maxWidth: '100%',
    minHeight: ' calc(100% - 82)',

  },

gridClass:{
  
  paddingRight:0,
  paddingLeft:0,
 
},
  formContainer: {
    padding: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40,
    
    },
    
    maxWidth: '100%',
    backgroundColor: '#e0e0e0   ',

  },
  dexcriptionText: {
    fontWeight: '800',
    fontSize: '0.875rem',
    paddingBottom:'2rem',

    lineHeight: '1.25rem',
    letterSpacing: 0.16,
  },
  pageHeading: {
    fontSize: '2rem',
    fontWeight: '400',
    lineHeight: '2.5rem',
    letterSpacing: 0.16,
    paddingTop: ' 4rem',
    paddingBottom: '3rem',
    fontFamily: 'Victor',
  },
  textInput: {
    border: ' 3px ridge red',
  },

  infoDescription: {

    fontSize: '0.875rem',

    lineHeight: '1.25rem',
    letterSpacing: 0.16,

  },
  formRow:{
    paddingTop:'2rem'
  },

  '@media screen and (max-width: 671px)':{
    formContainer: {
    padding:0,
  
  },
  formRow:{
    padding:{
      top:'0.75rem' ,
      right: 10,
      bottom: 0,
      left: 20,
    }
  },
  formCol:{
    paddingTop:24

  },
  infoDescription:{
    margin:{
      top:'1rem' ,
      right: '1rem',
      bottom: 0,
      left: '1rem',

    },
    fontFamily:'brown',
    fontSize:'1rem'
  },
  dexcriptionText:{
    margin:{
      top:'1rem' ,
      right: '1rem',
      bottom: 0,
      left: '1rem',

    },
    fontFamily:'brown',
    fontSize:'1rem'

  },
  pageHeading:{
    fontSize: '2rem',
    fontWeight: '400',
    lineHeight: '2.5rem',
    letterSpacing: 0.16,
    paddingTop: ' 4rem',
    paddingBottom: '3rem',
    fontFamily: 'Victor',
    paddingLeft:'1rem'
    
  },
  headContent:{
    paddingLeft:'1rem',
    paddingRight:'1rem',
    backgroundColor:'blue'
  }
 
  },
});

const LandingPage = () => {
  const [Values, setValues] = useState({

    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    last4SSN: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    credName: 'COVID-19 Vaccine',

  });
  const [invalidity, setinValidity] = useState({

    firstName: undefined,
    lastName: undefined,
    dateOfBirth: undefined,
    email: undefined,
    last4SSN: undefined,
    phoneNumber: undefined,
    addressLine1: undefined,
    addressLine2: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
   

  });
  const isFormValid =()=>{
    // return this.firstName + this.lastName + this.dateOfBirth + this.phoneNumber + this.last4SSN + this.addressLine1 + this.zip + this.city
    // + this.email  === 10;
    const result = Object.values(invalidity).filter(val => val === false ).length === 10;
    return result;
  };

  const [errorText, setErrorText] = useState({

    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    last4SSN: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
  });
  const regex={
    dateOfBirth:/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$/,
    phoneNumber:/[0-9]{12}/,
    email:/([a-z0-9.]+@[a-z]+[.][a-z]+)/,
    postal:/[0-9]{5}/
  };
  const handleFocus = (e) => {
   
    setinValidity({ ...invalidity, [e.target.id]: false });
  };


 const handleBlur=(e)=>{

    if (e.target.id === 'firstName') {
      if ( e.target.value ===''||e.target.value === undefined) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'FirstName is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'lastName') {
      if (e.target.value === undefined||e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'LastName is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }

    if (e.target.id === 'dateOfBirth') {
      if (e.target.value === undefined||e.target.value === '' ) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Please enter the correct date format' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'last4SSN') {
      if (e.target.value === undefined||e.target.value === ''||Values.last4SSN.length < 4) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'SSN is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }


    if (e.target.id === 'phoneNumber') {
   
     
      if ( Values.phoneNumber.length < 10 ||  Values.phoneNumber ===''|| Values.phoneNumber === undefined ){
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Please enter 10 digit Mobile number' });
      }
        else{
        console.log( Values.phoneNumber.length == 10  );
        setinValidity({ ...invalidity, [e.target.id]: false });
       //  setValues({...Values,
         //   [e.target.id]:'('+ Num[0]+Num[1]+Num[2]+')'+Num[3]+Num[4]+Num[5]+'-'+Num[6]+Num[7]+Num[8]+Num[9]});
        }
      
    }
    

    if (e.target.id === 'email') {
      if (e.target.value === '' ||e.target.value === undefined ||!(regex.email.test(e.target.value)) ) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText(
    { ...errorText, [e.target.id]: 'Please enter valid email in format: you@mail.com' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }

    if (e.target.id === 'addressLine1') {
      if (e.target.value === ''||e.target.value === undefined) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Address is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'city') {
      if (e.target.value === ''||e.target.value === undefined) {
        setinValidity({ ...invalidity, [e.target.id]: true });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'zip' || e.target.value === undefined) {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
   

 };
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    if (name === 'phoneNumber'){
      const replaceText = value.replace(/\D+/g, '');
       
    setValues({
      ...Values,
      [name]: replaceText,
    });
    }
    else{ 
   
    setValues({
      ...Values,
      [name]: value,
    });
  } 
  };
  

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

  return (

    <div className={classes.contentWrapper}>
      
        <div className={classes.pageHeading}>Enter your personal information</div>

        <div className={classes.headContent}>
      
      <ProgressBar />
      
      </div>
      <div className={classes.formContainer}>
        <div className={classes.dexcriptionText} >
          <label >
            Please enter the same information you provided in your Providence 
            health system medical record.</label>
        </div>
        <div  className={classes.infoDescription} >
          <label>
            The information you provide on this page is used to locate your record 
            from your health system for the
            purpose of issuing your vaccine records to your mobile device.
             By providing your mobile number you are consenting
            to be contacted regarding the availability of your vaccine records.
             Your mobile number will not be used for mobile
            marketing, and messaging or data charges may be imposed by your carrier.
          </label>
        </div>
        <Form disabled ={isFormValid}
        onSubmit={(event) => {
          console.log('clicked');
          event.preventDefault(PatientValidate(Values));
        }}>
          <Grid className={classes.gridClass}>
            <Row className= {classes.formRow}>
              <Column sm={4} md={4  } lg={8} className= {classes.formCol}>
                <TextInput
                 required
                  onChange={handleChange}
                  name="firstName"
                  id="firstName"
                  onFocus={handleFocus}
     value={Values.firstName}
                  labelText="FirstName"
                  placeholder="Jhon"
                  onBlur={handleBlur}
                  invalid={invalidity.firstName}
                  invalidText={errorText.firstName}
                />

              </Column>
              <Column sm={4} md={4} lg={8}  className= {classes.formCol}>
                <TextInput
                onChange={handleChange}
                required
                  name="lastName"
                  id="lastName"
                  onBlur={handleBlur}
      // value={Values.lastName}
                  invalid={invalidity.lastName}
                  invalidText={errorText.lastName}
                  labelText="LastName"
                  placeholder="Doe"
                  onFocus={handleFocus}
                />
              </Column>
            </Row>
            <Row className= {classes.formRow}>

              <Column  sm={4} md={4} lg={8}  className= {classes.formCol}>
                <TextInput
                type= 'text'
                onChange={handleChange}
                required
                  name="dateOfBirth"
                  id="dateOfBirth"
                  invalid={invalidity.dateOfBirth}
                  invalidText={errorText.dateOfBirth}
                  labelText="Date of Birth"
                  placeholder="DD/MM/YYYY"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </Column>
              <Column  sm={4} md={4} lg={8}  className= {classes.formCol}>
                <TextInput
                  type ='number'
                  
                  name="last4SSN"
                  id="last4SSN"
                  invalid={invalidity.last4SSN}
                  invalidText={errorText.last4SSN}
                  labelText="Social Security Number (Last 4 Digits, optional)"
                  placeholder="####"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </Column>
            </Row>
            <div className= {classes.formRow}>

              <span style={{ fontSize: '.75rem' }}>Mobile Number</span>

              <Row>

                <Column  sm={4} md={4} lg={8}  className= {classes.formCol}>

                  <TextInput
             required
                    name="phoneNumber"
                    id="phoneNumber"
                    type='tel'
                    maxLength= '10'
                    pattern="[0-9]{10}"
                    invalid={invalidity.phoneNumber}
                    invalidText={errorText.phoneNumber}
                    labelText="To receive text messages and download our mobile application"
                    placeholder="(###)###-####"
                     onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={Values.phoneNumber}
                  />
                </Column>
                <Column  sm={4} md={4} lg={8}   className= {classes.formCol}
                style={{paddingTop:'1rem'}}>

                  <TextInput
                  onChange={handleChange}
                  required
                    name="email"
                    id="email"
                    invalid={invalidity.email}
                    invalidText={errorText.email}
                    labelText="Email"
                    placeholder="you@mail.com"
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  />
                </Column>
              </Row>
            </div>
            <Row className= {classes.formRow}>
              <div />
              <Column  sm={4} md={4} lg={8}  className= {classes.formCol}>
                <TextInput
                onChange={handleChange}
                required
                  name="addressLine1"
                  id="addressLine1"
                  invalid={invalidity.addressLine1}
                  invalidText={errorText.addressLine1}
                  labelText="Mailing Address"

                  placeholder="Primary Street Address"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </Column>
              <Column  sm={4} md={4} lg={8}  className= {classes.formCol}>
                <TextInput
                onChange={handleChange}
                required
                  name="addressLine2"
                  id="addressLine2"
                  invalid={invalidity.addressLine2}
                  invalidText={errorText.addressLine2}
                  labelText="Mailing Address 2 (optional)"

                  placeholder="Unit #, Apt, Suite"
                  onBlur={handleBlur}
                />
              </Column>
            </Row>
            <Row className= {classes.formRow}>
              <div />
              <Column  sm={4} md={4} lg={8 }  className= {classes.formCol}>
                <TextInput
                onChange={handleChange}
                required
                  name="city"
                  id="city"
                  invalid={invalidity.city}
                  invalidText={errorText.city}
                  labelText="City"
                  placeholder="Seatle"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
              </Column>
              <Column className= {classes.formCol}>
                <Row >
                  <Column>
                    <Select
                    onChange={handleChange}
                      defaultValue="placeholder-item"
                      id="state"
                      invalid={invalidity.state}
                      invalidText={errorText.state}
                      labelText="State"
                      onBlur={handleBlur}
                      name="state"
                      onFocus={handleFocus}
                      required
                    >
                      {States.map((statename) => (
                        <SelectItem
                          key={statename.abbr}
                          text={statename.abbr}
                          value={statename.abbr}
                        />
                      ))}

                    </Select>
                  </Column>

                  <Column  className= {classes.formCol} >
                    <TextInput
                    onChange={handleChange}
                      required
                      name="zip"
                      id="zip"
                      invalid={invalidity.zip}
                      invalidText={errorText.zip}
                      labelText="Postal Code"
                      placeholder="#####"
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                    />
                  </Column>
                </Row>
              </Column>

            </Row>

            <Row className= {classes.formRow}>
              <Button
                style={{ marginLeft: '1rem' }}
                kind="secondary"
                tabIndex={0}
                disabled ={!isFormValid()}
                
                type="submit"
              >
                Continue
              </Button>
            </Row>
          </Grid>

        </Form>

      </div>
    </div>
  );
};

export default LandingPage;

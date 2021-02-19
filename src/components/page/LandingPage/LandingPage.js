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

    firstName: false,
    lastName: false,
    dateOfBirth: false,
    email: false,
    last4SSN: false,
    phoneNumber: false,
    addressLine1: false,
    addressLine2: false,
    city: false,
    state: false,
    zip: false,

  });

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
  const click = (e) => {
    setinValidity({ ...invalidity, [e.target.id]: false });
  };
 const handleBlur=(e)=>{
   
  
  

    if (e.target.id === 'firstName') {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'FirstName is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'lastName') {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'LastName is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }

    if (e.target.id === 'dateOfBirth') {
      if (e.target.value === '' || e.target.value !=regex.dateOfBirth) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Please enter the correct date format' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'last4SSN') {
      if (e.target.value === '' || e.target.value != ('([0-9]{4})')) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'SSN is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }


    if (e.target.id === 'phoneNumber') {
      let Num=e.target.value;
      console.log(':'+Num[2]);
      console.log( Values.phoneNumber.length);
      if ( Values.phoneNumber.length >= 10 ){
        if( Values.phoneNumber.length > 10){
          console.log( "in" );
          setinValidity({ ...invalidity, [e.target.id]: true });
          setErrorText({ ...errorText, [e.target.id]: 'Please enter 10 digit Mobile number' });
        }
        else{
        console.log( Values.phoneNumber.length == 10  );
        setinValidity({ ...invalidity, [e.target.id]: false });
         setValues({...Values,
            [e.target.id]:'('+ Num[0]+Num[1]+Num[2]+')'+Num[3]+Num[4]+Num[5]+'-'+Num[6]+Num[7]+Num[8]+Num[9]});
        }
      
      }else if(Values.phoneNumber.length < 10){
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Please enter 10 digit Mobile number' });  
      }
      else if(Values.phoneNumber.length > 10 || Values.phoneNumber ===''){

        console.log( invalidity.phoneNumber);
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Please enter 10 digit Mobile number' });
      }
    }
    

    if (e.target.id === 'email') {
      if (e.target.value === '' || !regex.email.test(e.target.value)) {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText(
    { ...errorText, [e.target.id]: 'Please enter valid email in format: you@mail.com' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }

    if (e.target.id === 'addressLine1') {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
        setErrorText({ ...errorText, [e.target.id]: 'Address is Required' });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'city') {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }
    if (e.target.id === 'zip' || e.target.value != ('(\\d{5})')) {
      if (e.target.value === '') {
        setinValidity({ ...invalidity, [e.target.id]: true });
      } else {
        setinValidity({ ...invalidity, [e.target.id]: false });
      }
    }


 };
  const handleChange = (e) => {
    console.log();
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });

    
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
      <div className={classes.pageHeading}>
        <h1>Enter your personal information</h1>
      </div>
      <ProgressBar />
      <div className={classes.formContainer}>
        <div>
          <label className={classes.dexcriptionText} style={{ fontWeight: '' }}>
            Please enter the same information you provided in your Providence 
            health system medical record.</label>
        </div>
        <div style={{ paddingTop: '2rem' }}>
          <label className={classes.infoDescription}>
            The information you provide on this page is used to locate your record 
            from your health system for the
            purpose of issuing your vaccine records to your mobile device.
             By providing your mobile number you are consenting
            to be contacted regarding the availability of your vaccine records.
             Your mobile number will not be used for mobile
            marketing, and messaging or data charges may be imposed by your carrier.
          </label>
        </div>
        <Form onSubmit={(event) => {
          event.preventDefault(PatientValidate(Values));
        }}>
          <Grid>
            <Row style={{ paddingTop: '2rem' }}>
              <Column>
                <TextInput
                  onChange={handleChange}
                  name="firstName"
                  id="firstName"
                  onFocus={click}
    // value={Values.firstName}
                  labelText="FirstName"
                  placeholder="Jhon"
                  onBlur={handleBlur}
                  invalid={invalidity.firstName}
                  invalidText={errorText.firstName}
                />

              </Column>
              <Column>
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
                  onFocus={click}
                />
              </Column>
            </Row>
            <Row style={{ paddingTop: '2rem' }}>

              <Column>
                <TextInput
                type= 'date'
                onChange={handleChange}
                required
                  name="dateOfBirth"
                  id="dateOfBirth"
                  invalid={invalidity.dateOfBirth}
                  invalidText={errorText.dateOfBirth}
                  labelText="Date of Birth"
                  placeholder="DD/MM/YYYY"
                  onBlur={handleBlur}
                  onFocus={click}
                />
              </Column>
              <Column>
                <TextInput
                  type ='text'
                  maxLength= '4'
                  name="last4SSN"
                  id="last4SSN"
                  invalid={invalidity.last4SSN}
                  invalidText={errorText.last4SSN}
                  labelText="Social Security Number (Last 4 Digits, optional)"
                  placeholder="####"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onFocus={click}
                />
              </Column>
            </Row>
            <div style={{ paddingTop: '2rem' }}>

              <span style={{ fontSize: '.75rem' }}>Mobile Number</span>

              <Row>

                <Column style={{ lineHeight: '0' }}>

                  <TextInput
            
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
                    onFocus={click}
                    value={Values.phoneNumber}
                  />
                </Column>
                <Column style={{ paddingTop: '1rem' }}>

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
                    onFocus={click}
                  />
                </Column>
              </Row>
            </div>
            <Row style={{ paddingTop: '2rem' }}>
              <div />
              <Column>
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
                  onFocus={click}
                />
              </Column>
              <Column>
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
            <Row style={{ paddingTop: '2rem' }}>
              <div />
              <Column>
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
                  onFocus={click}
                />
              </Column>
              <Column className="bx--column">
                <Row>
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
                      onFocus={click}
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

                  <Column>
                    <TextInput
                    onChange={handleChange}
                      required
                      name="zip"
                      id="zip"
                      maxLength= '5'
                      invalid={invalidity.zip}
                      invalidText={errorText.zip}
                      labelText="Postal Code"
                      placeholder="#####"
                      onBlur={handleBlur}
                      onFocus={click}
                    />
                  </Column>
                </Row>
              </Column>

            </Row>

            <Row style={{ paddingTop: '2rem' }}>
              <Button
                style={{ marginLeft: '1rem' }}
                kind="secondary"
                tabIndex={0}

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

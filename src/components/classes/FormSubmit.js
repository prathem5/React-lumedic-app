import React from 'react';
import axios from 'axios';
import FormHandler from './FormHandler';

const FormSubmit = () => {
    const{Values}=FormHandler();
    
    const submit = (event) => {
     event.preventDefault();
      console.log(Values);
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json',
    //                  'Accept':'*/*' },
    //     body: JSON.stringify({
    //       "firstName":"test",
    //       "lastName":"test",
    //       "dateOfBirth":"12/12/1990",
    //       "email":"positivetestuser@lumedic.io",
    //       "last4SSN":"1234",
    //       "phoneNumber":"8469767964",
    //       "addressLine1":"test",
    //       "addressLine2":"test",
    //       "city":"test",
    //       "state":"WA",
    //       "zip":"12345",
    //       "credName":"COVID-19 Vaccine"
    //       }
    //       )
          
    // };
    // fetch('https://api-dev.lumedic.id/portal/v1/patient/validate', requestOptions)
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(e => console.error(e.message));
      
  
      
    console.log("api calling");
    
      axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate',Values)
      .then(res => {
        console.log('api called');
        console.log(res);
        console.log(res.data);    
      });
    }
    
    return {submit}
}

export default FormSubmit;

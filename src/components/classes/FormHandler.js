import  { useState } from 'react';
import axios from 'axios';


const FormHandler = () => {
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
    //   const[errors,setErrors] = useState({});

      const handleChange = event =>  {
        const {name,value} =  event.target;
       setValues({
         ...Values,
         [name]:value
       });  
     };
     const submit = (event) => {
      event.preventDefault();
       console.log(Values);
    
   
       
     console.log("api calling");
     
       axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate',Values)
       .then(res => {
         console.log('api called');
         console.log(res);
         console.log(res.data);    
       });
     }

    return{handleChange,Values };
};

export default FormHandler;


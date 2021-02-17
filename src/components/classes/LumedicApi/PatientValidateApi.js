import axios from 'axios';
 export function PatientValidate(Values)
 {
    axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate',Values)
    .then(res => {
      console.log('api called');
      console.log(res);
      console.log(res.data);    
    });
 }
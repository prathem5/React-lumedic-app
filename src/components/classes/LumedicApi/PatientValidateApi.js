import axios from 'axios';

function PatientValidate(Values) {
  console.log(Values);
   return axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate', Values);
    
}
export {
  PatientValidate,
};

 import {
     ProgressIndicator,
     ProgressStep
 } from 'carbon-components-react';
 import { createUseStyles } from 'react-jss';

 const styles = createUseStyles( {
    progressBarContainer:{
        paddingBottom:'2.5rem',
        borderTop:'3px solid transperent'
         },

 })

const ProgressBar = () => {
    const classes = styles();
    return(
        <div className={classes.progressBarContainer}>
    <ProgressIndicator
    currentIndex={1}
    >
      <ProgressStep
      complete
      label="Welcome"/>
      <ProgressStep
      current
       label="Patient Validation"/>
      <ProgressStep
       label="Review"/>
    </ProgressIndicator>
    </div>
    )
}
export default ProgressBar;
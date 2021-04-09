import { Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../reusables/TimerControls';
import WorkoutStepper from '../workout-stepper/WorkoutStepper';


function Home(){ 
    return (
<div>
    <Typography
    align="center"
    variant="h5"
    gutterBottom>
    No Workout in Progress.
    </Typography>

  <Typography
    align="center"
    variant="h5"
    gutterBottom>
    Select or create one in "My Workouts"
    </Typography>
  
   
  <TimerControls></TimerControls>
  

 </div>

//<WorkoutStepper></WorkoutStepper>
);   
}

export default Home;  
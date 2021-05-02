import { Button, Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/timer-controls/DesktopTimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';



export default function Home() {
  return (
    <div>
      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        No Workout in Progress, select or create one in the "My Workouts" page
      </Typography>
      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        Round
      </Typography>
      <TimerControls></TimerControls>
      <WorkoutStepper></WorkoutStepper>
      <Button variant="contained" color="primary" onClick={() => console.log(process.env.REACT_APP_HOSTNAME)}>
        {process.env.REACT_APP_HOSTNAME} 
      </Button>
    </div>
  );
}

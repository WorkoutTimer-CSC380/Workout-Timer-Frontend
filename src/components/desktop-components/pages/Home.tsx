import { Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/TimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';

function Home() {
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
      <TimerControls seconds={24}></TimerControls>
      <WorkoutStepper></WorkoutStepper>
    </div>
  );
}

export default Home;
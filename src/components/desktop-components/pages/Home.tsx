import { Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/TimerControls';
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
      <TimerControls hours={0} minutes={1} seconds={59}></TimerControls>
      <WorkoutStepper></WorkoutStepper>
    </div>
  );
}

import { Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/timer-controls/DesktopTimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';


function Someload(): { time: number; callback: () => any; }[] {
  return [
    {
      time: 600000 - 5000,
      callback: () => console.log("PlaceHolder")

    }
  ]
}

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
      <TimerControls time={600000} checkpoints={[
        {
          time: 600000 - 5000,
          callback: () => console.log("5 Seconds has Passed (Render New Workout)")
        },
        {
          time: (600000 - 5000) - 5000,
          callback: () => console.log("Another 5 Seconds Passed (Render Another Workout) ")
        }]}></TimerControls>
      <WorkoutStepper></WorkoutStepper>
    </div>
  );
}

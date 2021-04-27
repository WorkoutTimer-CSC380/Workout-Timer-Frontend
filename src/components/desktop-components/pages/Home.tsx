import { Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/TimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';

import io from 'socket.io-client';
var socket = io("http://localhost:3001");

socket.on("timer", function (message: string) {
  console.log("Time Expired: " + message);
});

socket.on("toggle", (state: "pause" | "resume") => {
  console.log("Timer state: " + state);

});

function Home() {
  return (
    <div>
      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        No Workout in Progress
    </Typography>

      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        Select or create one in "My Workouts
  </Typography>

      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        Rounds
  </Typography>

      <TimerControls></TimerControls>


    </div>

  );
}

export default Home;
import {Typography } from '@material-ui/core';
import React from 'react';
import TimerControls from '../../reusables/TimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';
import io from 'socket.io-client';


var socket = io("http://localhost:3001");

socket.on("timer", function(){
  console.log("Testing")
  
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
      <WorkoutStepper></WorkoutStepper>
     
     
    </div>

  );
}

export default Home;
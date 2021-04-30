import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid, Typography } from '@material-ui/core';
import {useEffect, useRef, useState} from 'react';
import io from "socket.io-client";
  


function TimerControls({ hours = 0, minutes = 0, seconds = 0 }) {

  var min: number = minutes;
  var sec: number = seconds;
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const [paused, setPaused] = useState(false);
  const[stop, setStop] = useState(false);
  const[start, setStart] = useState(false);
  let socket = io("http://localhost:3001");

  socket.on("DesktopPause", () => {
    console.log("Made it to TimerControls")
    pauseTimer();
  });

  socket.on("DesktopPlay", () => {
    console.log("Made it to TimerControls")
    startTimer();
  });

  socket.on("DesktopRestart", () => {
    console.log("Made it to TimerControls")
    resetTimer();
  });
  
  //Counts down timer
  const tick = () => {
    if(paused || stop ) return;
    if (h === 0 && m === 0 && s === 0) setStop(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  //Starts timer
  const startTimer = () => {
    console.log("resume requested");  
    fetch('http://localhost:3001/timers/resume')
    setPaused(false)
    setStart(true)
    setStop(false)
  }

  //Pauses timer
  const pauseTimer = () => {
    console.log("pause requested");  
    fetch('http://localhost:3001/timers/pause')
    setPaused(true)
    setStart(false)
    setStop(false)
  }

  //Stops timer-connected to stop button
  const stopTimer = () => {
    setTime([h,m, s]);
    setPaused(false);
    setStop(true);
    setStart(true)
  }; 

//Resets timer-connected to the reset button
const resetTimer = () => {
  setTime([0,min, sec]);
  setPaused(true);
  setStop(false);
  setStart(false)
}; 


  useEffect(()=> { 
    if(start == true && paused == false){
    const timerID = setInterval(()=> tick(), 1000);
    return () => clearInterval(timerID);
    }
    
  });

  return (
    <div>
      <Typography 
        variant="h2"   
        align="center">
        <p>{`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>  
      </Typography>
    
      <Grid
        container
        spacing={0}
        justify="center">
        <ButtonGroup size='small'>
          <IconButton onClick={startTimer}>
            <PlayCircleFilled  
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton onClick={pauseTimer}>
            <PauseCircleFilledRoundedIcon
              fontSize="large"
              color="primary">
            </PauseCircleFilledRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Grid>

      <Grid
        container
        spacing={0}
        justify="center" >
        <ButtonGroup>
          <IconButton>
            <FastRewindRoundedIcon
              fontSize="large"
              color="primary">
            </FastRewindRoundedIcon>
          </IconButton>
          <IconButton onClick={stopTimer}>
            <StopRoundedIcon
              fontSize="large"
              color="primary">
            </StopRoundedIcon>
          </IconButton>
          <IconButton onClick={resetTimer}>
            <RedoRoundedIcon
              fontSize="large"
              color="primary">
            </RedoRoundedIcon>
          </IconButton>
          <IconButton>
            <FastForwardRoundedIcon
              fontSize="large"
              color="primary">
            </FastForwardRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

export default TimerControls;

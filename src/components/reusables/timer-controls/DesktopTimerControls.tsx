import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";
import Timer from 'react-compound-timer';

const HOSTNAME = window.location.hostname

let socket = io("http://" + HOSTNAME + ":3001");



export default function DesktopTimerControls() {

  socket.on("DesktopPause", () => {
    console.log("desktop-pause")
  });

  socket.on("DesktopPlay", () => {
    console.log("desktop-play")

  });

  socket.on("DesktopRestart", () => {
    console.log("desktop-restart")

  });

  function socket_pause() {
    console.log("desktop-pause requested");
    socket.emit("Invoked-DesktopPause");
  }

  function socket_play() {
    console.log("desktop-play requested");
    socket.emit("Invoked-DesktopPlay");
  }

  function socket_restart() {
    console.log("desktop-restart requested");
    socket.emit("Invoked-DesktopRestart");
  }

  function socket_stop() {
    console.log("desktop-stop requested");
    socket.emit("Invoked-DesktopStop");
  }


  return (
    <div>
      <Timer
    initialTime={55000}
    startImmediately={false}
    direction="backward"
>
  {({ start, resume, pause, stop, reset, timerState }: any) => (
    <React.Fragment>
        <Typography 
          variant="h2"
          align="center">
          <Timer.Minutes />
          <Timer.Seconds /> 
        </Typography>

      <Grid
        container
        spacing={0}
        justify="center">
        <ButtonGroup size='small'>
          <IconButton onClick={() => {start() 
                                    socket_play()}}> 
            <PlayCircleFilled
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton onClick={() => {pause() 
                                    socket_pause()}}>
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
          <IconButton onClick={() => {stop() 
                                    socket_stop() }}>
            <StopRoundedIcon
              fontSize="large"
              color="primary">
            </StopRoundedIcon>
          </IconButton>
          <IconButton onClick={() => {reset() 
                                    socket_restart() }}>
            <RedoRoundedIcon
              fontSize="large"
              color="primary">
            </RedoRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Grid>
    </React.Fragment>
    )}
</Timer>   
    </div>
  );
}


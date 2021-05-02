import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid, Typography } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";


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
      <Grid
        container
        spacing={0}
        justify="center">
        <ButtonGroup size='small'>
          <IconButton onClick={socket_play}>
            <PlayCircleFilled
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton onClick={socket_pause}>
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
          <IconButton onClick={socket_stop}>
            <StopRoundedIcon
              fontSize="large"
              color="primary">
            </StopRoundedIcon>
          </IconButton>
          <IconButton onClick={socket_restart}>
            <RedoRoundedIcon
              fontSize="large"
              color="primary">
            </RedoRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Grid>
    </div>
  );
}


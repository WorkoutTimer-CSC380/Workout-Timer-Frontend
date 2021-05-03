import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup"
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import FastRewindRoundedIcon from "@material-ui/icons/FastRewindRounded";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

import Timer from "react-compound-timer";
import { TimerControls } from "react-compound-timer";

const HOSTNAME = window.location.hostname

let socket = io("http://" + HOSTNAME + ":3001");

export default function DesktopTimerControls() {
  type DeviceType = "desktop" | "mobile";
  type TimerEvent = "pause" | "play" | "restart" | "stop";

  socket.on("pause", (device: DeviceType) => {
    console.log("pause")
  });

  socket.on("play", (device: DeviceType) => {
    console.log("play")
  });

  socket.on("restart", (device: DeviceType) => {
    console.log("restart")
  });

  socket.on("stop", (device: DeviceType) => {
    console.log("stop");
  });

  function socketPause() {
    console.log("desktop pause requested");
    socket.emit("pause", "desktop");
  }

  function socketPlay() {
    console.log("desktop play requested");
    socket.emit("play", "desktop");
  }

  function socketRestart() {
    console.log("desktop restart requested");
    socket.emit("restart", "desktop");
  }

  function socket_stop() {
    console.log("desktop stop requested");
    socket.emit("stop", "desktop");
  }


  return (
    <div>
      <Timer
        initialTime={55000}
        startImmediately={false}
        direction="backward"
      >
        {({ start, resume, pause, stop, reset, getTimerState }: TimerControls) => (
          <React.Fragment>
            <Typography
              variant="h1"
              align="center">
              <Timer.Minutes />:
              <Timer.Seconds formatValue={(value: number) => value > 10 ? `${value}` : `0${value}`} />
            </Typography>

            <Grid
              container
              spacing={0}
              justify="center">
              <ButtonGroup size='small'>
                <IconButton onClick={() => {
                  start()
                  socketPlay()
                }}>
                  <PlayCircleFilled
                    fontSize="large"
                    color="primary">
                  </PlayCircleFilled>
                </IconButton>
                <IconButton onClick={() => {
                  pause()
                  socketPause()
                }}>
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
                <IconButton onClick={() => {
                  stop()
                  socket_stop()
                }}>
                  <StopRoundedIcon
                    fontSize="large"
                    color="primary">
                  </StopRoundedIcon>
                </IconButton>
                <IconButton onClick={() => {
                  reset()
                  socketRestart()
                }}>
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


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
import ReactDOM from "react-dom";
import RootRef from '@material-ui/core/RootRef';
import Timer from "react-compound-timer";
import { TimerControls } from "react-compound-timer";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import classes from "*.module.css";

const HOSTNAME = window.location.hostname

let socket = io("http://" + HOSTNAME + ":3001");

type Props = {
  time: number
}

export default function DesktopTimerControls() {

  const playButton = useRef<HTMLDivElement>(null)
  const stopButton = useRef<HTMLDivElement>(null)
  const pauseButton = useRef<HTMLDivElement>(null)
  const resetButton = useRef<HTMLDivElement>(null)

  {/* Actions to perform when socket is activated */ }
  useEffect(() => {
    socket.on("desktop-play", () => {
      console.log("Desktop Play")
      playButton.current?.click()
    });
    socket.on("desktop-pause", () => {
      console.log("Desktop pause")
      pauseButton.current?.click()
    });

    socket.on("desktop-restart", () => {
      console.log("Desktop Restart")
      resetButton.current?.click()
    });
    socket.on("desktop-stop", () => {
      console.log("Desktop Stop")
      stopButton.current?.click()
    });
  })

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
    root2: {
      '& > *': {
        margin: theme.spacing(3),
      },
    }
  }),
);

const classes = useStyles();
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
              <div className={classes.root}>
                <RootRef rootRef={playButton}>
                  <IconButton className="btn-play" onClick={() => {
                    start()
                  }}>
                    <PlayCircleFilled
                      fontSize="large"
                      color="primary">
                    </PlayCircleFilled>
                  </IconButton>
                </RootRef>
                <RootRef rootRef={pauseButton}>
                  <IconButton className="btn-pause" onClick={() => {
                    pause()
                  }}>
                    <PauseCircleFilledRoundedIcon
                      fontSize="large"
                      color="primary">
                    </PauseCircleFilledRoundedIcon>
                  </IconButton>
                </RootRef>
                </div>
              </ButtonGroup>             
            </Grid>
            <Grid
              container
              spacing={0}
              justify="center" >
              <ButtonGroup>
              <div className={classes.root2}>
                <RootRef rootRef={stopButton}>
                  <IconButton className="btn-stop" onClick={() => {
                    stop()
                  }}>
                    <StopRoundedIcon
                      fontSize="large"
                      color="primary">
                    </StopRoundedIcon>
                  </IconButton>
                </RootRef>
                <RootRef rootRef={resetButton}>
                  <IconButton className="btn-restart" onClick={() => {
                    reset()
                  }}>
                    <RedoRoundedIcon
                      fontSize="large"
                      color="primary">
                    </RedoRoundedIcon>
                  </IconButton>
                </RootRef>
                </div>
              </ButtonGroup>          
            </Grid>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}


import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid } from '@material-ui/core';

import io from "socket.io-client"

const HOSTNAME = window.location.hostname
let socket = io("http://" + HOSTNAME + ":3001");




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
    root2: {
      '& > *': {
        margin: theme.spacing(2),
      },
    }
  }),
);

export default function MobileTimerControls() {

  function socketPause() {
    console.log("mobile pause requested");
    socket.emit("pause");
  }
  
  function socketPlay() {
    console.log("mobile play requested");
    socket.emit("play");
  }
  
  function socketRestart() {
    console.log("mobile restart requested");
    socket.emit("restart");
  }
  
  function socketStop() {
    console.log("mobile stop requested");
    socket.emit("stop");
  }
  

  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <div className={classes.root}>
            <IconButton className="btn-play" onClick={socketPlay}>
              <PlayCircleFilled
                fontSize="large"
                color="primary">
              </PlayCircleFilled>
            </IconButton>
            <IconButton className="btn-pause" onClick={socketPause}>
              <PauseCircleFilledRoundedIcon
                fontSize="large"
                color="primary">
              </PauseCircleFilledRoundedIcon>
            </IconButton>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.root2}>
            <IconButton className="btn-stop" onClick={socketStop}>
              <StopRoundedIcon
                fontSize="large"
                color="primary">
              </StopRoundedIcon>
            </IconButton>
            <IconButton className="btn-restart" onClick={socketRestart}>
              <RedoRoundedIcon
                fontSize="large"
                color="primary">
              </RedoRoundedIcon>
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

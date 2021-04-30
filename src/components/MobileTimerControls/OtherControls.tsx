import IconButton from '@material-ui/core/IconButton';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import io from "socket.io-client";

let socket = io("http://localhost:3001");

function restart(){
  console.log("restart requested");  
  socket.emit("MobileRestart");
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }),
);

function OtherControls() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <IconButton className="btn-skip-back">
        <FastRewindRoundedIcon
          fontSize="large"
          color="primary">
        </FastRewindRoundedIcon>
      </IconButton>
      <IconButton className="btn-stop">
        <StopRoundedIcon
          fontSize="large"
          color="primary">
        </StopRoundedIcon>
      </IconButton>
      <IconButton className="btn-restart" onClick={restart}>
        <RedoRoundedIcon
          fontSize="large"
          color="primary">
        </RedoRoundedIcon>
      </IconButton>
      <IconButton className="btn-skip">
        <FastForwardRoundedIcon
          fontSize="large"
          color="primary">
        </FastForwardRoundedIcon>
      </IconButton>
    </div>
  );
}

export default OtherControls;

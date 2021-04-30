import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import io from "socket.io-client"

let socket = io("http://localhost:3001");

function pause(){
  console.log("mobile-pause requested");  
  socket.emit("Invoked-MobilePause");
}

function play(){
  console.log("mobile-start requested");  
  socket.emit("MobilePlay");
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
  }),
);

export default function MobileTimerControls(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
          <IconButton className="btn-play" onClick={play}>
            <PlayCircleFilled 
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton className="btn-pause" onClick={pause}>
            <PauseCircleFilledRoundedIcon
              fontSize="large"
              color="primary">
            </PauseCircleFilledRoundedIcon>
          </IconButton>
      </div>
    );
}

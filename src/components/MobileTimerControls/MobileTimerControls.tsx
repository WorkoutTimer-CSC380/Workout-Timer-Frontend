import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
  }),
);

function MobileTimerControls(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
          <IconButton className="btn-play">
            <PlayCircleFilled 
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton className="btn-pause">
            <PauseCircleFilledRoundedIcon
              fontSize="large"
              color="primary">
            </PauseCircleFilledRoundedIcon>
          </IconButton>
      </div>
    );
}

export default MobileTimerControls;

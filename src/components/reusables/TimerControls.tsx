import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid } from '@material-ui/core';

function TimerControls() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        justify="center">
        <ButtonGroup>
          <IconButton>
            <PlayCircleFilled
              fontSize="large"
              color="primary">
            </PlayCircleFilled>
          </IconButton>
          <IconButton>
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
          <IconButton>
            <StopRoundedIcon
              fontSize="large"
              color="primary">
            </StopRoundedIcon>
          </IconButton>
          <IconButton>
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

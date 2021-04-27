import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';
import { Grid } from '@material-ui/core';

function OtherControls() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <ButtonGroup size="large" color="primary" aria-label="play-pause button group">
          <IconButton className="btn-other-controls">
            <FastRewindRoundedIcon
              fontSize="large"
              color="primary">
            </FastRewindRoundedIcon>
          </IconButton>
          <IconButton className="btn-other-controls">
            <StopRoundedIcon
              fontSize="large"
              color="primary">
            </StopRoundedIcon>
          </IconButton>
          <IconButton className="btn-other-controls">
            <RedoRoundedIcon
              fontSize="large"
              color="primary">
            </RedoRoundedIcon>
          </IconButton>
          <IconButton className="btn-other-controls">
            <FastForwardRoundedIcon
              color="primary">
            </FastForwardRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

export default OtherControls;

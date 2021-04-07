import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container'

import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import RedoRoundedIcon from '@material-ui/icons/RedoRounded';

import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    disableGutters: true,
  },


}),
);


function AppMobile() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="sm" className={classes.root}>
        <ButtonGroup>
          <IconButton>
            <PlayCircleFilled fontSize="large" color="primary"></PlayCircleFilled>
          </IconButton>
          <IconButton>
            <PauseCircleFilledRoundedIcon fontSize="large" color="primary"></PauseCircleFilledRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Container>
      <Container maxWidth="sm">
        <ButtonGroup>
          <IconButton>
            <FastRewindRoundedIcon fontSize="large" color="primary"></FastRewindRoundedIcon>
          </IconButton>
          <IconButton>
            <StopRoundedIcon fontSize="large" color="primary"></StopRoundedIcon>
          </IconButton>
          <IconButton>
            <RedoRoundedIcon fontSize="large" color="primary"></RedoRoundedIcon>
          </IconButton>
          <IconButton>
            <FastForwardRoundedIcon fontSize="large" color="primary"></FastForwardRoundedIcon>
          </IconButton>
        </ButtonGroup>
      </Container>
    </React.Fragment>
  );
}

export default AppMobile;

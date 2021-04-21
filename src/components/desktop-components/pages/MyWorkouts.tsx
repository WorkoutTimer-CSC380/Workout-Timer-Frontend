import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExerciseCreationButton from '../forms/ExerciseCreationModal';
import WorkoutCreationButton from '../forms/WorkoutCreationModal';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { plainToClass } from "class-transformer";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {

    },
  }),
);


function testFunc(){
  fetch('http://localhost:3001/workouts')
  .then(response => response.json())
  .then(data => console.log(data));
}



function MyWorkouts() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3"> 
        My Workouts
      </Typography>
      <div className={classes.root}>
        <ExerciseCreationButton></ExerciseCreationButton>
      </div>
      <div className={classes.root}>
        <WorkoutCreationButton></WorkoutCreationButton>
      </div>

      <Button variant="contained" color="primary" className={classes.root} onClick={() => testFunc()}>
          Fetch
      </Button>
    </div>
  );
}

export default MyWorkouts
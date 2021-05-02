import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExerciseCreationButton from '../forms/ExerciseCreationModal';
import WorkoutCreationButton from '../forms/WorkoutCreationModal';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { plainToClass } from "class-transformer";
import BreakCreationButton from '../forms/BreakCreationModal';
import WorkoutBlock from '../../reusables/WorkoutBlock';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    paper2: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    control: {

    },
  }),
);

const HOSTNAME = window.location.hostname


export default function MyWorkouts() {
  const classes = useStyles();
  
  // TODO: Replace With Exercise and Break Bank
  // const [options, setOptions] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch("http://" + HOSTNAME + ":3001/workouts")
      const data = await response.json()
      setOptions(data)
    }
    fetchDataAsync()
  }, []);

function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <WorkoutBlock name="WorkoutA" numberOfExercises={2}></WorkoutBlock>
        </Grid>
        <Grid item xs={4}>
          <WorkoutBlock name="WorkoutB" numberOfExercises={2}></WorkoutBlock>
        </Grid>
        <Grid item xs={4}>
          <WorkoutBlock name="WorkoutC" numberOfExercises={2}></WorkoutBlock>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Typography variant="h3">
        My Workouts
      </Typography>

      <div className={classes.root}>
        <ExerciseCreationButton></ExerciseCreationButton>
      </div>
      <div className={classes.root}>
        <BreakCreationButton></BreakCreationButton>
      </div>
      <div className={classes.root}>
        <WorkoutCreationButton></WorkoutCreationButton>
      </div>


      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>

    </div>
  );
}


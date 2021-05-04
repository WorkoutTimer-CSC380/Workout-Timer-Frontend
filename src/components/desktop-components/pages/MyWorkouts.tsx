import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExerciseCreationButton from '../forms/ExerciseCreationModal';
import WorkoutCreationButton from '../forms/WorkoutCreationModal';
import { Grid, Typography } from '@material-ui/core';
import BreakCreationButton from '../forms/BreakCreationModal';
import WorkoutBlock from '../../reusables/WorkoutBlock';
import ManageWorkoutElementsModal from '../forms/ManageWorkoutElementsModal';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    btnFormat: {
      padding: theme.spacing(2)
    },
  }),
);

const HOSTNAME = window.location.hostname


export default function MyWorkouts() {
  const classes = useStyles();

  // TODO: Replace With Exercise and Break Bank
  // const [options, setOptions] = useState('');
  const [WorkoutsList, setWorkoutsList] = useState<string[]>([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch("http://" + HOSTNAME + ":3001/workouts")
      const data = await response.json()
      setWorkoutsList(data)
    }
    fetchDataAsync()
  }, []);

  function PopulateGrid() {
    return (
      <React.Fragment>
        {WorkoutsList.map(function (options) {
          return <Grid item xs={4}>
            <WorkoutBlock name={options}></WorkoutBlock>
          </Grid>
        })}
      </React.Fragment>
    );
  }

  return (
    <div>
      <Typography align="center" variant="h3">
        My Workouts
      </Typography>


      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <div className={classes.btnFormat}>
          <ExerciseCreationButton></ExerciseCreationButton>
        </div>
        <div className={classes.btnFormat}>
          <BreakCreationButton></BreakCreationButton>
        </div>
        <div className={classes.btnFormat}>
          <WorkoutCreationButton></WorkoutCreationButton>
        </div>
        <div className={classes.btnFormat}>
          <ManageWorkoutElementsModal></ManageWorkoutElementsModal>
        </div>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <PopulateGrid />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


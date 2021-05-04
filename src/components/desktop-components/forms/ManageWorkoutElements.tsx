import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import WorkoutElementBlock from '../../reusables/WorkoutElementBlock';



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


export default function ManageWorkoutElements() {
  const classes = useStyles();
  const [ElementsList, setElementsList] = useState<string[]>([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch("http://" + HOSTNAME + ":3001/exercises/names")
      const data = await response.json()
      setElementsList(data)
    }
    fetchDataAsync()
  }, []);

  function PopulateGrid() {
    return (
      <React.Fragment>
        {ElementsList.map(function (options) {
          return <Grid item xs={4}>
            <WorkoutElementBlock name={options}></WorkoutElementBlock >
          </Grid>
        })}
      </React.Fragment>
    );
  }

  return (
    <div>
      <Typography align="center" variant="h2">
        Workout Elements Bank
      </Typography>

      <Typography align="center" variant="h5">
        Delete Exercises and Breaks Here
      </Typography>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <PopulateGrid />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import RecentWorkoutBlock from '../../reusables/RecentWorkoutsBlock';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
  }),
);

const HOSTNAME = window.location.hostname


export default function RecentWorkouts() {
  const classes = useStyles();

  // TODO: Replace With Exercise and Break Bank
  // const [options, setOptions] = useState('');
  const [RecentWorkoutsList, setRecentWorkoutsList] = useState<string[]>([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetch("http://" + HOSTNAME + ":3001/recents")
      const data = await response.json()
      setRecentWorkoutsList(data)
    }
    fetchDataAsync()
  }, []);

  function PopulateGrid() {
    return (
      <React.Fragment>
        {RecentWorkoutsList.map(function (options) {
          return <Grid item xs={4}>
            <RecentWorkoutBlock name={options}></RecentWorkoutBlock>
          </Grid>
        })}
      </React.Fragment>
    );
  }

  return (
    <div>
      < div>
        <Typography align="center" variant="h3">
          Recent Workouts
       </Typography>
      </div>

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



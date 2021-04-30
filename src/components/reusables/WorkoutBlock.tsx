import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    icon_size: {
      scale: "100%"
    }
  }),
);


type Props = {
  name: string;
  numberOfExercises: number;

}

function deleteWorkout(workoutName: string) {
  fetch(
    'http://localhost:3001/workouts/' + workoutName, {
    method: 'DELETE', headers: {
      'Content-type': 'application/json'
    }
  })
}

function loadWorkout(workoutName: string) {
/*   fetch(
    'http://localhost:3001/workouts/' + workoutName, {
    method: 'DELETE', headers: {
      'Content-type': 'application/json'
    }
  }) */
  console.log("Loadworkout: TODO")
}


export default function WorkoutBlock(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <FitnessCenterIcon
                fontSize="large"
                color="primary">
              </FitnessCenterIcon>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name: {props.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Number of Exercises: {props.numberOfExercises}
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" value={props.name} onClick={() => loadWorkout(props.name)}>
                  Load
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" value={props.name} onClick={() => deleteWorkout(props.name)}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
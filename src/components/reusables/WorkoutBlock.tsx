import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import {setTotalTime, setName, setExerciseArray} from '../desktop-components/pages/Home'

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
}

//Sends the time that is loaded
 function sendTime(data: number){
   //Called from Home.tsx
  setTotalTime(data)
}

//Sends the name that is loaded
function sendExerciseName(data: string){
  setName(data)
}



const HOSTNAME = window.location.hostname

function deleteWorkout(workoutName: string) {
  fetch(
    "http://" + HOSTNAME + ":3001/workouts/" + workoutName, {
    method: 'DELETE', headers: {
      'Content-type': 'application/json'
    }
  })

}

async function loadWorkout(workoutName: string) {
  const fetchDataAsync = async () => {
    const response = await fetch("http://" + HOSTNAME + ":3001/workouts/" + workoutName)
    const data = await response.json()
    var jsonArray: JSON[] = []

    const elementArray: string[] = []

    data.workoutElements.forEach((e: any) => {
      console.log(e)
      elementArray.push(e.element)
    });

    console.log("Contents of Workout:" + elementArray)
    console.log("Number of elements:" + elementArray.length)
    var netTime: number = 0
    elementArray.forEach(e => {
      const fetchLocalExercisesAsync = async () => {
        console.log(e)
        const response = await fetch("http://" + HOSTNAME + ":3001/exercises/" + e)
        const data = await response.json()
        console.log(data)
 
        
        console.log("Minutes:" + data.duration.minutes + " Seconds:" + data.duration.seconds)
        console.log("Time in Mills For Element: " + (data.duration.minutes * 60000 + data.duration.seconds * 1000))
        netTime += (data.duration.minutes * 60000 + data.duration.seconds * 1000)
        sendTime(netTime)
        sendExerciseName(data.name)
        jsonArray.push(data)
        setExerciseArray(jsonArray)
        console.log("NetTime For Workout: " + netTime)
        console.log(jsonArray)
        // exerciseMap.set(data.name, data)
        // setExerciseArray(exerciseMap)
        // console.log(exerciseMap)
      }
      fetchLocalExercisesAsync()
    });
    
  }
  
  fetchDataAsync()
 
}


export default function WorkoutBlock(props: Props) {
  const classes = useStyles();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openLoad, setOpenLoad] = React.useState(false);

  const handleClickDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenDelete(false);
  };


  const handleClickLoad = () => {
    setOpenLoad(true);
  };

  const handleCloseLoad = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenLoad(false);
  };


  return (
    <div className={classes.root}>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openDelete}
        autoHideDuration={6000}
        onClose={handleCloseDelete}
        message={`${props.name} Deleted | Refresh to take effect.`}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseDelete}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openLoad}
        autoHideDuration={6000}
        onClose={handleCloseLoad}
        message={`${props.name} Loaded`}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseLoad}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

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
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" startIcon={<GetAppIcon />} value={props.name} onClick={() => {
                  loadWorkout(props.name)
                  handleClickLoad();
                }}>
                  Load
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} value={props.name} onClick={() => {
                  deleteWorkout(props.name);
                  handleClickDelete();
                }}>
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
import { Typography } from '@material-ui/core';
import { render } from '@testing-library/react';
import React from 'react';
import TimerControls from '../../reusables/timer-controls/DesktopTimerControls';
import WorkoutStepper from '../../reusables/WorkoutStepper';
import ReactDOM from 'react-dom';
import { timeStamp } from 'node:console';


function Someload(): { time: number; callback: () => any; }[] {
  return [
    {
      time: 600000 - 5000,
      callback: () => console.log("PlaceHolder")

    }
  ]
}

//Var instances for a loaded workout
var time: number 
var name: string
var jsonArray: any
var counter: number = 0

//Sets time from loaded workout
export function setTotalTime(dataParam: number){
  time = dataParam
}

function getTotalTime(){
  return(time)
}

//Set array which contains json objects
export function setExerciseArray(dataParam: any){
  jsonArray = dataParam
  
}

function getExerciseName(){
  if(counter == 0){
    name = jsonArray[counter].name 
    counter++;
  } else if(counter ==1){
    name = jsonArray[counter].name
    counter++;
  }
}


//Sets name from loaded workout
export function setName(dataParam: string){
  
  console.log(name) 
}

export function getName(){
  if(name == null){
    return("No Workout in Progress, select or create one in the My Workouts page")
  } else{
    name = jsonArray[counter].name 
    return(name)
  }
} 

function getExerciseTime(){
  if(counter == 0){
    time = jsonArray[counter].duration.minutes * 60000 + jsonArray[counter].duration.seconds * 1000
    counter++;
    return(time)
  } else if(counter ==1){
    time = jsonArray[counter].duration.minutes * 60000 + jsonArray[counter].duration.seconds * 1000
    counter++;
    return(time)
  }
}
  



export default function Home() {

  return (
    <div>
        <Typography
        align="center"
        variant="h5"
        gutterBottom>
        {getName()} 
      </Typography>

      <Typography
        align="center"
        variant="h5"
        gutterBottom>
        Round
      </Typography>
      <TimerControls time={getTotalTime()} checkpoints={[
        {
          time: getTotalTime() -5000, 
          callback: () => getExerciseName()
        },
        {
          time: (getTotalTime() - 5000) - 5000,
          callback: () => getExerciseName() 
        }]}></TimerControls>
      <WorkoutStepper></WorkoutStepper>
    </div>
  );
}


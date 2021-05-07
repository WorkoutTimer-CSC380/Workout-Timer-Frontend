import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Checkpoint } from "react-compound-timer";

import TimerControls from "../../reusables/timer-controls/DesktopTimerControls";
import WorkoutStepper from "../../reusables/WorkoutStepper";
import { Duration, Workout } from "../../../types";

let netTime: number;
let workout: Workout | undefined = undefined;

//Sets time from loaded workout
export function setTotalTime(dataParam: number) {
  netTime = dataParam;
}

export function setWorkout(data: Workout) {
  workout = data;
}

function durationToMilli(dur: Duration): number {
  return dur.minutes * 60000 + dur.seconds * 1000;
}

export default function Home() {
  const [name, setExerciseName] = React.useState("No Exercise is Loaded");

  useEffect(() => {
    if (workout !== undefined) {
      // console.log("workout.exercises: ", workout.exercises);
      const first = workout.exercises.shift()!!;
      // console.log("workout.exercises.shift(): ", first);
      setExerciseName(first.name);
      netTime -= durationToMilli(first.duration);
    }
  }, []);

  function generateCheckpoints(): Checkpoint[] {
    let netTimeCopy = netTime;
    const checkpoints: Checkpoint[] = [];
    for (let i = 0; i < workout!!.exercises.length; i++) {
      const val = workout?.exercises[i];
      checkpoints.push({
        callback: () => {
          setExerciseName(val!!.name);
        },
        time: netTimeCopy,
      });
      netTimeCopy -= durationToMilli(val!!.duration);
    }

    return checkpoints;
  }

  const c = workout !== undefined ? generateCheckpoints() : [];

  return workout !== undefined ? (
    <div>
      <Typography align="center" variant="h5" gutterBottom>
        Workout: {workout.name}
      </Typography>
      <Typography align="center" variant="h5" gutterBottom>
        Round: {name}
      </Typography>

      <TimerControls time={netTime} checkpoints={c}></TimerControls>
    </div>
  ) : (
    <div>
      <Typography align="center" variant="h5" gutterBottom>
        Workout: {"No workout loaded"}
      </Typography>
      <TimerControls time={netTime} checkpoints={c}></TimerControls>
    </div>
  );
}

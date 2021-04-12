import './App.css';
import TimerControls from './components/reusables/TimerControls';
import WorkoutStepper from './components/workout-stepper/WorkoutStepper'


function AppMobile() {
  return (
    <div>
      <TimerControls></TimerControls>
      <WorkoutStepper></WorkoutStepper>
    </div>
  );
}

export default AppMobile;

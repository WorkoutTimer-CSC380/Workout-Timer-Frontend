import './App_Mobile.css';
import MobileTimerControls from './components/MobileTimerControls/MobileTimerControls';
import OtherControls from './components/MobileTimerControls/OtherControls';
import { Grid } from '@material-ui/core';

export default function AppMobile() {
  return (
    <div>
      <h1>Current Workout</h1>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <MobileTimerControls></MobileTimerControls>
        </Grid>
        <Grid item>
          <OtherControls></OtherControls>
        </Grid>
      </Grid>
    </div>
  );
}



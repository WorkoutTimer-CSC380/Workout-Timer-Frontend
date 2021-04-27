import './App_Mobile.css';
import MobileTimerControls from './MobileTimerControls';
import OtherControls from './OtherControls';
import { Grid } from '@material-ui/core';

function AppMobile() {
  return (
    <div>
      <h1>Current Workout</h1>
      <Grid container direction="column" justify="center" alignItems="center">
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

export default AppMobile;

import React from "react";
import { Grid } from '@material-ui/core';
import Countdown from 'react-countdown';
import {Container} from '@material-ui/core';


function Timer(){
 
  

    //Milliseconds
    return(
        <div>
          <Grid
            container
            spacing={0}
            justify="center">
              <h1> 
                <Countdown 
                  onStart={start} autoStart={false}
                  date={Date.now() + 100000} /> 
              </h1>
            </Grid>
        </div>
    );
}

function start(){
  
}



export default Timer;
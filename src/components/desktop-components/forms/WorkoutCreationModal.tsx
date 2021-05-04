

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import WorkoutCreation from './WorkoutCreation';
import { Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';



function getModalStyle() {
  const top = 50
  const left = 50
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: 'fixed',
      top: '10%',
      overflow: 'scroll',
      height: '100%',
      maxHeight: 600,
      display: 'block',

      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

    },
  }),
);

export default function WorkoutCreationModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<FitnessCenterIcon />} onClick={handleOpen}>
        Create Workout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={modalStyle} className={classes.modal}>
            <WorkoutCreation></WorkoutCreation>
          </div>
        </Fade>
      </Modal>

    </div>
  );
}

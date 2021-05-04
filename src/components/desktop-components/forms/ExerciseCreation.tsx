import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import { IconButton } from "@material-ui/core";

const Form = withTheme(MuiTheme);

const uiSchemea: UiSchema = {
  "name": {},
  "duration": {
    "minutes": {
      "ui:widget": "updown"
    },
    "seconds": {
      "ui:widget": "updown"
    },
  },
};

const schema: JSONSchema7 = {
  title: "Create an Exercise",
  description: "Creating an Exercise / Round",
  type: "object",
  required: [
    "sets", "reps"
  ],
  properties: {
    name: {
      type: "string",
      title: "Exercise Name"
    },
    sets: {
      type: "integer",
      title: "Sets"
    },
    reps: {
      type: "integer",
      title: "Reps"
    },
    duration: {
      title: "Duration",
      description: "Enter a duration time",
      type: "object",
      required: [
        "minutes", "seconds"
      ],
      properties: {
        minutes: {
          type: "integer",
          title: "minutes"
        },
        seconds: {
          type: "integer",
          title: "seconds"
        }
      }
    },
  }
};

function validate(formData: any, errors: any) {
  if (formData.duration.minutes < 0) {
    errors.duration.minutes.addError("Negative number not allowed");

  } else if (formData.duration.minutes > 60) {
    errors.duration.minutes.addError("Cannot exceed 60 mintues");

  } else if (formData.duration.seconds < 0) {
    errors.duration.seconds.addError("Negative number not allowed");

  } else if (formData.duration.seconds > 60) {
    errors.duration.seconds.addError("Cannot exceed 60 mintues");

  } else if (formData.sets < 0) {
    errors.sets.addError("Negative number not allowed");

  } else if (formData.sets > 9999) {
    errors.sets.addError("Too many sets");

  } else if (formData.reps < 0) {
    errors.reps.addError("Negative number not allowed");

  } else if (formData.reps > 9999) {
    errors.reps.addError("Too many reps");
  }
  return errors;

}
const HOSTNAME = window.location.hostname
export default function ExerciseCreation() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`Exercise Form Submitted`}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <Form
        schema={schema}
        uiSchema={uiSchemea}
        // liveValidate={true}
        validate={validate}
        //onSubmit={({formData}) => console.log(JSON.stringify(formData, null, 2))}
        onSubmit={({ formData }) => {
          fetch(
            "http://" + HOSTNAME + ":3001/exercises", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData, null, 2)
          })
          handleClick();
        }}
      />
    </div>
  );
}




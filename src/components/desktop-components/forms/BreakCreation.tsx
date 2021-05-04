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
  title: "Create an Break",
  description: "Creating a Break",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name of Break Block"
    },
    duration: {
      title: "Duration",
      description: "Enter a duration time",
      type: "object",
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

const HOSTNAME = window.location.hostname

export default function BreakCreation() {
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
        message={`Break Form Submitted`}
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
        // onSubmit={({ formData }) => console.log(JSON.stringify(formData, null, 2))}
        onSubmit={({ formData }) => {
          fetch(
            "http://" + HOSTNAME + ":3001/exercises", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData, null, 2)
          })
          handleClick()
        }}
      />
    </div>
  );
}


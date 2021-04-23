import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';

import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';


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
  "breakDuration": {
    "minutes": {
      "ui:widget": "updown"
    },
    "seconds": {
      "ui:widget": "updown"
    },
  }

};

const schema: JSONSchema7 = {
  title: "Create an Exercise",
  description: "Creating an Exercise / Round",
  type: "object",
  required: [
    "name", "sets", "reps"
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
      required: ["hours", "minutes", "seconds"],
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



function ExerciseCreation() {

  return (
    <div>

      <Form 
        schema={schema}
        uiSchema={uiSchemea}
        //liveValidate={true}
        onSubmit={({formData}) => console.log(JSON.stringify(formData, null, 2))}
      />
    </div>


  );



}

export default ExerciseCreation
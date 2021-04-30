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
};

const schema: JSONSchema7 = {
  title: "Create an Exercise",
  description: "Creating an Exercise / Round",
  type: "object",
  required : [
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
      required :[
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

function validate(formData: any, errors : any){
   if(formData.duration.minutes < 0){
     errors.duration.minutes.addError("Negative number not allowed");

   } else if(formData.duration.minutes > 60){
     errors.duration.minutes.addError("Cannot exceed 60 mintues");

   } else if(formData.duration.seconds < 0){
     errors.duration.seconds.addError("Negative number not allowed");

   } else if(formData.duration.seconds > 60){
     errors.duration.seconds.addError("Cannot exceed 60 mintues");

   } else if(formData.sets < 0){
    errors.sets.addError("Negative number not allowed");

  } else if(formData.sets > 9999){
    errors.sets.addError("Too many sets");

  } else if(formData.reps < 0){
    errors.reps.addError("Negative number not allowed");

  } else if(formData.reps > 9999){
    errors.reps.addError("Too many reps");
  }
   return errors;
 
}

export default function ExerciseCreation() {

  return (
    <div>

      <Form
        schema={schema}
        uiSchema={uiSchemea}
       // liveValidate={true}
        validate = {validate}
        onSubmit={({formData}) => console.log(JSON.stringify(formData, null, 2))}
      />
    </div>
  );
}




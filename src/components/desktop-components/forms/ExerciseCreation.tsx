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
   if(formData.minutes < 0){
     errors.minutes.addError("Negative number not allowed");
   } else if(formData.minutes > 60){
     errors.minutes.addError("Cannot exceed 60 mintues");
   } else if(formData.seconds < 0){
     errors.mintues.addError("Negative number not allowed");
   } else if(formData.seconds > 60){
     errors.mintues.addError("Cannot exceed 60 mintues");
   }
   
   return errors;
 }

function ExerciseCreation() {

  return (
    <div>

      <Form 
        schema={schema}
        uiSchema={uiSchemea}
        liveValidate={true}
        validate = {validate}
        onSubmit={({formData}) => console.log(JSON.stringify(formData, null, 2))}
      />
    </div>
  );
}



export default ExerciseCreation
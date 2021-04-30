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

export default function BreakCreation() {
  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchemea}
        onSubmit={({ formData }) => console.log(JSON.stringify(formData, null, 2))}
      />
    </div>
  );
}


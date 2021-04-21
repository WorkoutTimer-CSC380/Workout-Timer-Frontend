import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';


const Form = withTheme(MuiTheme);

const uiSchemea: UiSchema = {
    "rounds": { 
        "ui:emptyValue": ""
    }
};

const schema: JSONSchema7 = {
    title: "Create a Workout",
    description: "Creating a Workout",
    type: "object",
    required: [
        "name", "rounds"
    ],
    properties: {
        name: {
            type: "string",
            title: "Workout Name"
        },
        rounds: {
            type: "array",
            title: "Round Construction",
            items: {
                type: "string",
            },
        }
       
    }
};

function WorkoutCreation() {
    return (
        <div>

            <Form
                schema={schema}
                uiSchema={uiSchemea}
                //liveValidate={true}
                onSubmit={({ formData }) => alert(JSON.stringify(formData, null, 2))}
            />
        </div>


    );



}

export default WorkoutCreation
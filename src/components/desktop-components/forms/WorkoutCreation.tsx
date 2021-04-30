import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';
import { RepeatOneSharp } from "@material-ui/icons";
import { createNumericLiteral } from "typescript";
import { dataURItoBlob, setState } from "react-jsonschema-form/lib/utils";
import { useEffect } from "react";


const Form = withTheme(MuiTheme);

const uiSchemea: UiSchema = {
    "rounds": {
        "ui:emptyValue": ""
    }
};

function formWorkaround(enums: string[]): JSONSchema7 {
    return {
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
            exercises: {
                type: "array",
                title: "Add Workout Elements",
                items: {
                    type: "object",
                    properties: {
                        element: {
                            title: "Workout Element",
                            type: "string",
                            enum: enums
                        }
                    }

                }

            }
        },
    };
}

function testFunc() {
    fetch('http://localhost:3001/workouts')
        .then(response => response.json())
        .then(data => console.log(data));
}


function getDropdownJson(): Promise<string[]> {
    return fetch('http://localhost:3001/workouts')
        .then(response => response.json())
        .then(val => { return val as string[] });
}

// async function getDropdownJson(): string[] {
//     let response = await fetch('http://localhost:3001/workouts');
//     let data: string[] = await response.json()

//     data.forEach((element: any) => {
//         console.log(element)
//     });

//     return data as string[];
// }

function WorkoutCreation() {
    const workoutArr = getDropdownJson();

    return (
        <div>
            <Form
                schema={formWorkaround(["a"])}
                uiSchema={uiSchemea}
                // liveValidate={true}
                // localhost:3001/workouts
                onSubmit={({ formData }) => console.log(JSON.stringify(formData, null, 2))}
            /*      onSubmit={({ formData }) => fetch(
                     'http://localhost:3001/workouts', {
                     method: 'POST',
                     headers: { 'Content-type': 'application/json' },
                     body: JSON.stringify(formData, null, 2)
                 })} */
            />
        </div>
    );
}

export default WorkoutCreation
import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';
import React, { useState, useEffect } from 'react';



const Form = withTheme(MuiTheme);

const uiSchemea: UiSchema = {
    "rounds": {
        "ui:emptyValue": ""
    }
};

function createForm(dropDownOptions: string[]): JSONSchema7 {
    return {
        title: "Create a Workout",
        description: "Creating a Workout",
        type: "object",
        properties: {
            name: {
                type: "string",
                title: "Workout Name"
            },
            workoutElements: {
                type: "array",
                title: "Add Workout Elements",
                items: {
                    type: "object",
                    properties: {
                        element: {
                            title: "Workout Element",
                            type: "string",
                            enum: dropDownOptions
                        }
                    }

                }

            }
        },
    };
}

const HOSTNAME = window.location.hostname

export default function WorkoutCreation() {
    //TODO: Replace With Exercise and Break Bank
    // const [options, setOptions] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    useEffect(() => {
        const fetchDataAsync = async () => {
            const response = await fetch("http://" + HOSTNAME + ":3001/exercises/names")
            const data = await response.json()
            setOptions(data)
        }
        fetchDataAsync()
    }, []);

    return (
        <div>
            <Form
                schema={createForm(options)}
                uiSchema={uiSchemea}
                // liveValidate={true}
                 //onSubmit={({ formData }) => console.log(JSON.stringify(formData, null, 2))}
                   onSubmit={({ formData }) => fetch(
                     "http://" + HOSTNAME + ":3001/workouts", {
                     method: 'POST',
                     headers: { 'Content-type': 'application/json' },
                     body: JSON.stringify(formData, null, 2)
                 })}  
            />
        </div>
    );
}


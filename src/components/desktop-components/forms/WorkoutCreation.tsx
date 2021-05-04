import { JSONSchema7 } from "json-schema";
import { UiSchema } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MuiTheme } from '@rjsf/material-ui';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";

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
                message={`Workout Form Submitted`}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <Form
                schema={createForm(options)}
                uiSchema={uiSchemea}
                // liveValidate={true}
                //onSubmit={({ formData }) => console.log(JSON.stringify(formData, null, 2))}
                onSubmit={({ formData }) => {
                    fetch(
                        "http://" + HOSTNAME + ":3001/workouts", {
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


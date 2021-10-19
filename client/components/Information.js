import React, { useContext } from 'react';
import { InformationContext } from './Contexts/InformationContext';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Information() {

    const { setName, setSaveInformation } = useContext(InformationContext)

    return (<>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Name"
                variant="standard"
                color="warning"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                onChange={(event) => {
                    setName(event.target.value)
                }}
                focused
            />
            <TextField
                label="Town"
                variant="standard"
                color="warning"
            />
            <TextField
                label="City"
                variant="standard"
                color="warning"
            />
            <TextField
                label="Category"
                variant="standard"
                color="warning"
            // focused
            />
            <Button onClick={() => setSaveInformation(true)} style={{ marginTop: "30px", backgroundColor: "lightgrey" }}>SAVE</Button>
        </Box>

    </>)
}
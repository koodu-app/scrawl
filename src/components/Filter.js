import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const style = {
    padding:'2px 0px 0px 0px',
    float: 'right'
  };

export default function Filter() {
    return (
        <Box sx={style}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300, pr:2, pt:2 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </Box>

    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
]

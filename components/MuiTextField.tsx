import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const MuiTextField = () => {
    const [value,setvalue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='mob' variant='filled' />
                <TextField label='email' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required value={value} onChange={(e) =>setvalue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required': 'Do not share your password with anyone'}/>
                <TextField label='password' helperText='Do Not share your password with anyone' />
                <TextField label='email' variant='standard' />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>
            {/* <Stack direction='row' spacing={2}>
                <TextField label='Amount' Inputprops={{ startAdornment: <InputAdornment position='start'>$</InputAdornment>, }} />
                <TextField label='Weight' Inputprops={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment>, }} />
            </Stack> */}
        </Stack>
    )
}
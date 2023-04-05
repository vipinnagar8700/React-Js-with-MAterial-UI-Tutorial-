import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'

export const MuiChip = () => {
    const [chips,setChips] = useState(['Chip 1','Chip 2','Chip 3'])
    const handleDelete =(chipToDelete: string) =>{
        setChips((chips) =>chips.filter((chip) => chip !== chipToDelete))
    }
    return (
        <Stack direction='row' spacing={2}>
            <Chip label='Chip' color='error' size='small' icon={<FaceIcon />} />
            <Chip label='Chip outlined' color='secondary' size='medium' variant='outlined' avatar={<Avatar>V</Avatar>} />
            <Chip label='Click' color='error' onClick={() => alert('Clicked')} />
            <Chip label='Delete' color='error' onDelete={() => alert('Delete handler called')} />
            {
            chips.map(chip =>(
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
            ))
}
        </Stack>
    )
}

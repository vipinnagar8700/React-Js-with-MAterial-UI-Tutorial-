import {Stack,Autocomplete,TextField} from '@mui/material'

const skills = ['HTML','CSS','BOOTSTRAP','JAVA','REACTJS' ]

export const MuiAutocomplete = () => {
  return (
    <Stack spacing ={2} width='250px'>
        <Autocomplete options={skills} renderInput={(params) => <TextField {...params} />} />
        
    </Stack>
  )
}

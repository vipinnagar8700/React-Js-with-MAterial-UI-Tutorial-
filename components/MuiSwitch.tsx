import {Box,FormControlLabel,Switch} from '@mui/material'

export const MuiSwitch = () => {
  return (
    <Box>
        <FormControlLabel label='Dark mode' control={<Switch/>}/>
        <FormControlLabel label='Dark mode' control={<Switch defaultChecked color='secondary'/>}/>
        <FormControlLabel label='Dark mode' control={<Switch color='warning'/>} />
        <FormControlLabel label='Dark mode' control={<Switch defaultChecked color="error"/>} />
        <FormControlLabel label='Dark mode' control={<Switch defaultChecked color="success"/>} />
    </Box>
  )
}

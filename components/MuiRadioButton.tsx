import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio,} from '@mui/material';


export const MuiRadioButton = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>Years of Experience</FormLabel>
                <RadioGroup name='job-experience-group ' aria-labelledby='job-experience=group-label'>
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-6' value='3-6' />
                    <FormControlLabel control={<Radio />} label='7-10' value='7-10' />             </RadioGroup>
            </FormControl>
        </Box>
    )
}
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordion = () => {
    return (
        <Accordion>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails  sx={{height:'400px'}}>
                <Typography></Typography>
            </AccordionDetails>
        </Accordion>
        
    )
}

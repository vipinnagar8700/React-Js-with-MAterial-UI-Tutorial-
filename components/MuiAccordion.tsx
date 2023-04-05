import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordion = () => {
    return (
        <Accordion>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est odit ducimus labore consequuntur! Quibusdam a iure quo fuga, vel neque facilis magni obcaecati omnis eos cupiditate earum amet atque.</Typography>
            </AccordionDetails>
        </Accordion>
        
    )
}

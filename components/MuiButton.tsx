import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='http://google.com'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>
                    contained
                </Button>
                <Button variant='contained' color='secondary'>
                    contained
                </Button>
                <Button variant='contained' color='error'>
                    contained
                </Button>
                <Button variant='contained' color='warning'>
                    contained
                </Button>
                <Button variant='contained' color='success'>
                    contained
                </Button>
                <Button variant='contained' color='info'>
                    contained
                </Button>
            </Stack>
            {/* <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>
                    contained
                </Button>
                <Button variant='contained' color='medium'>
                    contained
                </Button>
                <Button variant='contained' color='large'>
                    contained
                </Button>
               
            </Stack> */}

            {/* <Stack spacing={2} direction='row'>
                <Button variant='contained' StartIcon={<SendOutlinedIcon />} disableRipple onClick={() => alert('Clicked')} >Send</Button>
                <Button variant='contained' endIcon={<SendOutlinedIcon />} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size='small'><SendOutlinedIcon /></IconButton>

            </Stack> */}
            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='info' size='medium' aria-label='alignment button group'>
                    <Button  onClick={()=>alert('left Clicked')}>Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>

        </Stack>

    )
}
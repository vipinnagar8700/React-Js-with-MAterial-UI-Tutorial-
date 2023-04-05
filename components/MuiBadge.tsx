import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
    return (
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color='primary'>
                <MailIcon />
            </Badge>
            <Badge badgeContent={5} color='secondary'>
                <MailIcon />
            </Badge>
            <Badge badgeContent={5} color='success'>
                <MailIcon />
            </Badge>
            <Badge badgeContent={110} max={999} color='error'>
                <MailIcon />
            </Badge>
            <Badge variant='dot'  color='primary'>
                <MailIcon />
            </Badge>

        </Stack>
    )
}

import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton,Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
    return (
        <Box sx={{ width: '400px', bgcolor: '#ffff' }}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <ListItemIcon><Avatar><MailIcon /></Avatar>
                            </ListItemIcon>
                        </ListItemAvatar>
                        <ListItemText primary='List item 1' secondary='Secondary text' />
                    </ListItemButton>
                </ListItem>
                <Divider/>

                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <ListItemIcon><Avatar><MailIcon /></Avatar>
                            </ListItemIcon>
                        </ListItemAvatar>
                        <ListItemText primary='List item 2' secondary='Secondary text' />
                    </ListItemButton>
                </ListItem>
                <Divider/>

                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <ListItemIcon><Avatar><MailIcon /></Avatar>
                            </ListItemIcon>
                        </ListItemAvatar>
                        <ListItemText primary='List item 3' secondary='Secondary text' />
                    </ListItemButton>
                </ListItem>
                <Divider/>

            </List>
        </Box>
    )
}

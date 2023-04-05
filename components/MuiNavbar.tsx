import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Menu, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import React, { useState } from 'react'
import KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown'

export const MuiNavbar = () => {
    const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorE1)
    const onClose = () => {
        setAnchorE1(null)
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorE1(event.currentTarget)
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' id='resources-button' onClick={handleClick}  aria-haspopup='true' aria-expanded={open ? 'true' : undefined} endIcon={<KeyboardArrowDownIcon/>}>Resources</Button>
                    <Button color='inherit'>Contact</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login/SignUp</Button>
                </Stack>
                <Menu id='resources-menu' anchorEl={anchorE1} open={open} MenuListProps={{ 'aria-labelledby': 'resources-button', }} onClose={onClose} anchorOrigin={{vertical: 'bottom',horizontal:'right'}} transformOrigin={{
                    vertical:'top',horizontal:'right'
                }}>

                    <MenuItem onClick={onClose}>Blog</MenuItem>
                    <MenuItem onClick={onClose}>Prodcast</MenuItem>

                </Menu>
            </Toolbar>
        </AppBar>
    )
}

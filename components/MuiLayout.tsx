import { Box, Stack, Divider, Grid ,Paper} from '@mui/material'

export const MuiLayout = () => {
    return (
        <Paper sx={{padding:'32px'}} elevation={4}>
        <Grid>
            <Stack sx={{ border: '1px solid' }} direction='row' spacing={4} divider={<Divider orientation='vertical' flexItem />} >
                <Box sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                    codeevolution

                </Box>
                <Box sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}>
                    codeevolution

                </Box>
            </Stack>
            <Grid container my={4} >
                <Grid item xs><Box bgcolor='primary.light' p={2}>Item-1</Box>

                </Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item-1</Box>

                </Grid>
                <Grid item xs><Box bgcolor='primary.light' p={2}>Item-3</Box>

                </Grid>
                <Grid item xs><Box bgcolor='primary.light' p={2}>Item-3</Box>

                </Grid>
                
                
            </Grid>
        </Grid>
        </Paper>

    )
}

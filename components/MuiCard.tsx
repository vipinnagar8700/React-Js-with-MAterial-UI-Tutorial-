import { Box, Card, CardContent, Typography, CardActions, Button,CardMedia } from '@mui/material'

export const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7rS7C66lliTbNRi7XORmET3jCyqEntusp-qKr7Sn&s' alt='office image'>

                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography gutterBottom variant='body2' color='text.secondary' component='div'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa consectetur itaque, deserunt sequi accusamus facere voluptates nulla animi numquam at eligendi distinctio voluptas, similique dolores sunt vero, earum tempore!</Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

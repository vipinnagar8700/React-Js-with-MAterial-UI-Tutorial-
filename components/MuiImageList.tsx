import { Stack, ImageList, ImageListItem, Box ,ImageListItemBar} from '@mui/material'

export const MuiImageList = () => {
    return (
        <Stack spacing={4}><ImageList sx={{ width: 500, height: 450 }}
            cols={3} rowHeight={164}>
            {
                itemData.map(item => (<ImageListItem key={item.img}><img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                <ImageListItemBar title={item.title}/></ImageListItem>))}</ImageList>
            <ImageList variant='woven' sx={{ width: 500, height: 450 }}
                cols={3} gap={8}>
                {
                    itemData2.map(item => (<ImageListItem key={item.img}><img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' /></ImageListItem>))}</ImageList>
            <Box sx={{ width: 500, height: 450, overflow: 'scroll' }}>
                <ImageList variant='woven'
                    cols={3} gap={8}>
                    {
                        itemData3.map(item => (<ImageListItem key={item.img}><img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' /></ImageListItem>))}</ImageList></Box></Stack>
    )
}
const itemData = [
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'fgvhbjnmk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghj'
    },
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'hbj'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'bhn'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }
]

const itemData2 = [
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'fgvhbjnmk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghj'
    },
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'hbj'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'bhn'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }
]

const itemData3 = [
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'fgvhbjnmk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghj'
    },
    {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'hbj'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'bhn'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }, {
        img: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
        title: 'ghjk'
    }
]

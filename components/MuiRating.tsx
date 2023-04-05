import { Stack, Rating } from '@mui/material'
import React, { useState } from 'react'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
        console.log({ value })
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)

    }

    return (
        <Stack spacing={2}>
            <Rating name="size-small" value={value} onChange={handleChange}  size="small" color='primary' />
            <Rating name="size-medium" value={value} onChange={handleChange}  defaultValue={2} />
            <Rating name="size-large" value={value} onChange={handleChange}  defaultValue={2} size="large" />

        </Stack>
    )
}

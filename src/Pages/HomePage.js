import { Stack } from '@mui/material';
import CategoryNavigation from '../Components/CategoryNavigation';
import React from 'react'

export default function HomePage() {
    return (
        <Stack sx={{ flexDirection: "row" }}>
            <CategoryNavigation />
        </Stack>
    )
}

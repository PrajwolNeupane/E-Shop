import { Stack, Typography } from '@mui/material';
import CategoryNavigation from '../Components/CategoryNavigation';
import DealerNavigation from '../Components/DealerNavigation';
import ProductIcon from '../assets/icons/ProductIcon.svg';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react'
import { Star } from '@mui/icons-material';

export default function HomePage() {

    const theme = useTheme();

    const SingleProduct = () => {
        return (
            <Stack sx={{ padding: "10px", width: "180px",backgroundColor:"white",borderRadius:"12px",gap:"5px"}}>
                <img src={"https://manasluguitar.com/wp-content/uploads/2020/09/manaslu-atal-guitar-01.jpg"} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <Typography variant='h4' sx={{color:"text.mid",fontSize:"16px"}}>
                    Manaslu Atal Semi Acoustic Guitar
                </Typography>
                <Typography variant='h3' sx={{color:"secondary.main",fontSize:"16px"}}>
                    Rs 20,000
                </Typography> 
                <Stack>
                    <Star sx={{backgroundColor:"red"}}/>
                </Stack>
            </Stack>
        )
    }

    return (
        <>
            <CategoryNavigation />
            <Stack sx={{ marginLeft: "30%", marginTop: "calc(-100vh + 80px)", width: "70%", backgroundColor: "primary.light" }}>
                <DealerNavigation />
                <Stack sx={{ height: "150vh", padding: "0px 5%", gap: "15px" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                        <img src={ProductIcon} style={{ width: "60px" }} />
                        <Typography variant='h3' sx={{ fontSize: "22px", color: "text.main" }}>Products</Typography>
                    </Stack>
                    <hr style={{ width: "100%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
                    <Stack sx={{ flexDirection: "row", flexWrap: "wrap",justifyContent:"space-between" }}>
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

import { Stack, Typography, useMediaQuery } from '@mui/material';
import CategoryNavigation from '../Components/CategoryNavigation';
import DealerNavigation from '../Components/DealerNavigation';
import ProductIcon from '../assets/icons/ProductIcon.svg';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function HomePage() {

    const theme = useTheme();

    const smMatch = useMediaQuery('(min-width:700px)');

    const SingleProductContainer = styled(Stack)(({ theme }) => ({
        padding: "10px",
        width: "180px",
        backgroundColor: "white",
        borderRadius: "12px",
        gap: "5px",
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 0px 0px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        ":hover": {
            filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))",
            boxShadow: "none"
        },
        cursor: "pointer",
        [theme.breakpoints.down('md')]: {
            width: "200px",
            backgroundColor: "red"
        },
    }))

    const SingleProduct = () => {
        return (
            <SingleProductContainer >
                <img src={"https://manasluguitar.com/wp-content/uploads/2020/09/manaslu-atal-guitar-01.jpg"} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <Typography variant='h4' sx={{ color: "text.mid", fontSize: "16px" }}>
                    Manaslu Atal Semi Acoustic Guitar
                </Typography>
                <Typography variant='h3' sx={{ color: "secondary.main", fontSize: "16px" }}>
                    Rs 20,000
                </Typography>
                <Stack sx={{ flexDirection: "row" }}>
                    <StarRoundedIcon sx={{ color: `${theme.palette.otherColor.golden}` }} />
                    <StarRoundedIcon sx={{ color: `${theme.palette.otherColor.golden}` }} />
                    <StarRoundedIcon sx={{ color: `${theme.palette.otherColor.golden}` }} />
                    <StarRoundedIcon sx={{ color: `${theme.palette.otherColor.golden}` }} />
                    <StarRoundedIcon sx={{ color: `${theme.palette.primary.main}` }} />
                </Stack>
            </SingleProductContainer>
        )
    }

    return (
        <>
            {
                smMatch ? <CategoryNavigation /> : <></>
            }

            <Stack sx={{ marginLeft: `${smMatch?"30%":"0px"}`, marginTop: `${smMatch ? "calc(-100vh + 80px)" :"0px"}`, width: `${smMatch? "70%" :"100%"}`, backgroundColor: "primary.light" }}>
                <DealerNavigation />
                <Stack sx={{ padding: "10px 5%", gap: "15px" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                        <img src={ProductIcon} style={{ width: "60px" }} />
                        <Typography variant='h3' sx={{ fontSize: "22px", color: "text.main" }}>Products</Typography>
                    </Stack>
                    <hr style={{ width: "100%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
                    <Stack sx={{ flexDirection: "row", backgroundColor: "yellow", flexWrap: "wrap", justifyContent: "space-between", gap: "15px", paddingBottom: "20px", alignItems: "center" }}>
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
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

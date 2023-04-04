import React, { useState, useRef, useEffect } from 'react';
import { Button, Stack, Typography, useMediaQuery, Badge } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function NavBar() {

    const theme = useTheme();
    const InputRef = useRef(null);
    const matches = useMediaQuery('(min-width:1200px)');


    const AppBar = styled(Stack)(({ theme }) => ({
        backgroundColor: theme.palette.primary.mid,
        padding: "20px 5%",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0px",
        zIndex: 3,
        flexDirection: "row",
        [theme.breakpoints.down('smd')]: {
            padding: "20px 3%",
            width: "94%",
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }))

    const MobileAppBar = styled(Stack)(({ theme }) => ({
        display: "none",
        backgroundColor: theme.palette.primary.mid,
        padding: "20px 5%",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            display: "flex"
        }
    }))

    return (
        <>
            <AppBar id='app'>
                <Typography variant='h1' sx={{ letterSpacing: "-1px", fontSize: "30px", color: "text.main" }}>
                    E-SHOP
                </Typography>
                <Stack sx={{ flexDirection: "row", width: "40%", backgroundColor: "primary.light", padding: "5px 20px", borderRadius: "12px", border: `1px solid ${theme.palette.text.light}`, alignItems: "center", gap: "5px" }}>
                    <input placeholder='Search your Products' ref={InputRef} style={{
                        outline: "none", border: "none", backgroundColor: `transparent`, fontSize: "14px", color: `${theme.palette.text.mid}`, fontWeight: 400, width: "100%"
                    }} />
                    <SearchIcon sx={{ color: "text.mid", cursor: "pointer" }} onClick={() => {
                        console.log(InputRef.current.value);
                    }} />

                </Stack>
                <Stack sx={{ flexDirection: "row", alignItems: "center", gap: `${!matches ? "40px" : "80px"}` }}>
                    <Typography variant='h4' sx={{ fontSize: "16px", color: "text.mid" }}>Home</Typography>
                    <Button disableRipple sx={{
                        color: "text.mid", fontSize: "16px", border: `1px solid ${theme.palette.text.mid}`, padding: "5px 40px",
                        backgroundColor: "transparent", borderRadius: "12px",
                        transition: ".5s",
                        ":hover": {
                            backgroundColor: "text.mid",
                            color: "primary.mid"
                        }

                    }}>
                        Log in
                    </Button>
                </Stack>
            </AppBar>
            <MobileAppBar>
                <MenuRoundedIcon sx={{ color: "text.main", fontSize: "30px" }} />
                <Stack sx={{ flexDirection: "row", gap: "30px" }}>
                    <SearchRoundedIcon sx={{ color: "text.mid", fontSize: "30px" }} />
                    <Badge sx={{
                        "& .MuiBadge-badge": {
                            color: "primary.light",
                            backgroundColor: "otherColor.success"
                        }
                    }} badgeContent={2} >
                        <ShoppingCartRoundedIcon sx={{ color: "text.mid", fontSize: "30px" }} />
                    </Badge>
                </Stack>
            </MobileAppBar>
        </>
    )
}

import React, { useState ,useRef, useEffect} from 'react';
import { Button, Stack, Typography,Input } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {

    const theme = useTheme();

    const InputRef = useRef(null);


    const AppBar = styled(Stack)(({ theme }) => ({
        backgroundColor: theme.palette.primary.mid,
        padding: "20px 5%",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0px",
        zIndex: 3,
        flexDirection: "row"
    }))

    return (
        <AppBar id='app'>
            <Typography variant='h1' sx={{ letterSpacing: "-1px", fontSize: "30px", color: "text.main" }}>
                E-SHOP
            </Typography>
            <Stack sx={{ flexDirection: "row", width: "40%", backgroundColor: "primary.light", padding: "5px 20px", borderRadius: "12px", border: `1px solid ${theme.palette.text.light}`, alignItems: "center", gap: "5px" }}>
                <input placeholder='Search your Products' ref={InputRef} style={{
                    outline: "none", border: "none", backgroundColor: `transparent`, fontSize: "14px", color: `${theme.palette.text.mid}`, fontWeight: 400, width:"100%"
                }}/>
                <SearchIcon sx={{ color: "text.mid",cursor:"pointer" }} onClick={()=>{
                    console.log(InputRef.current.value);
                }}/>
                
            </Stack>
            
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "80px" }}>
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
    )
}

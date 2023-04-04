import { Drawer, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { CategoryIcon } from './Icons.js';
import { CategoryList } from '../assets/data.js';
import React from 'react'

export default function MobileDrawer({ open, setOpen }) {

    const theme = useTheme();

    return (
        <Drawer anchor='left' open={open} onClose={() => {
            setOpen(false)
        }}>
            <Stack sx={{ width: "70vw", height: "100vh", backgroundColor: "primary.mid", padding: "20px 0%", gap: "20px", alignItems: "flex-start" }} role='presentation'>
                <Typography variant='h1' sx={{ marginLeft: "10%", letterSpacing: "-1px", fontSize: "40px", color: "text.main" }}>
                    E-SHOP
                </Typography>
                <Stack sx={{ gap: "10px", width: "80%", marginLeft: "10%" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "15px" }}>
                        <CategoryIcon strokeColor={theme.palette.text.main} width={"30"} height={"32"} fillColor={"none"} stroke={"3"} />
                        <Typography variant='h3' sx={{ fontSize: "20px", color: "text.main" }}>Categories</Typography>
                    </Stack>
                    <hr style={{ width: "100%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
                    {
                        CategoryList.map((curr, indx) => {
                            return (
                                <>
                                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "15px", width: "80%" }}>
                                        <img src={curr.icon} style={{width:"25px"}}/>
                                        <Typography variant='h4' sx={{ fontSize: "16px" }}>{curr.title}</Typography>
                                    </Stack>
                                    <hr style={{ width: "100%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
                                </>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Drawer>
    )
}

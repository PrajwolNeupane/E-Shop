import { Drawer, Stack } from '@mui/material'
import React from 'react'

export default function MobileDrawer({open,setOpen}) {
  return (
    <Drawer anchor='left' open={open} onClose={()=>{
        setOpen(false)
    }}>
        <Stack sx={{width:"70vw",height:"100vh",backgroundColor:"primary.mid"}} role='presentation'>

        </Stack>
    </Drawer>
  )
}

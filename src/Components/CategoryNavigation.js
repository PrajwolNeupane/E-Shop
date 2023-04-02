import { Box, Stack, Typography } from '@mui/material';
import { CategoryIcon,ClotheIcon,BeautyIcon,MusicalIcon,KitchenIcon,AccessoriesIcon,PetsIcon } from './Icons.js';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react'

export default function CategoryNavigation() {

  const theme = useTheme();

  const IconContainer = ({ Icon, Text }) => {
    return (
      <Stack sx={{ flexDirection: "row", alignItems: "center",gap:"5%" }}>
        {Icon}
        {Text}
      </Stack>
    );
  }


  return (
    <Stack sx={{ width: "20%", padding: "0px 5% 20px 5%", height: "calc(100vh - 120px)", backgroundColor: "primary.mid", position: "sticky", top: "80px", gap: "15px" ,overflowY:"auto",overflowX:"hidden"}} className='container'>
      <Stack sx={{flexDirection: "row",paddingTop:"20px" ,alignItems: "center",gap:"5%",position:"sticky",top:"0px",backgroundColor:"primary.mid",zIndex:2}} >
          <CategoryIcon strokeColor={theme.palette.text.main} width={"30"} height={"32"} fillColor={"none"} stroke={"3"} />
          <Typography variant='h3' sx={{ fontSize: "20px", color: "text.main" }}>Category</Typography>
        </Stack>
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.mid}`}}/>
      <IconContainer
        Icon={<ClotheIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Clothes</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<BeautyIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Beauty & Health</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<MusicalIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Musical Instruments</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<KitchenIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Home Appliances</Typography>} />
      <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<AccessoriesIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Beauty & Health</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={< PetsIcon/>}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Musical Instruments</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<AccessoriesIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Beauty & Health</Typography>} />
      <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={< PetsIcon/>}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Musical Instruments</Typography>} />
        <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={<AccessoriesIcon />}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Beauty & Health</Typography>} />
       <hr style={{ width: "110%",opacity:0.7,borderBottom:`1px solid ${theme.palette.text.light}`}}/>
      <IconContainer
        Icon={< PetsIcon/>}
        Text={<Typography variant='h4' sx={{ fontSize: "18px", color: "text.mid" }}>Musical Instruments</Typography>} />
    </Stack>
  )
}

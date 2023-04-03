import { Stack, Typography } from '@mui/material';
import { CategoryIcon } from './Icons.js';
import { styled, useTheme } from '@mui/material/styles';
import { CategoryList } from '../assets/data.js';
import React from 'react'

export default function CategoryNavigation() {

  const theme = useTheme();

  const IconContainer = ({ Icon, Text }) => {
    return (
      <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "5%" }}>
        <img src={Icon} style={{width:"28px"}}/>
        {Text}
      </Stack>
    );
  }


  return (
    <Stack sx={{ width: "20%", padding: "0px 5% 20px 5%", height: "calc(100vh - 100px)", backgroundColor: "primary.light", position: "sticky", top: "80px", gap: "15px", overflowY: "auto", overflowX: "hidden" }} className='container'>
      <Stack sx={{ flexDirection: "row", paddingTop: "20px", alignItems: "center", gap: "5%", position: "sticky", top: "0px", backgroundColor: "primary.light", zIndex: 2 }} >
        <CategoryIcon strokeColor={theme.palette.text.main} width={"30"} height={"32"} fillColor={"none"} stroke={"3"} />
        <Typography variant='h3' sx={{ fontSize: "22px", color: "text.main" }}>Category</Typography>
      </Stack>
      <hr style={{ width: "110%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
      {
        CategoryList.map((curr, indx) => {
          return (
            <>
              <IconContainer
                Icon={curr.icon}
                Text={<Typography variant='h3' sx={{ fontSize: "16px", color: "text.mid" }}>{curr?.title}</Typography>} />
              <hr style={{ width: "110%", opacity: 0.4, borderBottom: `1px solid ${theme.palette.text.light}` }} />
            </>
          )
        })
      }


    </Stack>
  )
}

import { Stack, Typography } from '@mui/material';
import { CategoryIcon } from './Icons.js';
import { styled, useTheme } from '@mui/material/styles';
import { StoreList } from '../assets/data.js';
import ShopIcon from '../assets/icons/ShopIcon.svg';
import React from 'react'

export default function DealerNavigation() {

  const theme = useTheme();

  return (
    <Stack sx={{ width: "80%", padding: "20px 5%", backgroundColor: "primary.light", gap: "15px",height:"240px" }}>
      <Stack sx={{ flexDirection: "row", gap: "10px" }}>
        <img src={ShopIcon} style={{ width: "40px" }} />
        <Typography variant='h3' sx={{ fontSize: "22px", color: "text.main" }}>Best Dealer</Typography>
      </Stack>
      <hr style={{ width: "110%", opacity: 0.7, borderBottom: `1px solid ${theme.palette.text.mid}` }} />
      <Stack sx={{ flexDirection: "row", width: "100%", justifyContent: "space-between",gap:"10px" }}>
        {
          StoreList.map((curr, indx) => {
            return (
              <Stack key={indx} sx={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 0px 0px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                backgroundColor: "white", borderRadius: "12px", padding: "5px 5px", alignItems: "center", gap: "5px", width: "100px", gap: "5px",cursor:"pointer" ,":hover": {
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))",
                  boxShadow:"none"
                }
              }}>
                <img src={curr?.image} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <Typography variant='h4' sx={{ fontSize: "16px", color: "text.mid", textAlign: "center" }}>{curr?.title}</Typography>
              </Stack>
            )
          })
        }
      </Stack>
    </Stack>
  )
}

import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const theme = createTheme({
    palette:{
        primary:{
        main: "#E3E3E3",
        mid:"#F0EEEE",
        light: "#F9F7F7"
        },
        secondary:{
        main:"#297AD8",
        mid:"#3584E0",
        light:"#4995ED",
        },
        text:{
          main:"#252828",
          mid:"#2D3131",
          light:"#3C4141"
        },
        otherColor:{
        success:"#40C13D",
        fail:"#BE352C"
        }
    },
    overrides: {
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: "#232f3e",
          },
        },
      },
      typography:{
        fontFamily:font,
        h1:{fontWeight:800},//EB
        h2:{fontWeight:700},//B
        h3:{fontWeight:600},//SB
        h4:{fontWeight:500},//M
        h5:{fontWeight:400},//R
        p:{fontWeight:400},//R,
        button:{
          textTransform:"none"
        }
      },
        
});
export default theme;
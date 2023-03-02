import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    }
  },
  typography: {
    h4: {
      color: '#e6c8b8',
      fontWeight: 'lighter',
      textTransform: 'lowercase',
    }
  }
})

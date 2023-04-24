import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#82498c',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#a75eb4',
      contrastText: '#ffff',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
  },
});

export default defaultTheme;

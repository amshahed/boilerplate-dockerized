import { createTheme } from '@material-ui/core/styles';

let theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: {
            main: '#002984',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#F06292',
            contrastText: '#000000',
        },
    },
});

export default theme;

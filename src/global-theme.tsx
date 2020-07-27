import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const colorPalette = {
  green: '#77dd77',
  grey: '#efefef',
  pink: '#f08eb4',
  pinkDark: '#bd6184',
  purple: '#8364eb',
  purpleDark: '#7d61d9',
  red: '#ff6961',
  white: '#ffffff',
  yellow: '#f1bd65',
};

let theme = createMuiTheme({
  palette: {
    primary: {
      main: colorPalette.purple,
      dark: colorPalette.purpleDark,
    },
    secondary: {
      main: colorPalette.pink,
      contrastText: colorPalette.white,
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        height: '4rem',
        width: '22rem',
        maxWidth: '17.5rem',
        color: colorPalette.white,
        borderRadius: '30px',
        boxShadow: 'unset',
        fontFamily: 'sans-serif',
        fontWeight: 600,
      },
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: '2.188rem',
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: colorPalette.pink,
      },
    },
    MuiTypography: {
      root: {
        fontFamily: 'sans-serif',
        fontWeight: 600,
        color: colorPalette.white,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontSize: theme.typography.pxToRem(160),
};

theme.typography.h2 = {
  fontSize: theme.typography.pxToRem(48),
};

theme.typography.h3 = {
  fontSize: theme.typography.pxToRem(24),
};

theme.typography.body1 = {
  fontSize: theme.typography.pxToRem(16),
};

theme.typography.body2 = {
  fontSize: theme.typography.pxToRem(20),
  textDecoration: 'underline',
};

theme.typography.button = {
  fontSize: theme.typography.pxToRem(26),
};

export default theme;

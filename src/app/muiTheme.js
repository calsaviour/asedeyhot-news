import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const autoComplete = getMuiTheme({
  palette: {
    accent1Color: '#ff9800', // selected tab
    accent2Color: '#000013',
    accent3Color: 'grey500',
    primary1Color: '#000013', // appbar color
    primary2Color: '#000013',
    primary3Color: '#000013',
    textColor: '#159588', // text color
    alternateTextColor: '#ff9800', // tabs
    canvasColor: '#000000',
    borderColor: 'transparent', // text-field border color
    disabledColor: '#159588', // hint-text color
  }
});

export const header = getMuiTheme({
  palette: {
    accent1Color: '#ff9800', // selected tab
    accent2Color: '#000013',
    accent3Color: 'grey500',
    primary1Color: '#000013', // appbar color
    primary2Color: '#000013',
    primary3Color: '#000013',
    textColor: '#ff9800', // text color
    alternateTextColor: '#ff9800', // tabs
    canvasColor: '#ffffff',
    borderColor: '#1e1b38',
    disabledColor: '#88c6ff',
    pickerHeaderColor: '#4b96ff',
    clockCircleColor: '#4b96ff',
    shadowColor: '#0069cb',
  }
});

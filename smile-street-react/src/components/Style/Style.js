import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: cyan,
  },
});

export default makeStyles(() => ({
  root: {
    flexGrow: 1,

    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#53bd98',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#449f80',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#449f80',
    },

    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#449f80',
    },
    margin: 8,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 'xs',
  },
  form: {
    width: '100%',
  },
  button: {
    backgroundColor: '#53bd98',
    color: 'white',
    '&:hover': {
      background: '#449f80',
    },
  },
  h1: {
    color: '#53bd98',
  },
}));

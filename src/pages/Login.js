import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard" label="NAME" defaultValue=" " variant="filled" />
        <TextField
          error
          id=" "
          label="Email"
          defaultValue=" "
          helperText=" "
          variant="filled"
        />
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Send
      </Button>
      </div>
    </form>
  );
}
import React from 'react';
import { Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Toast = ({ message, severity, open, handleClose }) => {
    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      handleClose();
    };
  
    return (
      <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={severity}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    );
  };

  export default Toast;
  
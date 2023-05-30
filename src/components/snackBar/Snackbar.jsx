import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MyComponent() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const fetchData = () => {
    axios.get('your-api-endpoint')
      .then(response => {
        // Process the data and update your component state
        setOpenSnackbar(true);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={fetchData}>Fetch Data</button>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Data fetched successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MyComponent;

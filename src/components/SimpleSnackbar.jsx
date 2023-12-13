import { forwardRef, Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar({ snackbar }) {
  const { vertical, horizontal, open } = snackbar;

  return (
    <Fragment>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Enjoy and have a great day!
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

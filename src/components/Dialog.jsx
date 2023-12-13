import { Fragment, useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import PlusMinusButton from './PlusMinusButton.jsx';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import { currencyFormatter, totalCoins } from '../utils/utils.js';
import SimpleSnackbar from './SimpleSnackbar.jsx';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const options = ['pennies', 'nickels', 'dimes', 'quarters'];

const initialCounts = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
};

export default function ConfirmationDialog(props) {
  const { onClose, open, product, removeProduct } = props;
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState(initialCounts);
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackBarOpen] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleSnackbarOpen = () => {
    setSnackBarOpen({
      open: true,
      vertical: 'top',
      horizontal: 'center',
    });
  };

  const handleSnackbarClose = () => {
    setSnackBarOpen(false);
  };

  const hasEnoughMoney = total >= product.price;

  const change = (total - product.price).toFixed(2);

  const handleReset = () => {
    setCounts(initialCounts);
    setTotal(0);
    setMessage('');
    onClose();
  };

  const handleBuy = () => {
    if (!hasEnoughMoney) {
      return;
    }
    removeProduct(product.uuid);
    handleReset();
    handleSnackbarOpen();
    setTimeout(() => {
      handleSnackbarClose();
    }, 1500);
  };

  const handleIncrementCount = (key) => {
    var updated = {
      ...counts,
      [key]: counts[key] + 1,
    };
    setCounts(updated);
    const updatedTotal = totalCoins(updated);
    setTotal(updatedTotal);
    setMessage(
      updatedTotal >= product.price
        ? `Your change will be: $${(updatedTotal - product.price).toFixed(2)}`
        : `You need additional: $${-(updatedTotal - product.price).toFixed(3)}`
    );
  };

  const handleDecrementCount = (key) => {
    if (counts[key] === 0) {
      return;
    }
    const updated = {
      ...counts,
      [key]: counts[key] - 1,
    };
    setCounts(updated);
    const updatedTotal = totalCoins(updated);

    setTotal(totalCoins(updated));
    setMessage(
      updatedTotal >= product.price
        ? `Your change will be: ${currencyFormatter.format(
            updatedTotal - product.price
          )}`
        : `You need: ${currencyFormatter.format(product.price - updatedTotal)}`
    );
  };

  return (
    <Fragment>
      {snackbarOpen && <SimpleSnackbar snackbar={snackbarOpen} />}
      <Dialog className="dialog" maxWidth="sm" open={open}>
        <DialogTitle className="dialogTitle">Insert coins</DialogTitle>
        <DialogContent dividers>
          <List>
            {options.map((option) => {
              return (
                <ListItem
                  key={option}
                  secondaryAction={
                    <PlusMinusButton
                      count={counts[option]}
                      countKey={option}
                      handleIncrementCount={handleIncrementCount}
                      handleDecrementCount={handleDecrementCount}
                    />
                  }
                >
                  <ListItemText primary={option} />
                </ListItem>
              );
            })}
            <Divider className="dialogDivider" light />
            <Typography gutterBottom variant="subtitle1" component="div">
              {`total: ${currencyFormatter.format(total)}`}{' '}
            </Typography>
          </List>
          {message && (
            <Alert severity={change >= 0 ? 'success' : 'error'}>
              {message}
            </Alert>
          )}
        </DialogContent>
        <div className="dialogButtons">
          <button onClick={handleBuy} disabled={!hasEnoughMoney}>
            Buy
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </Dialog>
    </Fragment>
  );
}

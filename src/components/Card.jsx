import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ConfirmationDialog from './Dialog.jsx';
import { currencyFormatter } from '../utils/utils.js';

export default function InteractiveCard({ product, removeProduct }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (product.quantity === 0) {
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getHover = () => {
    return product.quantity > 0
      ? {
          boxShadow: 20,
          cursor: 'pointer',
        }
      : {
          boxShadow: 0,
          cursor: 'not-allowed',
        };
  };

  const getContentColor = (theme) =>
    product.quantity > 0
      ? theme.palette.text.primary
      : theme.palette.text.disabled;

  return (
    <Fragment>
      <Card
        className="vendingOption"
        sx={{ ':hover': getHover }}
        onClick={handleClick}
      >
        <CardMedia
          className="vendingOptionMedia"
          component="img"
          image={product.icon}
          alt={product.name}
        />
        <CardContent
          className="vendingOptionContent"
          sx={{ color: getContentColor }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h8" component="div" disabled>
            {`available: ${product.quantity}`}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
            {`price: ${currencyFormatter.format(product.price)}`}
          </Typography>
        </CardContent>
      </Card>
      <ConfirmationDialog
        id="payment-dialog"
        keepMounted
        open={open}
        onClose={handleClose}
        product={product}
        removeProduct={removeProduct}
      />
    </Fragment>
  );
}

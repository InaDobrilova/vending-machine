import { Fragment } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function SimpleContainer({ title, children }) {
  return (
    <Fragment>
      <Typography gutterBottom variant="h1" component="div">
        {title}
      </Typography>
      <Container className="appContainer" maxWidth="lg">
        {children}
      </Container>
    </Fragment>
  );
}

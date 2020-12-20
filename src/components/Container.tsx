import { Fragment } from 'react';
import Container from '@material-ui/core/Container';

const DesktopContainer = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="md">{children}</Container>
    </Fragment>
  );
};

export default DesktopContainer;

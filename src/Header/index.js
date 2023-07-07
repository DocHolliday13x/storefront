import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6">React App</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Header;









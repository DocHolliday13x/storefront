import { AppBar, Container, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6">Uncle Buzz`&apos`s Store of Forbidden Goods</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}



export default Header;









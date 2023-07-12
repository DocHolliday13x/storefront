import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { useSelector} from 'react-redux';


function Header() {
  const cart = useSelector(state => state); // Use the entire state array as the value for cart
  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Our Store</Typography>
            </Grid>
            <Grid item xs style={{ textAlign: 'right', alignSelf: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Cart ({cart.length})</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}



export default Header;



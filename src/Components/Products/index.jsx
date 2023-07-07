import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
});

function Products() {
  const classes = useStyles();
  const products = useSelector(state => state.products);

  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={product.image}
              title={product.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" component={Link} to={`/products/${product.id}`}>
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}


export default Products;









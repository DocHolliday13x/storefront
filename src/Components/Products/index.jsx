import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import '../../App.css';

function Products() {
    const { products } = useSelector(state => state.ProductsReducer);
    console.log('products', products);

    return (
        products.map((product, index) => (
            <>
                {
                    <Grid className="product" item xs={12} sm={6} md={4} lg={3} key={`product-${index}`}>
                        <Card variant="outlined" sx={{ maxWidth: 345 }}>
                          <CardMedia id="product-image" 
                            component="img" 
                            height="140" 
                            title={product.name} 
                            image={`https://source.unsplash.com/random/?${product.name}}`}
                            alt={product.title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Name: {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Price: ${product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              In Stock: {product.inStock}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Add to Cart</Button>
                            <Button size="small">View Details</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                }
            </>
        ))
    )
}


export default Products;









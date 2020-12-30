import React from 'react'
import {Card,CardMedia,CardActions,CardContent,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './style'

const Product=({product})=>{
    const classes=useStyles()
    
  console.log(product)
  
  return(<>
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={Product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
               <Typography variant='h6' gutterBottom>
                   {product.name}
               </Typography>
               <Typography variant='h6'>
                   {product.price.formatted_with_symbol}
               </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html:product.description}}  variant='body2' color='textSecondary' />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card>
</>)
}

export default Product
import React from 'react'
import {AppBar,Toolbar,IconBUtton,Badge,MenuItem,Menu,Typography, IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

const Navbar=()=>{
    const classes=useStyles()
    return(<>
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
          <Typography variant='h5' className={classes.title} color='inherit'>
              <img src='' className={classes.image} height='25px'/>
              Webshop
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
          <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                  <ShoppingCart/>
              </Badge>
          </IconButton>
          </div>
      </Toolbar>
    </AppBar>
    </>)
}

export default Navbar
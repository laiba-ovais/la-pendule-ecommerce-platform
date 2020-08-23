import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from 'react-bootstrap/Container'
import {ProductConsumer} from '../../components/Course/contex'
import {Link} from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    color:'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
    borderRadius: '15px 15px 15px 15px',
    background: '#343a40',
    height: '300px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'black',
  },
  titleBar: {
    background:
      'transparent',
  },
}));

export default function GridWatches({productID, product_name, courseImage, price}) {
  const classes = useStyles();
  return (
    <ProductConsumer >
    {(value)=>{

    return(
    <Container className="mt-3 mb-5" >
    <div className={classes.root}>
    <h1>More Watches</h1>
      <GridList  className={classes.gridList} cols={2.5}> 
        {value.products.map((product,i) => (
           
           
          <GridListTile onClick={()=>value.handleDetail(product.productID)} key={product.productID}>
            <Link to={{ pathname: '/courses/' + product.productID }} >
            <img  src=  {`https://graphite-sphere-286919.uc.r.appspot.com/static/${product.productID}.png`}  width="600px" height="250px" alt={product.product_name} />
            <GridListTileBar
              title={product.product_name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${product.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
             </Link>
          </GridListTile>
          
          
        ))}
      </GridList>
    </div>
    </Container>);}}
    </ProductConsumer>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {CourseDetails} from '../../components/Course/CourseDetails'
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
    background: 'linear-gradient(90deg, rgba(44,11,61,1) 0%, rgba(9,51,111,1) 0%, rgba(42,150,166,0.9752275910364145) 0%, rgba(8,74,76,1) 0%, rgba(11,67,105,1) 0%, rgba(43,97,147,1) 0%, rgba(7,42,57,1) 0%, rgba(22,172,150,1) 50%, rgba(7,41,54,1) 100%, rgba(7,41,51,1) 100%, rgba(7,40,47,1) 100%)'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function GridWatches({_id, courseTitle, courseImage, price}) {
  const classes = useStyles();
  return (
    <ProductConsumer >
    {(value)=>{
        
        
    return(
    <Container className="mt-3 mb-5" >
    <div className={classes.root}>
    <h1>More Watches</h1>
      <GridList  className={classes.gridList} cols={2.5}> 
        {value.products.map((product) => (
            //yahan hoga naa?kya
            <Link to={{ pathname: '/courses/' + product._id, state: CourseDetails[i]._id , key:CourseDetails[i]._id }}    >
          <GridListTile onClick={value.handleDetail(CourseDetails[i]._id)} key={tile._id}>
            <img src={require(`../../static/images/services/${i+1}.png`)} alt={title.courseTitle} />
            <GridListTileBar
              title={tile.courseTitle}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
          </Link>
        ))}
      </GridList>
    </div>
    </Container>);}}
    </ProductConsumer>
  );
}

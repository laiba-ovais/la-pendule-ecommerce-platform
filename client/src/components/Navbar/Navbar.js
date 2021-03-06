import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link ,withRouter} from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';
import {ButtonContainer} from "../Button/Button"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ProductConsumer} from '../Course/contex';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      fontFamily: 'Comic Sans MS, cursive, sans-serif',
      color: 'white',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    
  },
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem>
                  <Link to= '/register' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGNUP  
                  </Typography></Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to= '/signin' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGN IN   
                  </Typography></Link>
                  </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/profile"><p>Profile</p></Link>
        
      </MenuItem>
    </Menu>
  );
  
  return (
    
    
<ProductConsumer>
        {
          (value)=>{
            const {cart} = value;
            console.log(cart.length)

            return( <div className={classes.grow}>
              <div>
              <AppBar display="block" position="static" width="100" >
                <Toolbar> 
                  {/* <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                  >
                    <MenuIcon />
                  </IconButton> */}
                 <Link to= '/' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   HOME   
                  </Typography></Link> 
                  {/* <MenuItem>
                  <Link to= '/About' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   ABOUT   
                  </Typography></Link>
                  </MenuItem> */}
                  {/* <AutoComplete ></AutoComplete> */}
                  <SearchBar searchChange={value.searchChange} ></SearchBar>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                  {value.signedin?(
                    <MenuItem>
                    <Typography  onClick={value.onLoggout} className={classes.title} variant="h6" noWrap>
                    LOGOUT
                    </Typography>
                    </MenuItem>
                    // <Button type="button" onClick={value.onLoggout}  className="btn btn-primary">loggOut</Button>
                  ) : (
                  <div className={classes.sectionDesktop}>
                  <MenuItem>
                  <Link to= '/register' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGNUP  
                  </Typography></Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to= '/signin' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGN IN   
                  </Typography></Link>
                  </MenuItem>
                  </div> )}
                  
                  
                  {/* <MenuItem>
                  <Link to= '/register' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGNUP  
                  </Typography></Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to= '/signin' id='titleatag' className='zoom' ><Typography className={classes.title} variant="h6" noWrap>
                   SIGN IN   
                  </Typography></Link>
                  </MenuItem>
                   */}
                  <Link to= '/cart'>
                  <IconButton
                    color="inherit"
                    aria-label="cart"
                  >
                  <Badge badgeContent={value.cart.length} color="secondary">
                  <ShoppingCartIcon  style={ { fontSize: 30 , color: "white"}}/>
                  </Badge>
                  </IconButton>
                  </Link>


                  

                  
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                      <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton> */}
{/* 
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                    <IconButton
                      aria-label="show more"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      color="inherit"
                    >
                      <MoreIcon />
                    </IconButton> */}
                    
                  </div>
                </Toolbar>
              </AppBar>
              </div>
              
              {/* {renderMobileMenu} */}
              {renderMenu}
            </div>)}}
  </ProductConsumer>
    
  );
}
export default Navbar;
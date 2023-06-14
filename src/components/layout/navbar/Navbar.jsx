import "../navbar/Navbar.modules.css"
import CartWidwet from '../../cartWidwet/cartWidwet';
import { Link } from "react-router-dom";
import { MenuNavigate } from "../../../routes/MenuNavigate";

function Navbar(){
  return(
    <div className='m-3 container-fluid d-flex justify-content-evenly align-items-center'>

              <a href="/" className='text-white text-decoration-none d-flex justify-content-center'>
                <img style={{width:"60px", marginLeft:"6px"}} src={"../imgs/target.png"} alt="target" />
                <h1 className='m-2 align-self-center'>ImpactGuns</h1>
              </a>

                <ul className="d-flex flex-row justify-content-around align-items-center list-unstyled">
                  
                  <li className="me-4 dropdown">
                      <Link className="text-white text-decoration-none dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/guns">
                        Guns
                      </Link>
                    <ul className="dropdown-menu">
                      <li>
                        {
                            //el id y el path deben ser iguales para que al usar filer en ItemListContainer, verifique si ambos son iguales y entonces hacer el filtrado.
                            MenuNavigate.map(({ id, path, title }) => (
                            <Link className="dropdown-item" key={id} to={path}>
                              {title}
                            </Link>
                            )) 
                        }
                      <hr className="dropdown-divider"/>
                      </li>
                    </ul>
                  </li>

                  <li className="me-4 dropdown">
                    <a className="text-white text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Ammo
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Assault Rifes</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sub Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Light Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Shotguns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sniper Rifle</a></li>
                    </ul>
                  </li>

                  <li className="me-4 dropdown">
                    <a className="text-white text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Accessories
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Assault Rifes</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sub Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Light Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Shotguns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sniper Rifle</a></li>
                    </ul>
                  </li>

                  <li className="me-4 dropdown">
                    <a className="text-white text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Clothes
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Assault Rifes</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sub Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Light Machine Guns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Shotguns</a><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Sniper Rifle</a></li>
                    </ul>
                  </li>

                  <li>
                    <a className="text-white text-decoration-none" href="#" role="button"  aria-expanded="false">
                      About us
                    </a>
                  </li>
                  
                </ul>

                <div className="me-4">
                  <Link to="/carrito">
                    <CartWidwet/>
                  </Link>
                </div>

    </div>
  )
}



export default Navbar;





/* import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidwet from '../../cartWidwet/cartWidwet';

const pages = ['Guns', 'Ammo', 'Accesories', 'About us'];

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <img style={{width:"40px"}} src={"../imgs/target.png"} alt="target" />
                <Typography id="res" variant="h4" noWrap component="a" href="/" sx={{mr: 2,display: { xs: 'none', md: 'flex' }, letterSpacing: '.3rem',color: 'white',textDecoration: 'none', marginLeft:"10px"}}>
                    ImpactGuns 
                </Typography>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                    <MenuIcon />
                </IconButton>
                
                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left'}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left'}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }}}>
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"space-around" }}>
                {pages.map((page) => (
                  <Button id='res' key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block'}}>
                    {page}
                  </Button>
                ))}
              </Box>

              <CartWidwet/>

    
            </Toolbar>
          </Container>
        </AppBar>
  );
  
} */
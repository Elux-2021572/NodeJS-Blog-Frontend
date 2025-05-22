import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: '100%',
          top: 0,
          left: 0
        }}
      >
        <Toolbar>
          {/* Logo en lugar del texto "Cursos" */}
          <Box 
            component="img"
            src={logo} 
            alt="Logo"
            sx={{ 
              height: 40,
              mr: 3 // Margen a la derecha del logo
            }}
          />
          
          {/* Botones con mayor espaciado */}
          <Box sx={{ 
            display: 'flex', 
            gap: 3, // Aumenté el gap de 1 a 3 para más separación
            flexGrow: 1 // Permite que los botones ocupen espacio disponible
          }}>
            <Button 
              color="inherit" 
              sx={{ 
                whiteSpace: 'nowrap',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Taller
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                whiteSpace: 'nowrap',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Tecnología
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                whiteSpace: 'nowrap',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Práctica
            </Button>
          </Box>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      
      {/* Espacio para evitar que el contenido quede detrás del navbar */}
      <Toolbar sx={{ mb: 2 }} />
    </Box>
  );
};
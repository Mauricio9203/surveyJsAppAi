import React from 'react';
import { Box, Typography } from '@mui/material';

const Header: React.FC = () => (
  <Box
    sx={{
      backgroundColor: 'rgba(79, 0, 153, 0.6)', // Fondo semitransparente
      backdropFilter: 'blur(5px)', // Desenfoque para el efecto glassmorphism
      padding: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text.primary',
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}
  >
    <Box sx={{ marginRight: 2 }}>
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.svg"
        alt="Gemini Icon"
        style={{ width: 24, height: 24 }}
      />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f9f9f9'}}>
      Survey Generator powered by Gemini
    </Typography>
  </Box>
);

export default Header;

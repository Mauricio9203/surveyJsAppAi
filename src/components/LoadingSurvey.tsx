import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSurvey: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
      }}
    >
      <CircularProgress size={50} sx={{ marginBottom: 2 }} />
      <Typography variant="h6" color="textSecondary">
        Creating Survey, Please Wait...
      </Typography>
    </Box>
  );
};

export default LoadingSurvey;

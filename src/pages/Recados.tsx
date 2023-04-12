import { Grid } from '@mui/material';
import React from 'react';
import NavBar from '../componentes/NavBar';

const Recados: React.FC = () => {
  return (
    <Grid
      container
      height={'100vh'}
      justifyContent="center"
      alignItems="flex-start"
      bgcolor={'black'}
    >
      <Grid item height={'10%'} xs={12} sm={8} bgcolor={'coral'}>
        <NavBar />
      </Grid>
    </Grid>
  );
};

export default Recados;

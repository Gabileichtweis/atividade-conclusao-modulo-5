import { Divider, Fab, Grid, Typography } from '@mui/material';
import React from 'react';
import { Add } from '@mui/icons-material';
import ListaRecados from '../componentes/List/Index';

const Recados: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Recados</Typography>

      <Divider />

      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>

      <ListaRecados
        recado={{ titulo: 'recado 1', descricao: 'descrição', id: 1 }}
      />
      <ListaRecados
        recado={{ titulo: 'recado 2', descricao: 'descrição', id: 2 }}
      />
      <ListaRecados
        recado={{ titulo: 'recado 3', descricao: 'descrição', id: 3 }}
      />
      <Fab
        onClick={() => alert('clicou')}
        color="primary"
        aria-label="Adicionar novo contato"
        sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
      >
        <Add />
      </Fab>
    </>
  );
};

export default Recados;

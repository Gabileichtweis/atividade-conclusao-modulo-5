import { Divider, Fab, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import ListaRecados from '../componentes/List/Index';
import Modal from '../componentes/Modal/Index';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/Recados/recadosSlice';

const Recados: React.FC = () => {
  const [abertura, setAbertura] = useState(false);
  const recados = useAppSelector(selectAll);

  const fecharModal = () => {
    setAbertura(false);
  };
  return (
    <>
      <Typography variant="h4">Recados</Typography>

      <Divider />

      <Grid container>
        {recados.map((recado) => (
          <Grid item key={recado.id} xs={12}>
            <ListaRecados recado={recado} />
          </Grid>
        ))}
      </Grid>
      <Fab
        onClick={() => setAbertura(true)}
        color="primary"
        aria-label="Adicionar novo contato"
        sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
      >
        <Add />
      </Fab>

      <Modal aberto={abertura} acao="criar" fecharModal={fecharModal} />
    </>
  );
};

export default Recados;

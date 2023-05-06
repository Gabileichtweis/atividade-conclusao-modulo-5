import { Button, Divider, Fab, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import ListaRecados from '../componentes/List/Index';
import Modal from '../componentes/Modal/Index';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/Recados/recadosSlice';
import { removerUsuarioLogado } from '../store/modules/UsuarioLogado/usuarioLogadoSlice';
import { useNavigate } from 'react-router-dom';

const Recados: React.FC = () => {
  const [abertura, setAbertura] = useState(false);
  const recados = useAppSelector(selectAll);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const usuarioLogado = useAppSelector((state) => state.usuarioLogado);

  const fecharModal = () => {
    setAbertura(false);
  };

  const sair = () => {
    dispatch(removerUsuarioLogado());
    navigate('/');
  };
  return (
    <>
      <Grid
        container
        xs={12}
        sm={10}
        md={8}
        display={'flex'}
        justifyItems={'center'}
        alignContent={'center'}
      >
        <Grid bgcolor={'red'} item xs={12} display={'flex'}>
          <Typography variant="h4">Recados</Typography>
          <Button variant="contained" onClick={sair}>
            Sair
          </Button>
        </Grid>
        <Divider />
      </Grid>

      <Grid container>
        {recados
          .filter((recado) => recado.criadoPor === usuarioLogado.email)
          .map((recado) => (
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

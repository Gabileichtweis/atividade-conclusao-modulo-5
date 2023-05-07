import { Button, Divider, Fab, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import ListaRecados from '../componentes/List/Index';
import Modal from '../componentes/Modal/Index';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/Recados/recadosSlice';
import { removerUsuarioLogado } from '../store/modules/UsuarioLogado/usuarioLogadoSlice';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

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
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        sx={{ backgroundColor: '#455a64' }}
      >
        <Grid
          item
          height={'100%'}
          marginTop={2}
          xs={12}
          sm={10}
          md={8}
          sx={{ backgroundColor: '#bbc7ccd8', borderRadius: '2%' }}
        >
          <Grid
            container
            height={'80%'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Grid
              item
              height={'10%'}
              xs={12}
              sm={10}
              md={8}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Typography variant="h3" color={'primary'}>
                Recados
              </Typography>
              <Button onClick={sair}>
                <LogoutIcon />
              </Button>
            </Grid>
            <Divider />
            <Grid
              item
              height={'80%'}
              xs={12}
              sm={10}
              md={8}
              display={'flex'}
              alignItems={'flex-start'}
            >
              <Grid container>
                {recados
                  .filter((recado) => recado.criadoPor === usuarioLogado.email)
                  .map((recado) => (
                    <Grid item key={recado.id} xs={12}>
                      <ListaRecados recado={recado} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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

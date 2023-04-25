import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Recados = () => {
  /*   const [emailUsuario, setEmailUsuario] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const existe = localStorage.getItem('usuarioLogado');
    if (existe) {
      setEmailUsuario(existe);
    } else {
      navigate('/');
    }
  }, []); */

  return (
    <Grid
      container
      height={'100vh'}
      direction="column"
      justifyContent="center"
      alignItems="center"
      bgcolor={'blue'}
    >
      <Grid item height={'20%'} width={'80%'} bgcolor={'gray'}>
        <Grid
          container
          height={'50%'}
          bgcolor={'ButtonShadow'}
          paddingLeft={1}
          paddingRight={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item height={'100%'} bgcolor={'forestgreen'}>
            <Typography variant="h4">Recados</Typography>
          </Grid>
          <Grid item height={'100%'} bgcolor={'forestgreen'}>
            <Button variant="contained">Icone</Button>
          </Grid>
        </Grid>
        <Grid
          container
          height={'50%'}
          spacing={2}
          paddingLeft={1}
          paddingRight={1}
        >
          <Grid item height={'100%'} xs={12} sm={3} md={4}>
            <TextField
              id="titulo"
              label="Título"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item height={'100%'} xs={12} sm={8} md={7}>
            <TextField
              id="descricao"
              label="Descrição"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item height={'100%'} xs={12} sm={1}>
            <Button>
              <AddCircleIcon sx={{ width: '70px', height: '70px' }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item height={'80%'} width={'80%'} bgcolor={'red'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum,
        molestiae eaque eligendi excepturi delectus error deserunt laborum
        itaque aliquid minima unde ipsam, voluptatibus perspiciatis corporis,
        sunt incidunt est tenetur.
      </Grid>
    </Grid>
  );
};

export default Recados;

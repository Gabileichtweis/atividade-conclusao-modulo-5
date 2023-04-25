import { Grid, Typography } from '@mui/material';
import React from 'react';
import Form from '../componentes/Form/Index';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <>
      <Grid container height={'100vh'}>
        <Grid
          item
          height={'100%'}
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: 'url(./images/cadastroImagePadrao.png)',
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          height={'100%'}
          xs={12}
          sm={8}
          md={4}
          sx={{ backgroundColor: '#455a64' }}
        >
          <Grid container height={'100%'} alignItems={'center'}>
            <Grid
              item
              xs={12}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-around'}
              padding={3}
            >
              <Typography variant="h4" textAlign={'center'}>
                Cadastre-se
              </Typography>
              <Form tipo="cadastro" />
              <Typography textAlign="center" variant="body2">
                Já possui conta?{' '}
                <Link to="/" style={{ color: 'inherit' }}>
                  Entrar
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

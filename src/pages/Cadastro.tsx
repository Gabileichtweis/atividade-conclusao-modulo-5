import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import loginImage from '../../public/images/loginImage.png';
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
            backgroundImage: 'url()',
          }}
        />
        <Grid item height={'100%'} xs={12} sm={8} md={4} bgcolor={'brown'}>
          <Grid
            container
            height={'100%'}
            alignItems={'center'}
            bgcolor={'honeydew'}
          >
            <Grid
              item
              xs={12}
              height={'50%'}
              bgcolor={'gray'}
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
                <Link to="/cadastro" style={{ color: 'inherit' }}>
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

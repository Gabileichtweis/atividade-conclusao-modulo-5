import { Grid, Typography } from '@mui/material';
import React from 'react';
import Form from '../componentes/Form/Index';
import { Link } from 'react-router-dom';
import { deepPurple, purple } from '@mui/material/colors';
import '../index.css';

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
            backgroundImage: 'url(./images/loginImage.png)',
            backgroundSize: '70%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Grid item height={'100%'} xs={12} sm={8} md={4} className="gradiente">
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
                Bem-vindo ao app recados
              </Typography>
              <Form tipo="login" />
              <Typography textAlign="center" variant="body2">
                Ainda não possui uma conta?{' '}
                <Link to="/cadastro" style={{ color: 'inherit' }}>
                  Cadastre-se
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

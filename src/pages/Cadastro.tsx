import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import loginImage from '../../public/images/loginImage.png';

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
                Entrar
              </Typography>
              <Box component={'form'} textAlign={'center'}>
                <TextField
                  id="email"
                  label={'E-mail'}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  id="password"
                  label={'Senha'}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="password2"
                  label={'Confirmação de senha'}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Button variant="contained" size="large">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

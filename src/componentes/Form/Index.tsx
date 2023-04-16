import { Box, TextField, Button } from '@mui/material';
import Recat, { useState } from 'react';
import { Usuario } from '../../types';

interface FormProps {
  tipo: 'login' | 'cadastro';
}

const Form: Recat.FC<FormProps> = ({ tipo }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const logar = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log('logou');
  };

  const cadastrar = (ev: React.FormEvent<HTMLFormElement>) => {
    console.log('cadastrou');
  };
  return (
    <Box
      onSubmit={tipo === 'login' ? logar : cadastrar}
      component={'form'}
      padding={3}
    >
      <TextField
        id="email"
        label={'E-mail'}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="passwordt"
        label={'Senha'}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      {tipo === 'cadastro' ? (
        <TextField
          id="passwordrepeat"
          label={'Repita sua senha'}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      ) : (
        <></>
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        {tipo === 'login' ? 'ENTRAR' : 'CADASTRAR'}
      </Button>
    </Box>
  );
};

export default Form;

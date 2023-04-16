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
    if (!email) {
      alert('digite um email válido');
      return;
    }

    if (senha.length < 5 || senha !== repetirSenha) {
      alert('digite uma senha válida');
      return;
    }

    if (usuarios.some((usuario) => usuario.email === email)) {
      alert('email já cadastrado');
    }

    const novoUsuario: Usuario = {
      email,
      senha,
      recados: [],
    };

    setUsuarios((antigo) => [...antigo, novoUsuario]);
    console.log('deu bom no cadastro');
    limparCampos();
  };

  const limparCampos = () => {
    setEmail('');
    setSenha('');
    setRepetirSenha('');
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
        onChange={(ev) => setEmail(ev.target.value)}
        fullWidth
      />

      <TextField
        id="passwordt"
        label={'Senha'}
        variant="outlined"
        margin="normal"
        onChange={(ev) => setSenha(ev.target.value)}
        fullWidth
      />

      {tipo === 'cadastro' ? (
        <TextField
          id="passwordrepeat"
          label={'Repita sua senha'}
          variant="outlined"
          margin="normal"
          onChange={(ev) => setRepetirSenha(ev.target.value)}
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

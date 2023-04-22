import { Box, TextField, Button, Alert } from '@mui/material';
import Recat, { useEffect, useState } from 'react';
import { Usuario } from '../../types';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  tipo: 'login' | 'cadastro';
}

const Form: Recat.FC<FormProps> = ({ tipo }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [alerta, setAlerta] = useState<{ show: boolean; mensagem: string }>({
    show: false,
    mensagem: '',
  });

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarios.length > 0) {
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }, [usuarios]);

  useEffect(() => {
    const buscarDados = localStorage.getItem('usuarios');

    if (buscarDados) {
      setUsuarios(JSON.parse(buscarDados));
    }
  }, []);

  const logar = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (
      usuarios.some(
        (usuario) => usuario.email === email && usuario.senha === senha
      )
    ) {
      localStorage.setItem('usuarioLogado', email);
      navigate('/recados');
      console.log('logou');
    } else {
      setAlerta({ show: true, mensagem: 'Usuário ou senha incorretos' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }
  };

  const cadastrar = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!email) {
      setAlerta({ show: true, mensagem: 'Digite um e-mail válido' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }

    if (senha.length < 5 || senha !== repetirSenha) {
      setAlerta({ show: true, mensagem: 'Digite uma senha válida' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }

    if (usuarios.some((usuario) => usuario.email === email)) {
      setAlerta({ show: true, mensagem: 'E-mail já cadastrado' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
    }

    const novoUsuario: Usuario = {
      email,
      senha,
      recados: [],
    };

    setUsuarios((antigo) => [...antigo, novoUsuario]);
    navigate('/');
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
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {tipo === 'login' ? 'ENTRAR' : 'CADASTRAR'}
      </Button>
      {alerta.show ? (
        <Alert variant="outlined" severity="error" sx={{ color: 'white' }}>
          {alerta.mensagem}
        </Alert>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Form;

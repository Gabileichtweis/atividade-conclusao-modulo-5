import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recados: React.FC = () => {
  const [emailUsuario, setEmailUsuario] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const existe = localStorage.getItem('usuarioLogado');
    if (existe) {
      setEmailUsuario(existe);
    } else {
      navigate('/');
    }
  }, []);

  return <h1>Recados</h1>;
};

export default Recados;

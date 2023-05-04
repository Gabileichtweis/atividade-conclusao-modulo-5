import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Acao, Recado } from '../../types/index';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import Modal from '../Modal/Index';

interface ListaRecadosProps {
  recado: Recado;
}

const ListaRecados: React.FC<ListaRecadosProps> = ({ recado }) => {
  const [abertura, setAbertura] = useState(false);
  const [acao, setAcao] = useState<Acao>('atualizar');

  const abrirModal = (acao: Acao) => {
    setAcao(acao);
    setAbertura(true);
  };

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary={recado.titulo} secondary={recado.descricao} />
          <IconButton
            aria-label="Editar recado"
            onClick={() => abrirModal('atualizar')}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="Deletar recado"
            onClick={() => abrirModal('deletar')}
          >
            <Delete />
          </IconButton>
        </ListItem>
        <Divider component="li" />
      </List>

      <Modal
        aberto={abertura}
        acao={acao}
        fecharModal={() => setAbertura(false)}
        recado={recado}
      />
    </>
  );
};

export default ListaRecados;

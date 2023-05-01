import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Recado } from '../../types/index';
import { Button, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface ListaRecadosProps {
  recado: Recado;
}

const ListaRecados: React.FC<ListaRecadosProps> = ({ recado }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={recado.titulo} secondary={recado.descricao} />
        <IconButton aria-label="Editar recado">
          <Edit />
        </IconButton>
        <IconButton aria-label="Deletar recado">
          <Delete />
        </IconButton>
      </ListItem>
      <Divider component="li" />
    </List>
  );
};

export default ListaRecados;

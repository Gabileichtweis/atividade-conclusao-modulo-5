import { combineReducers } from '@reduxjs/toolkit';
import reducerRecados from './Recados/recadosSlice';
import reducerUsuarios from './Usuarios/usuariosSlice';
import reducerUsuarioLogado from './UsuarioLogado/usuarioLogadoSlice';

const rootReducer = combineReducers({
  usuarios: reducerUsuarios,
  usuarioLogado: reducerUsuarioLogado,
  recados: reducerRecados,
});

export default rootReducer;

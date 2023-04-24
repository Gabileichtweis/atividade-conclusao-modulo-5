import { combineReducers } from '@reduxjs/toolkit';
import reducerRecados from './Recados/recadosSlice';
import reducerUsuarios from './Usuarios/usuariosSlice';

const rootReducer = combineReducers({
  usuarios: reducerUsuarios,
  /* usuarioLogado: () => 'usuarioLogado', */
  recados: reducerRecados,
});

export default rootReducer;

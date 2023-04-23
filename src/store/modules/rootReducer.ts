import { combineReducers } from '@reduxjs/toolkit';
import reducer from './Recados/recadosSlice';

const rootReducer = combineReducers({
  /* usuarios: () => 'usuarios',
  usuarioLogado: () => 'usuarioLogado', */
  recados: () => reducer,
});

export default rootReducer;

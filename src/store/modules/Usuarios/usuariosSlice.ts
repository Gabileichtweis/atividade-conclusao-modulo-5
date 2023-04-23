import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../../../types';

const estadoInicial: Usuario[] = [];

const usuariosSlice = createSlice({
  initialState: estadoInicial,
  name: 'Usuarios',
  reducers: {
    adicionarUsuario: (state, action: PayloadAction<Usuario>) => {
      if (state.some((contato) => contato.email === action.payload.email)) {
        return state;
      }

      return [...state, action.payload];
    },
  },
});

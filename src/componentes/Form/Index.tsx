import { Box, TextField, Button } from '@mui/material';
import Recat from 'react';

interface FormProps {
  tipo: 'login' | 'cadastro';
}

const Form: Recat.FC<FormProps> = ({ tipo }) => {
  return (
    <Box component={'form'} padding={3}>
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

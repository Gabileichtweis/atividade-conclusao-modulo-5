export type Recado = {
  id: number;
  titulo: string;
  descricao: string;
};

export type Usuario = {
  email: string;
  senha: string;
  recados: Recado[];
};

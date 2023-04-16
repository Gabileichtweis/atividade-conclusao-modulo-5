export type Recado = {
  id: number;
  titulo: string;
  descrição: string;
};

export type Usuario = {
  email: string;
  senha: string;
  recados: Recado[];
};

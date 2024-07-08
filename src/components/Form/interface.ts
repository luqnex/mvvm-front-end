export interface IView {
  nome: string;
  preco: string;
  descricao: string;
  setNome: (nome: string) => void;
  setPreco: (preco: string) => void;
  setDescricao: (descricao: string) => void;
  handleSubmit: (submit: any) => void;
}

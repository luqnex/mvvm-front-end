import { useState } from "react";
import { IView } from "./interface";

const useFormularioDeProdutoModel = (): IView => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ nome, preco, descricao });
    setNome("");
    setPreco("");
    setDescricao("");
  };

  return {
    nome,
    preco,
    descricao,
    setNome,
    setPreco,
    setDescricao,
    handleSubmit,
  };
};

export default useFormularioDeProdutoModel;

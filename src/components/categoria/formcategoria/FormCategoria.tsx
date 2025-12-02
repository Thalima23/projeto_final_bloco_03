import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, cadastrar, atualizar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      await atualizar("/categorias", categoria, setCategoria);
      alert("Categoria atualizada com sucesso!");
    } else {
      await cadastrar("/categorias", categoria, setCategoria);
      alert("Categoria cadastrada com sucesso!");
    }

    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={enviar}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Ex: Perfume, Dermo-Cosmético, Antibiótico..."
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <button
          className="rounded text-slate-100 bg-amber-500 
                     hover:bg-amber-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;

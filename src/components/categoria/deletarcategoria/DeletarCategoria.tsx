import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function apagarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria deletada com sucesso!");
    } catch (error) {
      alert("Erro ao deletar categoria!");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria abaixo?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-amber-700 text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.nome}
        </p>

        <div className="flex">
          <button
            onClick={retornar}
            className="text-slate-100 bg-red-500 hover:bg-red-700 w-full py-2"
          >
            Não
          </button>

          <button
            onClick={apagarCategoria}
            className="w-full text-slate-100 bg-amber-500 hover:bg-amber-700 flex items-center justify-center"
          >
            {isLoading ? (
              <span>Carregando...</span>
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import type Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Service";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<Produto | null>(null);

  // Buscar produto pelo ID
  async function buscarProduto(id: string) {
    try {
      await buscar(`/produtos/${id}`, (data: Produto) => setProduto(data));
    } catch (error) {
      console.log("Erro ao buscar produto:", error);
    }
  }

  useEffect(() => {
    if (id) buscarProduto(id);
  }, [id]);

  // Confirmar exclusão
  async function confirmarDelete() {
    try {
      await deletar(`/produtos/${id}`);
      alert("Produto deletado com sucesso!");
      navigate("/produto");
    } catch (error) {
      console.log("Erro ao deletar produto:", error);
      alert("Erro ao deletar o produto");
    }
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto abaixo?
      </p>

      {produto && (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-amber-600 text-white font-bold text-2xl">
            {produto.nome}
          </header>

          <div className="p-4 flex flex-col items-center gap-4">
            {produto.foto && (
              <img
                src={produto.foto}
                alt={produto.nome}
                className="w-40 h-40 object-cover rounded-lg shadow"
              />
            )}

            <p className="text-xl">Preço: R$ {produto.preco}</p>

            <p className="text-sm text-slate-600">
              Categoria:{" "}
              {produto.categoria
                ? produto.categoria.nome
                : "Sem categoria"}
            </p>
          </div>

          <div className="flex">
            {/* CANCELAR */}
            <Link
              to="/produto"
              className="text-slate-100 bg-red-600 hover:bg-red-400 w-full py-2 text-center"
            >
              Não
            </Link>

            {/* CONFIRMAR */}
            <button
              onClick={confirmarDelete}
              className="w-full text-slate-100 bg-amber-400 hover:bg-amber-600 py-2"
            >
              Sim
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletarProduto;

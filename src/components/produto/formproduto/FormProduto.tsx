import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Função que redireciona após salvar
  function retornar() {
    navigate("/produto");
  }

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | null>(null);

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null,
  });

  // BUSCAR TODAS AS CATEGORIAS
  async function buscarCategorias() {
    try {
      await buscar("/categorias", (data: Categoria[]) => setCategorias(data));
    } catch (error) {
      console.log("Erro ao buscar categorias:", error);
    }
  }

  // BUSCAR PRODUTO POR ID (EDIÇÃO)
  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, (data: Produto) => {
        setProduto(data);
        setCategoriaSelecionada(data.categoria ?? null);
      });
    } catch (error) {
      console.log("Erro ao buscar produto:", error);
    }
  }

  // BUSCAR CATEGORIA SELECIONADA
  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, (data: Categoria) => {
        setCategoriaSelecionada(data);
        setProduto((prev) => ({ ...prev, categoria: data }));
      });
    } catch (error) {
      console.log("Erro ao buscar categoria:", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // ATUALIZA CAMPOS DO PRODUTO
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { type, value, name } = e.target;
    let valor: string | number = value;

    if (name === "preco") {
      if (/^\d*\.?\d*$/.test(value)) {
        valor = value;
      } else {
        return;
      }
    } else if (["number", "range"].includes(type) || (!isNaN(Number(value)) && value !== "")) {
      let valorSemZeros = value;

      if (/^\d+$/.test(value)) {
        valorSemZeros = value.replace(/^0+(?!$)/, "") || "0";
      }

      if (/^0\.\d+$/.test(value)) {
        valorSemZeros = value;
      }

      valor = valorSemZeros;
    }

    setProduto({
      ...produto,
      [name]: valor,
    });
  }

  // Função Salvar
  async function salvarProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!categoriaSelecionada) {
        alert("Selecione uma categoria!");
        setIsLoading(false);
        return;
      }

      const produtoParaEnviar: Produto = {
        ...produto,
        categoria: categoriaSelecionada,
      };

      if (id !== undefined) {
        await atualizar(`/produtos`, produtoParaEnviar, (data: Produto) => setProduto(data));
        alert("Produto atualizado com sucesso!");
        navigate("/produto");
      } else {
        await cadastrar(`/produtos`, produtoParaEnviar, (data: Produto) => setProduto(data));
        alert("Produto cadastrado com sucesso!");
        navigate("/produto");
      }

      retornar();
    } catch (error) {
      console.log(error);
      alert("Erro ao salvar o produto");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={salvarProduto}>

        {/* NOME */}
        <div className="flex flex-col gap-2">
          <label>Nome do Produto</label>
          <input
            type="text"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={produto.nome}
            onChange={atualizarEstado}
          />
        </div>

        {/* PREÇO */}
        <div className="flex flex-col gap-2">
          <label>Preço</label>
          <input
            value={produto.preco}
            onChange={atualizarEstado}
            type="number"
            step="0.01"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        {/* FOTO */}
        <div className="flex flex-col gap-2">
          <label>URL da Imagem</label>
          <input
            type="text"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={produto.foto}
            onChange={atualizarEstado}
          />
        </div>


        {/* CATEGORIA */}
        <div className="flex flex-col gap-2">
          <p>Categoria</p>
          <select
            value={categoriaSelecionada?.id ?? ""}
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>

            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          disabled={isLoading}
          className="rounded bg-amber-500 hover:bg-amber-800 text-white font-bold 
          w-1/2 mx-auto py-2 flex justify-center items-center gap-2"
        >
          {isLoading ? <ClipLoader size={20} color="#ffffff" /> : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;

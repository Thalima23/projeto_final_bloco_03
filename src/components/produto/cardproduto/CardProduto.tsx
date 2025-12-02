import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className="border-slate-900 border bg-transparent
    flex flex-col rounded overflow-hidden justify-between">

            {/* Cabeçalho com imagem do produto */}
            <div>
                <div className="flex w-full bg-green-600 py-2 px-4 items-center gap-4">
                    <img src={produto.foto}
                        className="h-16 w-16 object-cover rounded"
                        alt={produto.nome}
                    />
                    <h3 className="text-lg font-bold uppercase">
                        {produto.nome}
                    </h3>
                </div>

                {/* Corpo */}
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">Preço</h4>
                    <p>R$ {Number(produto.preco).toFixed(2)}</p>

                    <p className="mt-2">
                        <strong>Categorias:</strong>{" "}
                        {produto.categoria?.nome || "Sem categoria"}
                    </p>

                </div>
            </div>

            {/* Botões */}
            <div className="flex">
                <Link
                    to={`/editarproduto/${produto.id}`}
                    className='w-full text-white bg-green-900
                    flex items-center justify-center py-2'
                >
                    <button><PencilSimpleLine size={32} /></button>
                </Link>

                <Link
                    to={`/deletarproduto/${produto.id}`}
                    className='text-white bg-red-600 w-full
                  flex items-center justify-center'
                >
                    <button><Trash size={32} /></button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto;

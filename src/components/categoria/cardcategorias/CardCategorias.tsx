import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";

interface CardCategoriasProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="border-slate-900 border bg-transparent
        flex flex-col rounded overflow-hidden justify-between">

            {/* Cabeçalho */}
            <div>
                <div className="flex w-full bg-green-600 py-2 px-4 items-center gap-4">
                    <h3 className="text-lg font-bold uppercase text-white">
                        {categoria.nome}
                    </h3>
                </div>

                {/* Corpo */}
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">ID</h4>
                    <p>{categoria.id}</p>
                </div>
            </div>

            {/* Botões */}
            <div className="flex">
                <Link
                    to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-white bg-green-900
                    flex items-center justify-center py-2'
                >
                     <button><PencilSimpleLine size={32} /></button>
                </Link>

                <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className='text-white bg-red-600 w-full
                    flex items-center justify-center'
                >
                    <button><Trash size={32} /></button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;

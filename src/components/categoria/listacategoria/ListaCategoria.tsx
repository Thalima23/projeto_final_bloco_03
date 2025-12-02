import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    setIsLoading(true);
    try {
      await buscar("/categorias", setCategorias);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (

    <div className="flex justify-center w-full my-4 bg-green-300">
            <div className="container flex flex-col mx-4">

      {isLoading && (
        <div className="flex justify-center text-5xl animate-bounce my-8">
          💊
        </div>
      )}

       {!isLoading && categorias.length === 0 && (
                    <p className="text-center text-2xl my-6">
                        Nenhuma Categoria encontrada!
                    </p>
                )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categorias.map((categoria) => (
          <CardCategorias key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default ListaCategorias;

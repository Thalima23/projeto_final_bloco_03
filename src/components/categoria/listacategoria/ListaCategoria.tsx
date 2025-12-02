import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";



function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Categorias</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria) => (
          <CardCategorias key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default ListaCategorias;

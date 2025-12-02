import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";
import type Produto from "../../../models/Produto";

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarProdutos() {
        setIsLoading(true);
        try {
            await buscar("/produtos", setProdutos);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <div className="flex justify-center w-full my-4 bg-green-700">
            <div className="container flex flex-col mx-4">

                {isLoading && (
                    <div className="flex justify-center text-5xl animate-bounce my-8">
                        💊
                    </div>
                )}


                {!isLoading && produtos.length === 0 && (
                    <p className="text-center text-2xl my-6">
                        Nenhum produto encontrado!
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {produtos.map((produto) => (
                        <CardProduto key={produto.id} produto={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaProduto;

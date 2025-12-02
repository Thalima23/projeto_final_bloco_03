import Carrossel from "../../components/carrossel/Carrossel"
import ListaCategorias from "../../components/categoria/listacategoria/ListaCategoria"
import ListaProduto from "../../components/produto/listaproduto/ListaProduto"



function Home() {
	return (
		<>

			<div className="mt-22 md:mt-0">
				<Carrossel />
			</div>
			<div className="py-2 md:py-0 md:mb-4">
				<ListaProduto />

        <ListaCategorias />

			</div>
		</>
	)
}

export default Home
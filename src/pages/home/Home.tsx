import ModalCategoria from "../../components/categoria/modalcategoria/ModalCategoria";
import ModalProduto from "../../components/produto/modalproduto/ModalProduto";

function Home() {
  return (
    <>
      {/* Container geral */}
      <div className="bg-green-800 flex justify-center py-10">

        {/* GRID — As duas colunas ficam DENTRO dele */}
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white items-center gap-8">

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col gap-4 items-center md:items-start px-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde à PrimeFarma!</h2>

             {/* Essa é um link/botao */}
            <div className="flex justify-around gap-4">

              <ModalProduto />
              <ModalCategoria />

            </div>

            <p className="text-xl">
              Cuidando da sua saúde com confiança e qualidade.
            </p>
          </div> {/* <-- ESTA DIV ESTAVA FALTANDO FECHAR */}

          {/* COLUNA DIREITA */}
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/Thalima23/Copilot_20251121_110050.png?updatedAt=1763733676881"
              alt="Imagem da Página home"
              className="w-2/3"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;

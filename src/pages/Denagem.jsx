import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackWhatsAppClick,
} from "../utils/facebookPixel";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const Drenagem = () => {
  useEffect(() => {
    trackTreatmentView("Drenagem Linfática");
  }, []);
  return (
    <main className="flex min-h-screen flex-col gap-8 p-4">
      <SEO
        title="Drenagem Linfática - Fisioella"
        description="Conheça os tratamentos oferecidos pela Fisioella."
        canonical="https://www.fisioella.com/Drenagem"
      />

      <div className="relative flex w-full items-center justify-center">
        <Link
          to="/serviços"
          className="font-quick group absolute left-0 flex cursor-pointer items-center justify-center font-bold md:left-8"
        >
          <FontAwesomeIcon
            className="transition-transform duration-300 group-hover:-translate-x-2"
            icon={faChevronLeft}
          />
          Voltar{" "}
        </Link>
        <h1 className="font-kudry border-purple700 flex w-fit justify-self-center border-b text-2xl md:text-3xl">
          Drenagem Linfática
        </h1>
      </div>
      <p className="font-quick max-w-4xl self-center text-center">
        Técnica suave que estimula o sistema linfático, ajudando a eliminar
        toxinas, reduzir inchaços e melhorar a circulação. Indicada para
        pós-operatórios, retenção de líquidos e celulite, promovendo bem-estar e
        saúde.
      </p>

      <div className="grid grid-cols-1 gap-8 self-center md:grid-cols-2 md:flex-row md:flex-wrap">
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Taping
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>
              Estimula a circulação e a drenagem linfática, ajudando a reduzir
              inchaços e retenção de líquidos.
            </li>
          </ul>
        </div>
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Movimentos Manuais
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>
              Manobras suaves para eliminar toxinas e aliviar a sensação de
              peso.
            </li>
          </ul>
        </div>
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Pós-operatório e Cuidados Especiais
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>
              Auxilia na recuperação pós-cirúrgica e em condições como lipedema
              e linfedema.
            </li>
          </ul>
        </div>
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Laserterapia
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>
              Aplicação em linfonodos que promovem a drenagem a longo prazo.
              Aliviando dores e sensação de peso por ser analgésico e
              anti-inflamatório.
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => {
          trackWhatsAppClick();
          window.open("https://wa.me/5512996461927", "_blank");
        }}
        className="bg-purple700 border-purple700 hover:text-purple700 font-quick mx-auto cursor-pointer rounded-full border px-6 py-3 text-white transition-colors duration-300 hover:bg-transparent"
      >
        Agendar consulta
      </button>
    </main>
  );
};
export default Drenagem;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackWhatsAppClick,
} from "../utils/facebookPixel";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const Radio = () => {
  useEffect(() => {
    trackTreatmentView("Radiofrequência Íntima");
  }, []);
  return (
    <main className="flex min-h-screen flex-col gap-8 p-4">
      <SEO
        title="Radiofrequência Íntima - Fisioella"
        description="Conheça os tratamentos oferecidos pela Fisioella."
        canonical="https://www.fisioella.com/radiofrequencia"
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
          Radiofrequência Íntima
        </h1>
      </div>
      <p className="font-quick max-w-4xl self-center text-center">
        Tratamento não invasivo que estimula a produção de colágeno, melhora a
        lubrificação, firmeza e sensibilidade da região íntima. Indicado para
        casos de ressecamento, flacidez e incontinência leve, promovendo
        conforto e bem-estar.
      </p>

      <div className="flex flex-col gap-8 self-center md:flex-row">
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Como é realizado?
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>Procedimento não invasivo e indolor</li>
            <li>Realizado em consultório por profissional especializado</li>
            <li>Utiliza um aparelho que emite ondas de calor controladas</li>
            <li>
              Aquece suavemente a região, promovendo regeneração dos tecidos
            </li>
            <li>
              Sessões rápidas, com tempo de recuperação mínimo ou inexistente
            </li>
          </ul>
        </div>
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Para que serve a radiofrequência íntima
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>Estimula a produção de colágeno na região íntima</li>
            <li>Melhora a flacidez dos tecidos</li>
            <li>Aumenta a lubrificação vaginal</li>
            <li>Melhora a sensibilidade durante o contato íntimo</li>
            <li>Auxilia em casos leves de incontinência urinária</li>
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
export default Radio;

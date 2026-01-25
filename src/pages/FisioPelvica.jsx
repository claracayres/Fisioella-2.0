import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/SEO";
import { useEffect } from "react";
import {
  trackTreatmentView,
  trackWhatsAppClick,
} from "../utils/facebookPixel";
import { Link } from "react-router-dom";

const FisioPelvica = () => {
  useEffect(() => {
    trackTreatmentView("Fisioterapia Pélvica");
  }, []);
  return (
    <main className="flex min-h-screen flex-col gap-8 p-4">
      <SEO
        title="Fisioterapia Pélvica - Tratamento Especializado | Fisioella"
        description="Fisioterapia pélvica especializada para saúde da mulher. Tratamento para vaginismo, incontinência urínária, dor pélvica e disfunções do assoalho pélvico com Dra. Neila Cayres."
        canonical="/fisiopelvica"
        keywords="fisioterapia pélvica, assoalho pélvico, vaginismo, incontinência urínária, dor pélvica, saúde da mulher, Neila Cayres"
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
          Fisioterapia Pélvica
        </h1>
      </div>
      <p className="font-quick max-w-4xl self-center text-center">
        A fisioterapia pélvica é uma especialidade que se concentra no
        tratamento de disfunções relacionadas à região pélvica, incluindo
        problemas urológicos, ginecológicos e proctológicos. Os fisioterapeutas
        especializados nessa área utilizam técnicas específicas para ajudar na
        reabilitação e no fortalecimento dos músculos do assoalho pélvico.{" "}
        <br /> Se você está enfrentando problemas como incontinência urinária,
        dor pélvica crônica ou disfunções sexuais, a fisioterapia pélvica pode
        ser uma opção eficaz para melhorar sua qualidade de vida.
      </p>

      <div className="flex flex-col gap-8 self-center md:flex-row">
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Técnicas utilizadas
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>Eletroterapia</li>
            <li>Laserterapia</li>
            <li>Exercícios específicos para musculatura do assoalho pélvico</li>
            <li>Terapia comportamental</li>
            <li>Entre Outros...</li>
          </ul>
        </div>
        <div className="border-purple700 flex max-w-lg flex-1 flex-col rounded-3xl border-2 p-4 shadow-lg">
          <h2 className="font-kudry text-center text-2xl md:text-3xl">
            Para gestantes pré e pós parto
          </h2>
          <ul className="font-quick mt-4 flex flex-1 flex-col justify-center text-center">
            <li>Exercícios respiratórios</li>
            <li>
              Exercícios direcionados para funcionalidade da musculatura do
              abdômen, músculos pélvico e paravertebrais.
            </li>
            <li>Exercícios de mobilidade para facilitar a passagem do bebê</li>
            <li>Taping de sustentação na barriga</li>
            <li>Taping para aliviar dores na lombar</li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => {
          trackWhatsAppClick();
          window.open("https://wa.me/5512996461927", "_blank");
        }}
        className="bg-purple700 cursor-pointer border-purple700 hover:text-purple700 font-quick mx-auto rounded-full border px-6 py-3 text-white transition-colors duration-300 hover:bg-transparent"
      >
        Agendar consulta
      </button>
    </main>
  );
};
export default FisioPelvica;

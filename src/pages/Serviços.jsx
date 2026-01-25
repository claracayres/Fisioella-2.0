import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import fisioIcon from "../assets/fisio-pelve.png";
import drenagemIcon from "../assets/icon-drenagem.png";
import radioIcon from "../assets/icon-radio.png";
import { useEffect } from "react";
import SEO from "../components/SEO";
import { trackPageView, trackTreatmentClick } from "../utils/facebookPixel";
import { Link } from "react-router-dom";

const Serviços = () => {
  useEffect(() => {
    trackPageView("Página de Serviços");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <SEO
        title="Serviços - Fisioella"
        description="Conheça os tratamentos oferecidos pela Fisioella."
        canonical="https://www.fisioella.com/Serviços"
      />

      <div className="flex w-full max-w-4xl flex-col items-center gap-4">
        <h1 className="font-kudry border-purple700 w-fit border-b-2 text-3xl">
          Serviços
        </h1>
        <p className="font-quick text-center">
          Lembrando que é sempre realizada uma avaliação para traçar qual melhor
          tratamento para cada paciente, assim sendo possível a individualidade
          do tratamento.
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:flex-wrap md:justify-center lg:gap-8">
        <Link
          to="/fisiopelvica"
          className="border-purple300 mt-8 flex w-full flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:w-96"
          onClick={() => trackTreatmentClick("Fisioterapia Pélvica")}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <div className="bg-purple300 flex h-14 w-14 items-center rounded-full p-2">
              <img className="h-fit w-full" src={fisioIcon} alt="" />
            </div>
            <h1 className="font-kudry text-2xl">Fisioterapia Pélvica</h1>
          </div>
          <p className="font-quick text-center">
            Tratamento para fortalecer e reequilibrar a musculatura pélvica.
          </p>
          <Link
            to="/fisiopelvica"
            className="font-quick group flex cursor-pointer items-center justify-center gap-2 font-bold"
          >
            Saiba mais{" "}
            <FontAwesomeIcon
              className="transition-transform duration-300 group-hover:translate-x-2"
              icon={faChevronRight}
            />
          </Link>
        </Link>
        <Link
          to="/radiofrequencia"
          className="border-purple300 mt-8 flex max-w-3xl flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:w-96"
          onClick={() => trackTreatmentClick("Radiofrequência Íntima")}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <div className="bg-purple300 flex h-14 w-14 items-center justify-center rounded-full p-2">
              <img className="h-10" src={radioIcon} alt="" />
            </div>
            <h1 className="font-kudry text-2xl">Radiofrequência íntima</h1>
          </div>
          <p className="font-quick text-center">
            Rejuvenescimento e melhora da saúde íntima.
          </p>
          <Link
            to="/radiofrequencia"
            className="font-quick group flex cursor-pointer items-center justify-center gap-2 font-bold"
          >
            Saiba mais{" "}
            <FontAwesomeIcon
              className="transition-transform duration-300 group-hover:translate-x-2"
              icon={faChevronRight}
            />
          </Link>
        </Link>
        <Link
          to="/drenagemlinfatica"
          className="border-purple300 mt-8 flex max-w-3xl flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl md:w-96"
          onClick={() => trackTreatmentClick("Drenagem Linfática")}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <div className="bg-purple300 flex h-14 w-14 items-center justify-center rounded-full p-2">
              <img className="h-10" src={drenagemIcon} alt="" />
            </div>
            <h1 className="font-kudry text-2xl">Drenagem Linfática</h1>
          </div>
          <p className="font-quick text-center">
            Redução de inchaço e melhora da circulação sanguínea com massagem
            terapêutica.
          </p>
          <Link
            to="/drenagemlinfatica"
            className="font-quick group flex cursor-pointer items-center justify-center gap-2 font-bold"
          >
            Saiba mais{" "}
            <FontAwesomeIcon
              className="transition-transform duration-300 group-hover:translate-x-2"
              icon={faChevronRight}
            />
          </Link>
        </Link>
      </div>
    </main>
  );
};

export default Serviços;

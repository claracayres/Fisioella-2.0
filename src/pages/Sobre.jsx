// Fisioella/src/pages/Sobre.jsx
import { useEffect } from "react";
import { trackWhatsAppClick, trackPageView } from "../utils/facebookPixel";
import SEO from "../components/SEO.jsx";
import neila from "../assets/neila-sobre.png";

const Sobre = () => {
  useEffect(() => {
    trackPageView("Sobre Mim");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden p-4">
      <SEO
        title="Dra Neila Cayres - Fisioella"
        description="Conheça a Dra. Neila Cayres, especialista em fisioterapia pélvica."
        canonical="https://www.fisioella.com/sobre"
      />
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-kudry border-purple700 w-fit border-b-2 text-3xl">
            Dra. Neila Cayres
          </h1>

          <h2 className="font-kudry text-center text-xl font-bold italic lg:text-2xl">
            Cuidado especializado para a saúde íntima da mulher
          </h2>
        </div>

        <div className="font-quick mt-6 text-justify">
          <img
            src={neila}
            alt="Dra. Neila Cayres"
            className="float-left mr-6 mb-4 w-48 rounded-tl-4xl rounded-br-4xl"
          />

          <p>
            Fisioterapia pélvica com abordagem humanizada, respeitosa e
            personalizada, cuidando da mulher em todas as fases da vida. Ajudo
            mulheres a recuperarem conforto, confiança e qualidade de vida por
            meio da fisioterapia pélvica especializada.
          </p>
          <p>Atuo no tratamento de:</p>
          <ul className="list-disc pl-6">
            <li>Disfunções sexuais</li>
            <li>Dor pélvica</li>
            <li>Incontinência urinária e fecal</li>
            <li>Acompanhamento no pré e pós-parto</li>
          </ul>
          <p>
            Sou pós-graduada em Traumato-Ortopedia e Fisioterapia Pélvica e
            trabalho com uma abordagem atualizada, baseada em evidência
            científica, sempre respeitando a individualidade de cada mulher.
          </p>
          <p className="font-quick">
            Cada atendimento é pensado de forma única, com escuta ativa,
            acolhimento e respeito, promovendo um cuidado integral e
            personalizado.
          </p>

          <div className="clear-both"></div>
        </div>
      </div>
      <div className="my-8 flex w-full snap-x snap-mandatory items-start gap-8 overflow-x-auto scroll-smooth px-4 md:snap-none md:flex-row md:flex-wrap md:justify-center md:overflow-visible">
        <div className="border-purple300 flex h-40 w-65 shrink-0 snap-center flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all md:w-96 md:shrink-0 lg:hover:-translate-y-1 lg:hover:shadow-xl">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <h1 className="font-kudry text-2xl">+10 anos</h1>
          </div>
          <p className="font-quick text-center">de experiência.</p>
        </div>

        <div className="border-purple300 flex h-40 w-65 shrink-0 snap-center flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all md:w-96 md:shrink-0 lg:hover:-translate-y-1 lg:hover:shadow-xl">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <h1 className="font-kudry text-2xl">Pós-graduada</h1>
          </div>
          <p className="font-quick text-center">em Fisioterapia Pélvica.</p>
        </div>

        <div className="border-purple300 flex h-40 w-65 shrink-0 snap-center flex-col justify-center gap-4 rounded-lg border-2 p-6 text-center shadow-lg transition-all md:w-96 md:shrink-0 lg:hover:-translate-y-1 lg:hover:shadow-xl">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <h1 className="font-kudry text-2xl">Atendimento especializado</h1>
          </div>
          <p className="font-quick text-center">em saúde da mulher.</p>
        </div>
      </div>
      <h2 className="font-quick border-purple700 rounded-2xl border-2 border-l-8 p-4 italic">
        Minha missão é devolver bem-estar e autonomia às minhas pacientes,
        oferecendo um cuidado respeitoso e eficaz.
      </h2>
      <button
        onClick={() => {
          trackWhatsAppClick();
          window.open("https://wa.me/5512996461927", "_blank");
        }}
        className="bg-purple700 border-purple700 hover:text-purple700 font-quick mx-auto mt-4 cursor-pointer rounded-full border px-6 py-3 text-white transition-colors duration-300 hover:bg-transparent"
      >
        Agendar consulta
      </button>
    </main>
  );
};
export default Sobre;

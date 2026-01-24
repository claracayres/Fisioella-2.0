import logo from "../assets/logo.svg";
import star from "../assets/star.svg";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { trackPageView, trackWhatsAppClick } from "../utils/facebookPixel";

const Home = () => {
  useEffect(() => {
    trackPageView("Página Inicial");
  }, []);
  return (
    <main>
      <SEO
        title="Fisioella | Fisioterapia Pélvica e Saúde da Mulher"
        description="Fisioterapia Pélvica com Dra. Neila Cayres. Especializada em fisioterapia pélvica e bem-estar da mulher. Atendimento humanizado para mulheres em diversas fases da vida."
        canonical="/"
        keywords="fisioterapia pélvica, saúde da mulher, Neila Cayres, vaginismo, incontinência urinária, dor pélvica, saúde íntima, fisioterapia especializada, saúde feminina"
      />
      <section className="flex flex-col-reverse items-center justify-around bg-linear-to-br from-rose-200/40 to-pink-500/40 px-6 py-12 md:flex-row md:px-12 lg:px-24">
        <div className="flex max-w-lg flex-col gap-6 text-center md:text-left">
          <h1 className="font-play text-2xl md:text-3xl">
            "O autocuidado começa de dentro — e você merece esse olhar"
          </h1>
          <p className="font-quick text-p">
            Na Fisioella, ofereço tratamento especializado para dor pélvica,
            incontinência, gestantes e pós-parto
          </p>
          <button
            onClick={() => {
              trackWhatsAppClick();
              window.open("https://wa.me/5512996461927", "_blank");
            }}
            className="bg-purple700 border-purple700 hover:text-purple700 font-quick mx-auto mt-4 cursor-pointer rounded-full border px-6 py-3 text-white transition-colors duration-300 hover:bg-transparent"
          >
            Agendar consulta
          </button>
        </div>
        <img src={logo} alt="Logo da Fisioella" />
      </section>

      <section className="flex flex-col items-center justify-center px-6 py-12 text-center md:px-12 lg:px-24">
        <h1 className="font-play text-2xl font-medium md:text-3xl">
          Você está enfrentando algum destes problemas?
        </h1>
        <div className="mx-auto mt-8 grid w-fit grid-flow-row grid-cols-1 gap-1 md:grid-cols-2">
          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Dor pélvica crônica
              </h2>
              <p className="font-quick">
                Alívio efetivo para dores persistentes
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Incontinência urinária
              </h2>
              <p className="font-quick">Recupere o controle e a confiança</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Diástase abdominal
              </h2>
              <p className="font-quick">
                Fortalecimento e recuperação pós-parto
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Preparação para o parto
              </h2>
              <p className="font-quick">Mais segurança e tranquilidade</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Recuperação pós-parto
              </h2>
              <p className="font-quick">Retorno mais rápido e saudável</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Constipação e prolapso
              </h2>
              <p className="font-quick">Tratamento especializado e eficaz</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Dor na relação (Vaginismo, Vulvodínia, Dispareunia, entre outras)
              </h2>
              <p className="font-quick">Bem-estar íntimo e qualidade de vida</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 p-4 text-start">
            <img src={star} alt="Estrela" />
            <div>
              <h2 className="font-quick text-xl font-semibold">
                Edemas, lipedema e linfedema
              </h2>
              <p className="font-quick">Tratamento completo e acolhedor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 bg-fuchsia-50 px-6 py-12 text-center md:px-12 lg:px-24">
        <h1 className="font-play text-2xl font-medium">
          O que é Fisioterapia Pélvica?
        </h1>
        <p className="font-quick max-w-3xl">
          A fisioterapia pélvica cuida do assoalho pélvico — músculos essenciais
          para o bem-estar íntimo, sexual e urinário. Com técnicas
          especializadas e acolhimento, ajudo você a recuperar sua saúde e
          qualidade de vida.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center md:px-12 lg:px-24">
        <h1 className="font-play text-2xl font-medium">
          Benefícios dos Tratamentos
        </h1>
        <div className="mx-auto mt-8 grid w-fit grid-flow-row auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">Redução da dor</h1>
            <p className="font-quick">Alívio efetivo e duradouro</p>
          </div>

          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">Fortalecimento</h1>
            <p className="font-quick">Assoalho pélvico saudável</p>
          </div>

          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">Autoconfiança</h1>
            <p className="font-quick">
              Recupere sua segurança e bem-estar íntimo
            </p>
          </div>

          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">
              Recuperação rápida
            </h1>
            <p className="font-quick">Pós-parto com segurança</p>
          </div>

          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">
              Qualidade de vida
            </h1>
            <p className="font-quick">Mais autonomia no dia a dia</p>
          </div>

          <div className="bg-purple700 flex flex-col justify-center rounded-2xl px-6 py-8 text-white">
            <h1 className="font-quick text-xl font-semibold">
              Bem-estar íntimo
            </h1>
            <p className="font-quick">Saúde sexual plena</p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12">
        <div className="flex max-w-3xl flex-col items-center justify-center gap-6 rounded-3xl bg-fuchsia-50 px-6 py-14 text-center shadow-xl md:px-12 lg:px-24">
          <h1 className="font-play text-2xl font-medium">
            Pronta para começar sua jornada de cuidado íntimo e bem-estar?
          </h1>
          <button
            onClick={() => {
              trackWhatsAppClick();
              window.open("https://wa.me/5512996461927", "_blank");
            }}
            className="bg-purple700 border-purple700 hover:text-purple700 font-quick mx-auto mt-4 cursor-pointer rounded-full border px-6 py-3 text-white transition-colors duration-300 hover:bg-transparent"
          >
            Agendar consulta
          </button>
        </div>
      </section>
    </main>
  );
};
export default Home;

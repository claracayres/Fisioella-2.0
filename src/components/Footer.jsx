// src/components/Footer.jsx
import neila from "../assets/neila.png";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import phone from "../assets/phone.svg";
import email from "../assets/mail.svg";
import map from "../assets/map.svg";
import clock from "../assets/clock.svg";
import { trackWhatsAppClick } from "../utils/facebookPixel";

const Footer = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp",
      });
    }
  };

  return (
    <main className="grid grid-cols-1 gap-2 px-6 pt-12 shadow-[0px_-5px_10px_0px_rgba(230,224,229,1.00)] md:grid-cols-4 md:gap-8 md:px-12">
      <div className="flex h-full items-center justify-start gap-4">
        <img className="h-24 w-24" src={neila} alt="Neila" />
        <div className="flex flex-col gap-2">
          <h1 className="font-quick tracking-wider uppercase">Fisioella</h1>
          <p className="font-quick text-xs">Crefito - 3 224592-F</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/fisioella_pelve/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-out hover:scale-110"
            >
              <img src={insta} alt="Instagram" />
            </a>
            <a
              href="https://wa.me/5512996461927"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="transition-transform duration-300 ease-out hover:scale-110"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-start gap-4">
        <h1 className="font-play text-xl font-medium">Contato</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <img src={phone} alt="Phone" />
            <a href="tel:+5512996461927" className="font-quick hover:underline">
              (12) 99646-1927
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src={email} alt="Email" />
            <a
              href="mailto:nc_almeida@yahoo.com.br"
              className="font-quick hover:underline"
            >
              nc_almeida@yahoo.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-start gap-4">
        <h1 className="font-play text-xl font-medium">Localização</h1>
        <div className="flex items-center gap-4">
          <img src={map} alt="Map" />
          <a
            href="https://maps.app.goo.gl/TNcDfSB2Bf15Zzew7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-quick hover:underline"
          >
            Consultório Fisioella - Rua Paulo Setubal, 179 sala 8 - Jd. São
            Dimas
          </a>
        </div>
      </div>

      <div className="flex h-full flex-col justify-start gap-4">
        <h1 className="font-play text-xl font-medium">Horário</h1>
        <div className="flex items-center gap-4">
          <img src={clock} alt="Clock" />
          <p className="font-quick">Segunda à Sexta - 8:00 às 18:00</p>
        </div>
      </div>

      <div className="col-span-1 border-t border-gray-300 py-2 text-center md:col-span-4">
        <p className="font-quick text-xs">
          &copy;2026 Fisioella - Dra. Neila Cayres. Todos os direitos reservados
        </p>
      </div>
    </main>
  );
};
export default Footer;

// src/components/Nav.jsx
import { useState, useRef, useEffect } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import { Link } from "react-router-dom";
import { trackWhatsAppClick } from "../utils/facebookPixel";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarLinks = document.querySelector(".navbar-links");
      const hamburger = document.querySelector(".hamburger");

      if (
        navbarLinks.classList.contains("active") &&
        !navbarLinks.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      const navbarLinks = document.querySelector(".navbar-links");
      if (navbarLinks.classList.contains("active")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <nav className="flex w-full content-center items-center justify-between gap-10 overflow-hidden bg-white/0 px-6 py-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:gap-2 md:px-12">
        <div className="flex items-baseline gap-2 hover:cursor-pointer md:gap-4">
          <h1 className="font-quick justify-start text-center text-2xl leading-8 font-normal tracking-wide uppercase lg:text-3xl">
            <Link to="/">Fisioella</Link>
          </h1>
          <div className="bg-purple700 hidden w-px self-stretch sm:block" />
          <h2 className="font-kudry hidden text-center text-2xl leading-8 font-bold sm:block lg:text-3xl">
            Dra. Neila Cayres
          </h2>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-purple700 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-white/0 p-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:hidden"
          type="button"
          aria-label="Menu"
        >
          <img
            src={isOpen ? close : menu}
            alt={isOpen ? "Close menu" : "Open menu"}
            className="transition-transform duration-300"
          />
        </button>

        <div className="hidden w-1/2 items-center justify-around p-4 md:flex">
          {/* item 1 */}
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/"
              className="justify-start text-center text-2xl leading-8 font-normal text-zinc-700"
            >
              Inicio
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>
          {/* item 2 */}
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/serviços"
              className="justify-start text-center text-2xl leading-8 font-normal text-zinc-700"
            >
              Serviços
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>
          {/* item 3 */}
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/sobre"
              className="justify-start text-center text-2xl leading-8 font-normal text-zinc-700"
            >
              Sobre
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>
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
      </nav>
      {isOpen && (
        <div
          ref={menuRef}
          className="border-purple700 absolute z-10 flex w-full flex-col items-center gap-4 border-t bg-white px-6 py-4 text-center shadow-lg md:hidden"
        >
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/"
              onClick={closeMenu}
              className="justify-start text-center text-xl leading-8 font-normal text-zinc-700"
            >
              Inicio
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/serviços"
              onClick={closeMenu}
              className="justify-start text-center text-xl leading-8 font-normal text-zinc-700"
            >
              Serviços
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>
          <div className="group relative inline-flex cursor-pointer flex-col items-center justify-center gap-2.5">
            <Link
              to="/sobre"
              onClick={closeMenu}
              className="justify-start text-center text-xl leading-8 font-normal text-zinc-700"
            >
              Sobre
            </Link>
            <span className="bg-purple700 absolute bottom-0 left-0 h-px w-0 transition-all duration-400 ease-out group-hover:w-full"></span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/fisioella_pelve/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="transition-transform duration-300 ease-out hover:scale-110"
            >
              <img src={insta} alt="Instagram" className="w-6" />
            </a>
            <a
              href="https://wa.me/5512996461927"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                closeMenu();
                handleWhatsAppClick();
              }}
              className="transition-transform duration-300 ease-out hover:scale-110"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-6" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

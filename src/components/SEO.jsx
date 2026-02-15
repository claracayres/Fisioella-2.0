// src/components/SEO.jsx
import { useEffect } from "react";

const SEO = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://www.fisioella.com/og-image.jpg",
  ogType = "website",
}) => {
  const siteUrl = "https://www.fisioella.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Função auxiliar para criar/atualizar meta tags
  const updateMetaTag = (attribute, attributeValue, content) => {
    if (!content) return;

    let meta = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, attributeValue);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };

  useEffect(() => {
    // Título
    if (title) {
      document.title = title;

      // Open Graph Title
      updateMetaTag("property", "og:title", title);
      // Twitter Title
      updateMetaTag("name", "twitter:title", title);
    }

    // Descrição
    if (description) {
      updateMetaTag("name", "description", description);
      // Open Graph Description
      updateMetaTag("property", "og:description", description);
      // Twitter Description
      updateMetaTag("name", "twitter:description", description);
    }

    // Keywords
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = fullCanonical;

      // Open Graph URL
      updateMetaTag("property", "og:url", fullCanonical);
    }

    // Open Graph Type
    updateMetaTag("property", "og:type", ogType);
    updateMetaTag("property", "og:site_name", "Fisioella");
    updateMetaTag("property", "og:locale", "pt_BR");

    // Open Graph Image
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:image:width", "1200");
    updateMetaTag("property", "og:image:height", "630");
    updateMetaTag(
      "property",
      "og:image:alt",
      "Fisioella - Fisioterapia Pélvica"
    );

    // Twitter Card
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:image", ogImage);
  }, [title, description, canonical, keywords, ogImage, ogType, fullCanonical]);

  return null;
};

export default SEO;

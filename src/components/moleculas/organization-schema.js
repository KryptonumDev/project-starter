import React from "react"

export default function Organization({ siteMetadata }) {

  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org/",
          "@type": "LegalService",
          "name": siteMetadata.title,
          "description": siteMetadata.description,
          "image": siteMetadata.image,
          "url": siteMetadata.siteUrl,
          "telephone": "+48 793 272 020",
          "email": [
            "kuba@kryptonum.eu",
            "michal@kryptonum.eu"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Aleja Komisji Edukacji Narodowej 103/61",
            "addressLocality": "Warszawa",
            "postalCode": "02-722",
            "addressCountry": "PL"
          },
          "openingHours": [
            "Mo-Tu 09:00-22:00",
            "We-Th 09:00-22:00",
            "Fr 09:00-22:00",
            "Sa-Su 09:00-22:00"
          ],
          "hasMap": "https://www.google.com/maps/place/Kryptonum+Studio/@52.1596951,21.0284403,15z/data=!4m2!3m1!1s0x0:0xe05d60b0c3b5bfe7?sa=X&ved=2ahUKEwjzl-THqo7-AhXWr4sKHTBtAHMQ_BJ6BAhMEAg",
          "sameAs": [
            "https://www.facebook.com/kryptonumPL/?locale=hi_IN",
            "https://www.instagram.com/kryptonum_pl/",
            "https://www.linkedin.com/company/kryptonum/?originalSubdomain=pl",
            "https://www.tiktok.com/@kryptonum_pl"
          ]
        }
      )}
    </script>
  )
}
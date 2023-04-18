import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import GlobalStyle from "../styles";
import Cookies from "./cookie-consent";

export default function Layout({ children, location }) {
  const [isCookiesOpened, setCookiesOpened] = useState(false)

  useEffect(() => {
    const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
    const orphansRegex = new RegExp(` (${orphans.join('|')}) `, 'gi');
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button'));
    
    paragraphs.forEach(paragraph =>
      paragraph.childNodes.forEach(node =>
        node?.nodeType === Node.TEXT_NODE && (node.textContent = node.textContent.replace(orphansRegex, ` $1\u00A0`))
      )
    );
  }, [location])

  return (
    <React.Fragment>
      <Cookies isActive={isCookiesOpened} setIsActive={setCookiesOpened} />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

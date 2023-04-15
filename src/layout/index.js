import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import GlobalStyle from "../styles";
import Cookies from "./cookie-consent";

export default function Layout({ children }) {
  const [isCookiesOpened, setCookiesOpened] = useState(false)
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

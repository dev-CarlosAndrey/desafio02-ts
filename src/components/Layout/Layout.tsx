import { Card } from "../Card";
import { Footer } from "../Footer";
import { Header } from "../Header/Header";
import { ReactNode } from "react";
import "../Layout/Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {/* Card agora é o conteúdo principal */}
      <Card />
      {/* Caso você queira ainda envolver o conteúdo dos filhos */}
      {children}
      <Footer />
    </>
  );
};

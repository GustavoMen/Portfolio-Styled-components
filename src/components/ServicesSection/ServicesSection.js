import React from "react";
import { Container } from "../../globalStyles";

import {
  ServicesContainer,
  ServicesProvider,
  ServiceImg,
  ServiceLabel,
  ServiceDescription,
} from "./ServicesSection.elements";
const ServicesSection = () => {
  return (
    <>
      <ServicesContainer>
        <Container>
          <ServicesProvider>
            <ServiceImg src={require("../../Images/Service1.png")}></ServiceImg>
            <ServiceLabel>UI Design</ServiceLabel>
            <ServiceDescription>
              Um site atrativo, com foco em experiencia de usuario, interfaces
              claras e objetivas com intuito de facilitar para o Usuario.
            </ServiceDescription>
          </ServicesProvider>

          <ServicesProvider>
            <ServiceImg src={require("../../Images/Service2.png")}></ServiceImg>
            <ServiceLabel>SEO</ServiceLabel>
            <ServiceDescription>
              Com o mundo cada vez mais tecnologico você não pode ficar fora do
              google certo? Usando as Tags certas seu site pode ficar no topo da
              pagina do Google, Confie em mim isso muda tudo.
            </ServiceDescription>
          </ServicesProvider>
        </Container>
      </ServicesContainer>
    </>
  );
};

export default ServicesSection;

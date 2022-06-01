import React from "react";
import { IconContext } from "react-icons/lib";
import { Container } from "../../globalStyles";

import {
  ServicesContainer,
  ServicesProvider,
  ServiceImgOne,
  ServiceImgTwo,
  ServiceImgThree,
  ServiceImgFour,
  ServiceImgFive,
  ServiceImgSix,
  ServiceLabel,
  ServiceDescription,
  Label,
} from "./ServicesSection.elements";

const ServicesSection = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
        <ServicesContainer>
          <Container>
            <Label>Serviços</Label>
            <ServicesProvider>
              <ServiceImgOne></ServiceImgOne>
              <ServiceLabel>Criação de Sites</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>

            <ServicesProvider>
              <ServiceImgTwo></ServiceImgTwo>
              <ServiceLabel>Desenvolvedor Front-End</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>

            <ServicesProvider>
              <ServiceImgThree></ServiceImgThree>
              <ServiceLabel>Loja virtual / Ecommerce</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>

            <ServicesProvider>
              <ServiceImgFour></ServiceImgFour>
              <ServiceLabel>SEO</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>

            <ServicesProvider>
              <ServiceImgFive></ServiceImgFive>
              <ServiceLabel>Desenvolvedor Back-End</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>

            <ServicesProvider>
              <ServiceImgSix></ServiceImgSix>
              <ServiceLabel>WordPress / Blog</ServiceLabel>
              <ServiceDescription>
                Desenvolvedor de sites, especialista em HTML, CSS, Javascript,
                MongoDB, MySQL.
              </ServiceDescription>
            </ServicesProvider>
          </Container>
        </ServicesContainer>
      </IconContext.Provider>
    </>
  );
};

export default ServicesSection;

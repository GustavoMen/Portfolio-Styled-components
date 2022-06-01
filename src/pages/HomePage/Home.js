import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import { InfoSection, ProjectsSection } from "../../components";
import { ServicesSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection></ServicesSection>
      <ProjectsSection></ProjectsSection>
    </>
  );
};

export default Home;

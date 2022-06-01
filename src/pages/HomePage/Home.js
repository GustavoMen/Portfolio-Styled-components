import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import { InfoSection } from "../../components";
import { ServicesSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection></ServicesSection>
    </>
  );
};

export default Home;

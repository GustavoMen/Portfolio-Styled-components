import React from "react";

import { ContainerResume, ResumeEmbed, Teste } from "./ResumeSection.elements";
const Resume = () => {
  return (
    <>
      <ContainerResume>
        <ResumeEmbed src={require("../..//Images/resume.png")} />
      </ContainerResume>
    </>
  );
};

export default Resume;

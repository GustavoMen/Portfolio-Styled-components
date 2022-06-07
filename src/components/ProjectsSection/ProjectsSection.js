import React from "react";
import { IconContext } from "react-icons/lib";
import {
  TabsContainer,
  TitleTabs,
  ProjectTabs,
  Project,
  ImageContainer,
  ProjectImage,
  ProjectHover,
  ProjectImgOne,
  ProjectImgTwo,
  ProjectImgFour,
  ProjectName,
  ProjectTecnologies,
  ProjectDescription,
  ProjectBtn,
  BtnGithub,
} from "./ProjectsSection.elements";

const ProjectsSection = () => {
  return (
    <>
      <TitleTabs>Projetos</TitleTabs>
      <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
        <TabsContainer>
          <ProjectTabs>
            <a
              target={"_blank"}
              href="https://github.com/GustavoMen/Get-a-pet-FRONTEND-"
              rel="noreferrer"
            >
              <Project>
                <ProjectHover>
                  <ImageContainer>
                    <ProjectImage
                      src={require("../../Images/GetaPetImage.png")}
                    ></ProjectImage>
                  </ImageContainer>

                  <ProjectImgOne></ProjectImgOne>
                  <ProjectName>Get a Pet</ProjectName>
                  <ProjectDescription>
                    Um Site que simula uma adoção completa de Pet totalmente
                    Online.
                  </ProjectDescription>
                  <ProjectTecnologies>
                    HTML, CSS, Javascript, React, Node.js, MongoDB
                  </ProjectTecnologies>
                  <ProjectBtn to="https://github.com/GustavoMen/Get-a-pet-FRONTEND-">
                    Saiba Mais
                  </ProjectBtn>
                </ProjectHover>
              </Project>
            </a>

            <a
              target={"_blank"}
              href="https://github.com/GustavoMen/Toughts"
              rel="noreferrer"
            >
              <Project>
                <ProjectHover>
                  <ImageContainer>
                    <ProjectImage
                      src={require("../../Images/ToughtsImage.png")}
                    ></ProjectImage>
                  </ImageContainer>
                  <ProjectImgTwo></ProjectImgTwo>
                  <ProjectName>Thoughts</ProjectName>
                  <ProjectDescription>
                    Um site para anotar sua Task-List para não esquece-la.
                  </ProjectDescription>
                  <ProjectTecnologies>
                    HTML, CSS, Javascript, Node.js, MySQL
                  </ProjectTecnologies>
                  <ProjectBtn to="https://github.com/GustavoMen/Get-a-pet-FRONTEND-">
                    Saiba Mais
                  </ProjectBtn>
                </ProjectHover>
              </Project>
            </a>

            <a
              target={"_blank"}
              href="https://github.com/GustavoMen/API-VENDAS"
              rel="noreferrer"
            >
              <Project>
                <ProjectHover>
                  <ImageContainer>
                    <ProjectImage
                      src={require("../../Images/apiVendasImage.jpg")}
                    ></ProjectImage>
                  </ImageContainer>
                  <ProjectImgFour></ProjectImgFour>
                  <ProjectName>API-Vendas</ProjectName>
                  <ProjectDescription>
                    Uma API desenvolvida com typescript, possui um sistema de
                    e-commerce completo.
                  </ProjectDescription>
                  <ProjectTecnologies>
                    HTML, CSS, Javascript, React, Node.js, MongoDB
                  </ProjectTecnologies>
                  <ProjectBtn to="https://github.com/GustavoMen/Get-a-pet-FRONTEND-">
                    Saiba Mais
                  </ProjectBtn>
                </ProjectHover>
              </Project>
            </a>
          </ProjectTabs>
          <BtnGithub href="https://github.com/GustavoMen">
            Clique aqui e veja mais
          </BtnGithub>
        </TabsContainer>
      </IconContext.Provider>
    </>
  );
};

export default ProjectsSection;

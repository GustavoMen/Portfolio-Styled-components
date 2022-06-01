import React from "react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  TabsContainer,
  TitleTabs,
  ProjectTabs,
  Project,
  ProjectImgOne,
  ProjectImgTwo,
  ProjectImgThree,
  ProjectImgFour,
  ProjectImgFive,
  ProjectName,
  ProjectTecnologies,
  ProjectDescription,
} from "./ProjectsSection.elements";

const ProjectsSection = () => {
  return (
    <>
      <TitleTabs>Projetos</TitleTabs>
      <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
        <TabsContainer>
          <ProjectTabs>
            <Project>
              <ProjectImgOne></ProjectImgOne>
              <ProjectName>Get a Pet</ProjectName>
              <ProjectDescription>
                Um Site que simula uma adoção completa de Pet totalmente Online.
              </ProjectDescription>
              <ProjectTecnologies>
                HTML, CSS, Javascript, React, Node.js, MongoDB
              </ProjectTecnologies>
              <Button Big>Mais Detalhes</Button>
            </Project>

            <Project>
              <ProjectImgTwo></ProjectImgTwo>
              <ProjectName>Thoughts</ProjectName>
              <ProjectDescription>
                Um Site para fazer sua check-list facil e rapido.
              </ProjectDescription>
              <ProjectTecnologies>
                HTML, CSS, Javascript, Node.js, MySQL
              </ProjectTecnologies>
              <Button Big>Mais Detalhes</Button>
            </Project>

            <Project>
              <ProjectImgThree></ProjectImgThree>
              <ProjectName>Lading Page</ProjectName>
              <ProjectDescription>
                Uma Ladding Page simples, um dos meus primeiros projetos.
              </ProjectDescription>
              <ProjectTecnologies>
                HTML, <br></br> CSS
              </ProjectTecnologies>
              <Button>Mais Detalhes</Button>
              <Button>Mais Detalhes</Button>
            </Project>

            <Project>
              <ProjectImgFour></ProjectImgFour>
              <ProjectName>API para vendas</ProjectName>
              <ProjectDescription>
                Uma API que simula um e-commerce completo, de ponta a ponta.
              </ProjectDescription>
              <ProjectTecnologies>
                HTML, CSS, Typescript, Postgres, React
              </ProjectTecnologies>
              <Button Big>Mais Detalhes</Button>
            </Project>

            <Project>
              <ProjectImgFive></ProjectImgFive>
              <ProjectName>Jogo da Memoria</ProjectName>
              <ProjectDescription>
                Um jogo da Memoria com tematica de animais, contendo sound
                effect.
              </ProjectDescription>
              <ProjectTecnologies>
                HTML, CSS, <br></br>Javascript
              </ProjectTecnologies>
              <Button Big>Mais Detalhes</Button>
              <Button Big>Mais Detalhes</Button>
            </Project>
          </ProjectTabs>
        </TabsContainer>
      </IconContext.Provider>
    </>
  );
};

export default ProjectsSection;

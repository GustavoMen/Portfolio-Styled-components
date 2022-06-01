import styled from "styled-components";
import { MdOutlinePets } from "react-icons/md";
import { MdFreeCancellation } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";

export const TitleTabs = styled.h1`
  padding-top: 70px;
  text-align: center;
  color: #fff;
  background: #0e0b16;
`;

export const TabsContainer = styled.div`
  background: #0e0b16;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`;

export const BlocTabs = styled.div`
  margin-top: 70px;
  width: 100%;

  button {
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
    width: 35%;
    height: 50px;
    border: none;
    border-bottom: 3px solid #57bdd1;
    background: #666666;
    margin-top: 2px;
  }
`;

export const ProjectTabs = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;

  background-color: #0e0b16;
`;

export const Project = styled.div`
  overflow: hidden;
  margin-top: 50px;
  display: inline-block;
  width: 30%;
  height: 300px;
  vertical-align: middle;
  margin: 10px;
  border: 2px solid #57bdd1;
`;

export const ProjectImgOne = styled(MdOutlinePets)`
  margin-bottom: 15px;
`;

export const ProjectImgTwo = styled(MdFreeCancellation)`
  margin-bottom: 15px;
`;

export const ProjectImgThree = styled(MdContactMail)`
  margin-bottom: 15px;
`;

export const ProjectImgFour = styled(BsShop)`
  margin-bottom: 15px;
`;

export const ProjectImgFive = styled(GiBrain)`
  margin-bottom: 15px;
`;

export const ProjectName = styled.h2`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const ProjectTecnologies = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ProjectDescription = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #fff;
`;

export const ProjectBtn = styled.button`
  margin-top: 30px;
  height: 40px;
`;

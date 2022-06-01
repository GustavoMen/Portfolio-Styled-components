import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #101522;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const ServicesProvider = styled.div`
  display: inline-block;
  width: 40%;
  height: 400px;
  vertical-align: middle;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  text-align: center;
  margin-right: 30px;

  @media screen and (max-width: 960px) {
    width: 100%;
    border-right: none;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ServiceImg = styled.img`
  width: 100%;
  max-height: 200px;

  @media screen and (max-width: 960px) {
    width: 50%;
    max-height: ;
  }
`;

export const ServiceLabel = styled.h1`
  color: #57bdd1; ;
`;

export const ServiceDescription = styled.p`
  padding-bottom: 15px;
  margin-top: 80px;
  color: #fff;
`;

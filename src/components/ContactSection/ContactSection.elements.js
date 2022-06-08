import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const ContactContainer = styled.section`
  background: #0e0b16;
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContactTitle = styled.h1`
  text-align: center;
  background: #0e0b16;
  color: #fff;
  padding: 60px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  padding-left: 150px;

  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;

export const ContactTopLine = styled.h3`
  color: #fff;
  margin-bottom: 20px;
`;

export const ContactData = styled.p`
  font-weight: bold;
  margin-top: 20px;
  color: #fff;
  transition: all 0.6s ease;

  &:hover {
    transform: scale(1.1);
    color: #57bdd1;
  }
`;

export const SocialContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 0;
  }
`;

export const SocialMedias = styled.div`
  padding-top: 5px;
  width: 100%;
  height: 150px;
  text-align: center;

  @media screen and (max-width: 960px) {
    margin-top: 5px;
  }
`;

export const IconGithub = styled(BsGithub)`
  margin-bottom: 15px;
`;

export const IconLinkedin = styled(AiFillLinkedin)`
  margin-bottom: 15px;
`;

export const SocialName = styled.p`
  font-size: 16px;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 5px;
`;

export const ContactForm = styled.div`
  padding-left: 150px;
  width: 50%;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const FormForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin-bottom: 30px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #fff;
  background: #0e0b16;
  color: #fff;
  padding: 10px;
`;

export const FormSubmit = styled.input`
  background: #0e0b16;
  align-self: center;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  color: #57bdd1;
  width: 300px;
  height: 50px;
  padding-left: 50px;
  display: flex;
  margin-top: 10px;
  border: 2px solid #57bdd1;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 960px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const LinkSocialOne = styled.a`
  padding-top: 5px;
  width: 40%;
  height: 150px;
  border: 3px solid #808080;
  border-radius: 10px;
  text-align: center;
  transition: all 1s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    border: 3px solid #57bdd1;
  }
`;
export const LinkSocialTwo = styled.a`
  padding-top: 5px;
  width: 40%;
  height: 150px;
  border: 3px solid #808080;
  border-radius: 10px;
  text-align: center;
  transition: all 1s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    border: 3px solid #57bdd1;
  }
`;

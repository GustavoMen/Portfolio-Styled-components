import React, { useRef } from "react";
import { IconContext } from "react-icons/lib";

import {
  ContactForm,
  ContactContainer,
  ContactInfo,
  ContactTopLine,
  ContactData,
  ContactTitle,
  FormForm,
  FormInput,
  FormTextArea,
  SocialContainer,
  SocialMedias,
  IconGithub,
  IconLinkedin,
  SocialName,
  FormSubmit,
  LinkSocialOne,
  LinkSocialTwo,
} from "./ContactSection.elements";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apvw9mx",
        "template_hducwqr",
        form.current,
        "UQVBh0IRv_lrfC7sd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#57bdd1", size: 70 }}>
        <ContactTitle>Entre em Contato</ContactTitle>
        <ContactContainer>
          <ContactForm>
            <FormForm ref={form} onSubmit={sendEmail}>
              <FormInput type="text" name="user_name" placeholder="Your Name" />
              <FormInput
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
              <FormTextArea name="message" placeholder="Message" />
              <FormSubmit type="submit" value="Enviar Mensagem" />
            </FormForm>
          </ContactForm>

          <ContactInfo>
            <ContactTopLine>
              Estou interessado em projetos freelancers e vagas de emprego.
              Apesar disso, se você tiver outros pedidos, não tenha vergonha por
              entrar em contato.
            </ContactTopLine>
            <ContactData>Phone: 37 984157085</ContactData>
            <ContactData> Email: contato.gustavomendonca@gmail.com</ContactData>
            <SocialContainer>
              <LinkSocialOne
                target={"_blank"}
                href="https://github.com/GustavoMen"
                rel="noreferrer"
              >
                <SocialMedias>
                  <IconGithub></IconGithub>
                  <SocialName>Github</SocialName>
                </SocialMedias>
              </LinkSocialOne>

              <LinkSocialTwo
                target={"_blank"}
                href="https://br.linkedin.com/in/gustavomen"
                rel="noreferrer"
              >
                <SocialMedias>
                  <IconLinkedin></IconLinkedin>
                  <SocialName>Linkedin</SocialName>
                </SocialMedias>
              </LinkSocialTwo>
            </SocialContainer>
          </ContactInfo>
        </ContactContainer>
      </IconContext.Provider>
    </>
  );
};

export default ContactSection;

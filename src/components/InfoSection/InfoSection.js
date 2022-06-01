import React from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Bold,
} from "./InfoElements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
  fristImage,
  fristSection,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Bold fristSection={fristSection}>FULLSTACK DEVELOPER</Bold>
                <Bold fristSection={fristSection}>FREELANCER DEVELOPER</Bold>
                <Bold fristSection={fristSection}>TYPESCRIPT DEVELOPER</Bold>
                <Bold fristSection={fristSection}>JAVASCRIPT DEVELOPER</Bold>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="#Home">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} fristImage={fristImage} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import flows from '../../Images/flows.png'; // Blomsterbakgrunn
import LioraImg from '../../Images/AuroraB.jpeg'; // Erstatt med Lioras faktiske portrettbilde om tilgjengelig

const About = () => {
  return (
    <Container>
      <FlowerBackground />
      <Content>
        <ImageWrapper>
          <CircularImage src={LioraImg} alt="Liora" />
        </ImageWrapper>
        <Title>Om Liora</Title>
        <Description>
          Liora er en norsk singer-songwriter som er kjent for sin eteriske stemme og naturinspirerte lydlandskap.
          Født og oppvokst i de vakre landskapene i Norge, oppdaget hun sin lidenskap for musikk i ung alder og lot seg inspirere
          av den stille majesteten i skogene og fjordene. Med en blanding av drømmende pop, folkemusikk og elektroniske elementer,
          tilbyr musikken hennes en intim reise inn i hjerte og sjel.
          <br /><br />
          Hennes nyeste utgivelse eksemplifiserer hennes forpliktelse til ærlig og hjertelig kunstnerisk uttrykk.
          Lioras arbeid handler ikke bare om melodi, men også om å skape forbindelse – å knytte mennesker til naturen og til hverandre
          gjennom stemningsfulle tekster og fengslende opptredener.
          <br /><br />
          Hennes studio, Studio51, er hjertet i den kreative prosessen og bidrar sterkt til produksjonen av hennes unike lyd.
        </Description>
      </Content>
      <BottomNav>
        <TabLink to="/about">Om</TabLink>
        <TabLink to="/projects">Utgivelser</TabLink>
        <TabLink to="/contact">Kontakt</TabLink>
        <ExternalTabLink href="https://studio51.vercel.app" target="_blank">Studio 51</ExternalTabLink>
      </BottomNav>
      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

export default About;

// Styled Components

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  border: 8px solid #000000;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 20px 40px 80px; /* Horisontal padding og plass til fast bottom navigation */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlowerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0;

  @media (max-width: 480px) {
    background-size: 100%;
    background-position: top center;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 150px auto 0 auto; /* Økt margin-top for å presse innholdet lenger ned */
  padding: 20px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const CircularImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #000000;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 8px solid #000000;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  z-index: 2;
`;

const TabLink = styled(Link)`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ExternalTabLink = styled.a`
  font-size: 30px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  z-index: 1;
  margin-top: 20px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
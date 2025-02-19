import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import flows from '../../Images/flows.png'; // Blomsterbakgrunn

const Contact = () => {
  return (
    <Container>
      <FlowerBackground />
      <Content>
        <Title>Kontakt</Title>
        <Description>
          Ønsker du å komme i kontakt med Liora? Send en e-post eller følg henne på sosiale medier for å holde deg oppdatert om hennes siste verk og utstillinger.
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

export default Contact;

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
  padding: 20px 40px 100px; /* Horisontal padding og plass til fast bottom navigation */
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
  background-size: 100% auto; /* Bildet strekker seg 100% i bredde */
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0;

  @media (max-width: 480px) {
    background-size: 100% auto;
    background-position: top center;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 80px auto 0 auto; /* Flytter innholdet litt nedover */
  padding: 20px;
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
  max-width: 600px;
  margin: 0 auto 30px auto;
  
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
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSpotify, FaYoutube, FaPinterestP, FaTiktok } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import Thomas from '../../Images/AuroraB.jpeg'; // Placeholder image
import Waveform from '../../Components/Waveform'; // Import the waveform component
import flows from '../../Images/flows.png'; // Placeholder for the flower image

const CreativeArtistView = () => {
  return (
    <Container>
      {/* Flower background */}
      <FlowerBackground />
      
      <Title>Aurora B.</Title>
      
      <CustomTabBar>
        <TabLink to="/about">Om</TabLink>
        <TabLink to="/projects">Utgivelser</TabLink>
        <TabLink to="/contact">Kontakt</TabLink>
        <ExternalTabLink href="https://studio51.vercel.app" target="_blank">Studio 51</ExternalTabLink>
      </CustomTabBar>

      <PolaroidWrapper>
        <Waveform /> {/* Waveform behind the Polaroid */}
        <PolaroidFrame>
          <Image src={Thomas} alt="Polaroid" />
          <Caption><strong>Aurora B.</strong></Caption>
        </PolaroidFrame>
      </PolaroidWrapper>

      <SocialIcons>
        <SocialIcon href="https://facebook.com" target="_blank"><FaFacebookF /></SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank"><FaInstagram /></SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank"><FaLinkedinIn /></SocialIcon>
        <SocialIcon href="https://spotify.com" target="_blank"><FaSpotify /></SocialIcon>
        <SocialIcon href="https://youtube.com" target="_blank"><FaYoutube /></SocialIcon>
        <SocialIcon href="https://pinterest.com" target="_blank"><FaPinterestP /></SocialIcon>
        <SocialIcon href="https://tiktok.com" target="_blank"><FaTiktok /></SocialIcon>
      </SocialIcons>

      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  border: 8px solid #000000;
  box-sizing: border-box;
  overflow: hidden;
`;

const FlowerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0); 
  z-index: 0;

  @media (max-width: 480px) {
    background-size: 100%; /* Slightly adjust size on mobile */
    background-position: top center;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 10px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

const CustomTabBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 60px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
  }
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

const PolaroidWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
`;

// Adjusted the PolaroidFrame to scale a bit more smoothly
const PolaroidFrame = styled.div`
  background-color: #ffffff;
  border: 8px solid #000000;
  padding: 20px;
  width: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    width: 280px;
    padding: 15px;
    border-width: 7px;
  }
  @media (max-width: 480px) {
    width: 240px;
    padding: 10px;
    border-width: 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #000;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 60px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 50px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 40px;
  }
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #555555;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default CreativeArtistView;
import React from 'react';
import styled from 'styled-components';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaSpotify, FaYoutube, FaPinterestP, FaTiktok 
} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';  
import Waveform from '../Components/Waveform'; 

// Placeholder images for the performers (can be replaced with dynamic data)
import Performer1 from '../Images/AuroraB.jpeg'; 
import Performer2 from '../Images/AuroraB.jpeg'; 
import Performer3 from '../Images/AuroraB.jpeg'; 

const PerformersGallery = () => {
  const performers = [
    { name: "Aurora B.", image: Performer1, socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', spotify: 'https://spotify.com' } },
    { name: "Aurora B.", image: Performer2, socials: { youtube: 'https://youtube.com', twitter: 'https://twitter.com' } },
    { name: "Aurora B.", image: Performer3, socials: { linkedin: 'https://linkedin.com', tiktok: 'https://tiktok.com' } },
    { name: "Aurora B.", image: Performer1, socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', spotify: 'https://spotify.com' } },
    { name: "Aurora B.", image: Performer2, socials: { youtube: 'https://youtube.com', twitter: 'https://twitter.com' } },
    { name: "Aurora B.", image: Performer3, socials: { linkedin: 'https://linkedin.com', tiktok: 'https://tiktok.com' } },
  ];

  return (
    <PerformersSection>
      <PerformerTitle>Lineup</PerformerTitle>
      <PerformerGrid>
        {performers.map((performer, index) => (
          <PerformerCard key={index}>
            <PolaroidWrapper>
              <Link to="/aurora">  
                <Waveform />
                <PolaroidFrame>
                  <Image src={performer.image} alt={performer.name} />
                  <Caption><strong>{performer.name}</strong></Caption>
                </PolaroidFrame>
              </Link>
            </PolaroidWrapper>
            <SocialIcons>
              {performer.socials.facebook && (
                <SocialIcon href={performer.socials.facebook} target="_blank">
                  <FaFacebookF />
                </SocialIcon>
              )}
              {performer.socials.instagram && (
                <SocialIcon href={performer.socials.instagram} target="_blank">
                  <FaInstagram />
                </SocialIcon>
              )}
              {performer.socials.spotify && (
                <SocialIcon href={performer.socials.spotify} target="_blank">
                  <FaSpotify />
                </SocialIcon>
              )}
              {performer.socials.youtube && (
                <SocialIcon href={performer.socials.youtube} target="_blank">
                  <FaYoutube />
                </SocialIcon>
              )}
              {performer.socials.twitter && (
                <SocialIcon href={performer.socials.twitter} target="_blank">
                  <FaTwitter />
                </SocialIcon>
              )}
              {performer.socials.linkedin && (
                <SocialIcon href={performer.socials.linkedin} target="_blank">
                  <FaLinkedinIn />
                </SocialIcon>
              )}
              {performer.socials.tiktok && (
                <SocialIcon href={performer.socials.tiktok} target="_blank">
                  <FaTiktok />
                </SocialIcon>
              )}
            </SocialIcons>
          </PerformerCard>
        ))}
      </PerformerGrid>
    </PerformersSection>
  );
};

// Styled Components

const PerformersSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  color: #000;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const PerformerTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const PerformerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`;

const PerformerCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PolaroidWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PolaroidFrame = styled.div`
  background-color: #ffffff;
  border: 8px solid #000000;
  padding: 20px;
  width: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 280px;
    padding: 15px;
  }
  @media (max-width: 480px) {
    width: 250px;
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
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 15px;
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

export default PerformersGallery;
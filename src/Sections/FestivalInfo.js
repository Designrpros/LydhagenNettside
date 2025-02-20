import React from 'react';
import styled from 'styled-components';
import flowsUp from '../Images/flowsUp.png';  

// Flower frame styled component remains mostly unchanged
const FlowerFrameUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flowsUp});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0); 

  @media (max-width: 480px) {
    background-size: 100%;
    background-position: top center;
  }
`;

// Section for flower container remains unchanged
const Section2 = styled.div`
  height: 5vh;
  background-color: white;
  z-index: 0;

  @media (max-width: 480px) {
    height: 2vh;
    width: 100%;
  }
`;

// Container that wraps the main content.
// Use column-reverse for larger screens to keep desktop layout,
// but switch to normal column ordering on mobile so the title and footer are visible.
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  min-height: 80vh;
  margin-bottom: 0;
  padding-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    min-height: auto;
  }
`;

// Second Section: Festival Information
const InfoSection2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  color: #ffffff;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 0 20px;
  margin-top: -40px;
  margin-bottom: -40px;

  @media (max-width: 480px) {
    height: auto;
    padding: 20px 10px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

// Information Title
const InfoTitle2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

// Information Details
const InfoDetails = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    max-width: 100%;
  }
`;

// Footer remains mostly unchanged
const Footer = styled.footer`
  background-color: #000;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  font-family: 'Old English Text MT', serif;
  position: relative;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FestivalInfo = () => {
  return (
    <>
      {/* Flower frame stays outside the main content wrapper */}
      <Section2>
        <FlowerFrameUp />
      </Section2>

      {/* ContentWrapper adjusts layout direction based on screen size */}
      <ContentWrapper>
        <InfoSection2>
          <InfoTitle2>Festival Information</InfoTitle2>
          <InfoDetails>
            Dato: Mai 24 - 26, 2025<br />
            Sted: Sandvika<br />
            <br />
            Velkommen til Lydhagen Festival! Vi er glade for å kunngjøre at det vil være et variert utvalg av aktiviteter for alle aldre. Her er noe av det du kan forvente:
            <ul>
              <li><strong>Mat og drikke:</strong> Nyt deilige retter fra lokale matleverandører. Det vil også bli servert alkoholholdige og alkoholfri alternativer.</li>
              <li><strong>Familievennlige aktiviteter:</strong> Bli med på morsomme aktiviteter for barn, inkludert ansiktsmaling og kunstverksteder.</li>
              <li><strong>Sikkerhet:</strong> Vi prioriterer sikkerheten til våre gjester. Det vil være sikkerhetspersonell på stedet for å sørge for en trygg og morsom opplevelse.</li>
              <li><strong>Rullestoltilgjengelighet:</strong> Festivalområdet er tilgjengelig for alle. Hvis du har spesielle behov, vennligst gi oss beskjed på forhånd.</li>
              <li><strong>Transport:</strong> Det vil være god offentlig transport til og fra festivalen, og vi oppfordrer alle til å bruke kollektivtransport der det er mulig.</li>
              <li><strong>Overnatting:</strong> For de som kommer langveisfra, finnes det flere hoteller og campingplasser i nærheten.</li>
              <li><strong>Kontakt oss:</strong> For mer informasjon, kontakt oss gjerne på: <a href="mailto:info@lydhagenfestival.com">info@lydhagenfestival.com</a></li>
            </ul>
          </InfoDetails>
        </InfoSection2>
        <Footer>
          <FooterText>© 2025 Studio 51</FooterText>
        </Footer>
      </ContentWrapper>
    </>
  );
};

export default FestivalInfo;
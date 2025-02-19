import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import flows from '../Images/flows.png'; // Placeholder for flower frame image

// Countdown Component
const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownWrapper>
      <CountdownSegment>
        <Time>{String(timeLeft.days).padStart(2, '0')}</Time>
        <Label>DAGER</Label>
      </CountdownSegment>
      <CountdownSegment>
        <Time>{String(timeLeft.hours).padStart(2, '0')}</Time>
        <Label>TIMER</Label>
      </CountdownSegment>
      <CountdownSegment>
        <Time>{String(timeLeft.minutes).padStart(2, '0')}</Time>
        <Label>MINUTTER</Label>
      </CountdownSegment>
      <CountdownSegment>
        <Time>{String(timeLeft.seconds).padStart(2, '0')}</Time>
        <Label>SEKUNDER</Label>
      </CountdownSegment>
    </CountdownWrapper>
  );
};

// Target date: May 24, 2025, at 13:00 UTC
const targetDate = new Date('2025-05-24T13:00:00Z');

// Info Component
const Info = () => {
  return (
    <>
      <InfoSection>
        <Countdown targetDate={targetDate} />
        <FestivalTitle>Lydhagen Festivalen</FestivalTitle>
        <InfoText>
          Velkommen til Lydhagen festivalen, en unik opplevelse som samler lokale artister fra Bærum, Studio 51, og AKTHE for å feire musikk, kunst, og kreativitet.
        </InfoText>
        <FestivalDetails>
          Festivalen er åpen:
          <ul>
            <li>
              <strong>24. mai:</strong> 15:00 - 02:00
            </li>
            <li>
              <strong>25. mai:</strong> 15:00 - 10:00
            </li>
          </ul>
        </FestivalDetails>
      </InfoSection>
      <Section>
        <FlowerFrame />
      </Section>
    </>
  );
};

// Styled Components

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  color: #ffffff;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 480px) {
    height: 65vh;
  }
`;

const Section = styled.div`
  height: 25vh;
  background-color: white;
  z-index: 0;
  position: relative;

  @media (max-width: 480px) {
    height: 30vh;
  }
`;

const FestivalTitle = styled.h1`
  font-size: 50px;
  font-family: 'Old English Text MT', serif;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 35px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

const FestivalDetails = styled.div`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    font-family: 'Courier New', Courier, monospace;

    li {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// Countdown Styling
const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const CountdownSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: #000;
  color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 50px;
    padding: 15px 25px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    padding: 10px 20px;
  }
`;

const Label = styled.div`
  font-size: 18px;
  font-family: 'Old English Text MT', serif;
  margin-top: 10px;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// Flower frame styled component
const FlowerFrame = styled.div`
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

export default Info;
import React, { useState } from 'react';
import styled from 'styled-components';
import flows from '../Images/flows.png'; // Placeholder for flower frame image
import flowsUp from '../Images/flowsUp.png'; // Placeholder for upper flower frame image

// First Section: About the Festival with a Program Table
const InfoSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height for the info section */
  color: #ffffff;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 20px;
  margin-top: -25px;  /* Increased negative margin */
  margin-bottom: -25px; /* Increased negative margin */

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: -20px;
    margin-bottom: -20px;
  }
`;

const Section1 = styled.div`
  height: 8vh; /* Reduced height from 10vh to 8vh */
  background-color: white;
  z-index: 0;

  @media (max-width: 480px) {
    height: 6vh;
  }
`;

const InfoTitle1 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const InfoText1 = styled.p`
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

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SliderButton = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: 'Old English Text MT', serif;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 10px;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  
  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 16px;
    margin: 0 5px;
  }
`;

const ProgramTable = styled.table`
  width: 80%;
  margin: 20px 0;
  border-collapse: collapse;
  color: #ffffff;
  font-family: 'Old English Text MT', serif;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  th, td {
    border: 2px solid #ffffff;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #000000;
    color: #ffffff;
    font-size: 24px;
  }

  td {
    background-color: #ffffff;
    color: #000000;
    font-size: 18px;
  }

  tr:nth-child(even) {
    background-color: #f0f0f0;
  }

  tr:hover {
    background-color: #d1d1d1;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 100%;
    th, td {
      padding: 8px;
      font-size: 16px;
    }
    th {
      font-size: 20px;
    }
    td {
      font-size: 16px;
    }
  }
`;

// Flower frame styled component (down)
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
    background-size: 100%;
    background-position: top center;
  }
`;

// Flower frame styled component (up)
const FlowerFrameUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flowsUp});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 1;

  @media (max-width: 480px) {
    background-size: 100%;
    background-position: top center;
  }
`;

// Festival program data for two days
const programData = [
  {
    day: "Fredag",
    events: [
      { time: "12:00", activity: "Åpning", description: "Velkommen til Lydhagen Festival!" },
      { time: "13:00", activity: "Band A", description: "En fantastisk opptreden av lokale helter." },
      { time: "15:00", activity: "Kunstutstilling", description: "Se fantastiske verk av lokale kunstnere." },
      { time: "17:00", activity: "DJ Set", description: "Dans til rytmene fra vår DJ." },
      { time: "19:00", activity: "Band B", description: "Opplev musikken fra denne fantastiske gruppen." },
      { time: "21:00", activity: "Avslutning", description: "Takk for i kveld!" },
    ],
  },
  {
    day: "Lørdag",
    events: [
      { time: "12:00", activity: "Workshops", description: "Lær om kunst og musikk." },
      { time: "14:00", activity: "Band C", description: "Ny gruppe som viser seg frem." },
      { time: "16:00", activity: "Teaterforestilling", description: "Se lokale talenter i aksjon." },
      { time: "18:00", activity: "DJ Set 2", description: "Siste sjanse til å danse." },
      { time: "20:00", activity: "Band D", description: "Avslutt festivalen med stil." },
      { time: "22:00", activity: "Avslutning", description: "Takk for at du kom!" },
    ],
  },
];

// First Section Component
const Info1 = () => {
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <>
      <Section1>
        <FlowerFrameUp />
      </Section1>
      <InfoSection1>
        <InfoTitle1>Festival Program</InfoTitle1>
        <InfoText1>
          Her er programmet for Lydhagen Festivalen! Kom og opplev fantastiske opptredener og aktiviteter.
        </InfoText1>

        <SliderContainer>
          <SliderButton onClick={() => setCurrentDay(0)}>Fredag</SliderButton>
          <SliderButton onClick={() => setCurrentDay(1)}>Lørdag</SliderButton>
        </SliderContainer>

        <ProgramTable>
          <thead>
            <tr>
              <th>Tid</th>
              <th>Artist / Aktivitet</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            {programData[currentDay].events.map((event, index) => (
              <tr key={index}>
                <td>{event.time}</td>
                <td>{event.activity}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </ProgramTable>
      </InfoSection1>
      <Section1>
        <FlowerFrame />
      </Section1>
    </>
  );
};

export default Info1;
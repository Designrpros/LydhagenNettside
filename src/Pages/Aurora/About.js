import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Title>About Baurora</Title>
      <Description>
        Baurora is a creative artist who blends modern art with classic influences, creating timeless works. This section will go in-depth about the artist’s background and inspirations.
      </Description>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  max-width: 600px;
`;

export default About;
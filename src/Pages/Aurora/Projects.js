import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <Description>
        Explore the creative projects that showcase Baurora's skills, ranging from digital art to traditional media. Each project is a unique blend of creativity and technical prowess.
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

export default Projects;
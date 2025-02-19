import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Description>
        Want to reach out? Contact Baurora via email or follow on social media to stay updated with the latest works and exhibitions.
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

export default Contact;
import styled from 'styled-components';
import { getRandomHexColor } from 'generalFunctions/randomColor';

export const Wrapper = styled.div`
  background: ${getRandomHexColor};
`;


export const Section = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  text-align: center;
`;

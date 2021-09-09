import styled from "styled-components";

export const GridContainer = styled.label`
  margin: 18px 0;
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-gap: 4px;
  grid-auto-rows: 30px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
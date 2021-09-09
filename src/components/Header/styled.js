import styled from "styled-components";

export const Title = styled.h1`
  background-color: ${({ theme }) => theme.pickledBluewood.dark};
  color: ${({ theme }) => theme.alabaster};
  font-size: 40px;
  margin-top: 0;
  padding: 50px;
  text-align: center;
  line-height: 1;
`;
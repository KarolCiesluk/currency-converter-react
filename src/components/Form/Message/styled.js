import styled from "styled-components";

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.colors.endeavour.dark};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.persianRed.dark}
`;
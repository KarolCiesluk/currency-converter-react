import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: 14px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.endeavour.dark};
  transition: font-weight 0.3s;

  &:hover {
    font-weight: bold;
  }

  &:focus {
    font-weight: bold;
    outline: none;
  }

  &:active {
    color: ${({ theme }) => theme.colors.endeavour.light};
  }
`;

export const Time = styled.time`
  font-weight: bold;
`;
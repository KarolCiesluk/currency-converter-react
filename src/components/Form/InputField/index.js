import styled, { css } from "styled-components";

export const InputField = styled.input`
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.pickledBluewood.light};
  background-color: ${({ theme }) => theme.colors.alabaster};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.endeavour.dark};
  }

  ${({ myAmount }) => myAmount && css`
    font-weight: 600;
  `}

  ${({ customRate }) => customRate && css`
    &:disabled {
      cursor: not-allowed;
      background-color: transparent;
    }
  `}
`;
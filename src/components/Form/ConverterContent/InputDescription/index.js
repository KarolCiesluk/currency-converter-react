import styled, { css } from "styled-components";

export const InputDescription = styled.label`
    align-self: center;

    ${({ myAmount }) => myAmount && css`
        font-weight: 600;
    `}
`;
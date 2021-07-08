import styled, { css } from "styled-components";

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

export const InputDescription = styled.label`
    align-self: center;

    ${({ myAmount }) => myAmount && css`
        font-weight: 600;
    `}
`;

export const InputField = styled.input`
    border-radius: 5px;
    color: #2F4858;
    background-color: #fcfcfc;

    &:focus {
        outline-color: hsl(208deg 100% 30%);
    }

    ${({myAmount}) => myAmount && css`
        font-weight: 600;
    `}

    ${({customRate}) => customRate && css`
        &:disabled {
            cursor: not-allowed;
            background-color: transparent;
        }
    `}
`;

export const ScreenReaderLabel = styled.label`
    opacity: 0;
    pointer-events: none;
    position: absolute;
`;
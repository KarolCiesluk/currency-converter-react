import styled from "styled-components";

export const Wrapper = styled.p`
    font-size: 14px;
`;

export const CurrencyRates = styled.a`
    color: hsl(208deg 100% 30%);
    transition: font-weight 0.3s;

    &:hover {
        font-weight: bold;
    }

    &:focus {
        font-weight: bold;
        outline: none;
    }

    &:active {
        color: hsl(208deg 100% 45%);
    }
`;
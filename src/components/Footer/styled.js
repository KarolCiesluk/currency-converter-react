import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 0 40px;
    padding: 16px;
    border-top: 1px solid ${({ theme }) => theme.persianRed.dark};
    text-align: center;
    color: ${({ theme }) => theme.persianRed.dark};
`;

export const Copyright = styled.p`
    margin: 9px;
`;
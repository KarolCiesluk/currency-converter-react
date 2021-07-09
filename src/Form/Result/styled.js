import styled from "styled-components";

export const Wrapper = styled.p`
    color: ${({ theme }) => theme.persianRed.dark};
    font-size: 25px;
    font-weight: bold;
    min-height: 40px;
    margin: 0;
    word-break: break-word;
`;
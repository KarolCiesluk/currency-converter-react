import styled from "styled-components";

export const LoadingMessage = styled.p`
    color: ${({ theme }) => theme.endeavour.dark};
`;

export const ErrorMessage = styled.p`
    color: ${({theme}) => theme.persianRed.dark}
`;
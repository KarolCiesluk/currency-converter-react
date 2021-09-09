import styled from "styled-components";

export const Button = styled.button`
    padding: 12px 50px;
    background-color: ${({ theme }) => theme.persianRed.dark};
    color: #fcfcfc;
    border: none;
    box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.grey.dark};
    border-radius: 30px;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.persianRed.medium};
    }

    &:focus {
        background-color: ${({ theme }) => theme.persianRed.medium};
    }

    &:active {
        background-color: ${({ theme }) => theme.persianRed.light};
    }
`;
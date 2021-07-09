import styled from "styled-components";

export const Button = styled.button`
    padding: 12px 50px;
    background-color: hsl(3, 63%, 48%);
    color: #fcfcfc;
    border: none;
    box-shadow: 0px 0px 8px 0px #7a7a7a;
    border-radius: 30px;
    outline: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: hsl(3deg 100% 50%);
    }

    &:focus {
        background-color: hsl(3deg 100% 50%);
    }

    &:active {
        background-color: hsl(3, 63%, 58%);
    }
`;
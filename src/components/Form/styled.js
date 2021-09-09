import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 18px 10%;
  border-radius: 30px;
  text-align: center;
  line-height: 1.6;
  box-shadow: 0px 0px 34px 0px ${({ theme }) => theme.colors.grey.dark};
  background-color: ${({ theme }) => theme.colors.grey.light};
`;
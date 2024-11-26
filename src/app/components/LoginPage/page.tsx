"use client";

import styled from "styled-components";

export function LoginPage() {
  return (
    <Container>
      <LoginBox>
        <Title>Bem-vindo</Title>
        <Subtitle>Faça login para acessar o sistema</Subtitle>
        <Form>
          <InputWrapper>
            <Input type="text" placeholder="Usuário" />
          </InputWrapper>
          <InputWrapper>
            <Input type="password" placeholder="Senha" />
          </InputWrapper>
          <Button>Entrar</Button>
        </Form>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #0a1128;
  overflow: hidden; /* Evita rolagem indesejada */
`;

const LoginBox = styled.div`
  background-color: #1c2237;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #a8b3cf;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #3c4563;
  border-radius: 4px;
  background-color: #2c3352;
  color: #ffffff;

  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0px 0px 5px rgba(0, 102, 255, 0.5);
  }

  &::placeholder {
    color: #a8b3cf;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 430px;
  padding: 10px;
  background-color: #0066ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056d4;
  }

  &:focus {
    outline: none;
  }
`;

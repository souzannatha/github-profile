"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Container,
  LoginBox,
  Title,
  Subtitle,
  Form,
  InputWrapper,
  Input,
  Button,
} from "./style";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      router.push("/dashboard");
      alert("Login realizado com sucesso!");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Bem-vindo</Title>
        <Subtitle>Faça login para acessar o sistema</Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
          <Button type="submit">Entrar</Button>
        </Form>
      </LoginBox>
    </Container>
  );
}

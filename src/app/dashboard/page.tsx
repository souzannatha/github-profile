"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { fetchGitHubUser, GitHubUser } from "../service/service";
import {
  DashboardContainer,
  PageLayout,
  MainContent,
  SearchBox,
  Input,
  Button,
  UserInfo,
} from "./style";
import Image from "next/image";

export default function Dashboard() {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    if (!username) return;
    setLoading(true);
    setError("");

    const result = await fetchGitHubUser(username);

    if (result) {
      setUser(result);
    } else {
      setError("Usuário não encontrado ou erro na API.");
    }

    setLoading(false);
  };

  return (
    <DashboardContainer>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <SearchBox>
            <Input
              type="text"
              placeholder="Digite algo..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? "Carregando..." : "Pesquisar"}
            </Button>
          </SearchBox>

          {error && <p style={{ color: "red" }}>{error}</p>}

          {user && (
            <UserInfo>
              <Image
                src={user.avatar_url}
                alt={user.login}
                width={100}
                height={100}
              />
              <h3>{user.name || user.login}</h3>
              <p>Bio: {user.bio || "Sem bio"}</p>
              <p>Localização: {user.location || "Não especificado"}</p>
              <p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Perfil no GitHub
                </a>
              </p>
            </UserInfo>
          )}
        </MainContent>
      </PageLayout>
    </DashboardContainer>
  );
}

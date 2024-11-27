"use client";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import {
  DashboardContainer,
  PageLayout,
  MainContent,
  SearchBox,
  Input,
  Button,
} from "./style";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <SearchBox>
            <Input type="text" placeholder="Digite algo..." />
            <Button>Pesquisar</Button>
          </SearchBox>
        </MainContent>
      </PageLayout>
    </DashboardContainer>
  );
}

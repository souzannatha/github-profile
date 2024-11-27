"use client";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { DashboardContainer, PageLayout, MainContent } from "./style";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <p>Conteúdo principal do Dashboard</p>
        </MainContent>
      </PageLayout>
    </DashboardContainer>
  );
}

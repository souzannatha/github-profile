import { useState } from "react";
import {
  Header,
  SidebarContainer,
  Title,
  ToggleButton,
  Nav,
  NavItem,
  Icon,
  Footer,
} from "./style";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <Header>
        <Title isExpanded={isExpanded}>
          {isExpanded ? "Meu Dashboard" : "MD"}
        </Title>
        <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
          ☰
        </ToggleButton>
      </Header>

      <Nav>
        <NavItem>
          <Icon isExpanded={isExpanded}>🏠</Icon>
          {isExpanded && <span>Home</span>}
        </NavItem>
        <NavItem>
          <Icon isExpanded={isExpanded}>📁</Icon>
          {isExpanded && <span>Projetos</span>}
        </NavItem>
        <NavItem>
          <Icon isExpanded={isExpanded}>⚙️</Icon>
          {isExpanded && <span>Configuração</span>}
        </NavItem>
      </Nav>
      <Footer>{isExpanded ? "© 2024 Meu Dashboard" : "© 2024"}</Footer>
    </SidebarContainer>
  );
}

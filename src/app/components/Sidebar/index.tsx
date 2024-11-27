import { useState } from "react";
import {
  SidebarContainer,
  Header,
  Title,
  ToggleButton,
  Nav,
  NavItem,
  Icon,
  Footer,
} from "./style";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Header>
        <Title>{isOpen ? "Meu Dashboard" : "MD"}</Title>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>☰</ToggleButton>
      </Header>

      <Nav>
        <NavItem>
          <Icon>🏠</Icon>
          {isOpen && <span>Home</span>}
        </NavItem>
        <NavItem>
          <Icon>📁</Icon>
          {isOpen && <span>Projetos</span>}
        </NavItem>
        <NavItem>
          <Icon>⚙️</Icon>
          {isOpen && <span>Configuração</span>}
        </NavItem>
      </Nav>

      <Footer>{isOpen ? "© 2024 Meu Dashboard" : "© 2024"}</Footer>
    </SidebarContainer>
  );
}

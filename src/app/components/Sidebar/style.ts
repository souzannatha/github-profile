import styled from "styled-components";

// Contêiner da Sidebar
export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? "16rem" : "5rem")};
  height: 100vh;
  background-color: #f8f9fa;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  /* Adicionando acessibilidade */
  &[aria-expanded="true"] {
    width: 16rem;
  }
  &[aria-expanded="false"] {
    width: 5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #007bff;
  color: white;
`;

export const Title = styled.h1<{ isExpanded: boolean }>`
  font-size: ${({ isExpanded }) => (isExpanded ? "1.2rem" : "1rem")};
  white-space: nowrap;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

// Navegação
export const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
    border-radius: 4px;
  }
`;

export const Icon = styled.span<{ isExpanded: boolean }>`
  font-size: 1.5rem;
  margin-right: ${({ isExpanded }) => (isExpanded ? "1rem" : "0")};
`;

export const Text = styled.span`
  font-size: 1rem;
  white-space: nowrap;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  color: #6c757d;
`;

import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "16rem" : "5rem")};
  height: 100vh;
  background-color: #f8f9fa;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  margin-top: 64px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #007bff;
  color: white;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  white-space: nowrap;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

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

export const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: auto;
`;

import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #1c2237;
  overflow-y: auto;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px; /* Espaçamento entre input e botão */
`;

export const Input = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

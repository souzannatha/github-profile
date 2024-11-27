import axios from "axios";

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  html_url: string;
}

const API_URL = "https://api.github.com/users";

export const fetchGitHubUser = async (
  username: string
): Promise<GitHubUser | null> => {
  try {
    const response = await axios.get<GitHubUser>(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário do GitHub:", error);
    return null;
  }
};

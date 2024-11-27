export interface GithubUser {
  id: number;
  login: string;
  html_url: string;
  type: string;
}

export interface GithubResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}

export const fetchUsers = async (username: string, page: number) => {
  const url = `https://api.github.com/search/users?q=${username}&page=${page}&per_page=10`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  return await response.json();
};

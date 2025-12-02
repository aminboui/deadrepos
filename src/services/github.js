import axios from 'axios';

const GITHUB_API = 'https://api.github.com';
const EIGHT_MONTHS_MS = 8 * 30 * 24 * 60 * 60 * 1000;

export async function fetchGitHubRepos(username) {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : {};
    
    const response = await axios.get(
      `${GITHUB_API}/users/${username}/repos`,
      {
        headers,
        params: {
          per_page: 100,
          sort: 'pushed',
          direction: 'asc'
        }
      }
    );
    
    const now = Date.now();
    const abandonedRepos = response.data.filter(repo => {
      const lastPush = new Date(repo.pushed_at).getTime();
      const monthsAgo = now - lastPush;
      return monthsAgo >= EIGHT_MONTHS_MS;
    });
    
    if (abandonedRepos.length === 0) {
      throw new Error('No abandoned repos found! This developer is very active! 🎉');
    }
    
    return abandonedRepos;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found in the GitHub realm 👻');
    }
    throw new Error(error.message || 'Failed to summon repositories from the depths');
  }
}

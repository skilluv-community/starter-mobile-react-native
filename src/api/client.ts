const BASE = (process.env.EXPO_PUBLIC_API_BASE as string | undefined) ?? 'https://api.github.com';

export interface RepoStats {
  stargazers_count: number;
}

export async function fetchRepoStats(repo: string): Promise<RepoStats> {
  const r = await fetch(`${BASE}/repos/${repo}`);
  if (!r.ok) throw new Error(`GitHub returned ${r.status}`);
  return (await r.json()) as RepoStats;
}

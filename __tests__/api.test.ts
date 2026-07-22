import { fetchRepoStats } from '../src/api/client';

describe('fetchRepoStats', () => {
  const originalFetch = global.fetch;
  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('returns parsed JSON on success', async () => {
    global.fetch = jest.fn().mockResolvedValue(
      new Response(JSON.stringify({ stargazers_count: 42 }), { status: 200 }),
    ) as unknown as typeof fetch;
    const r = await fetchRepoStats('foo/bar');
    expect(r.stargazers_count).toBe(42);
  });

  it('throws on non-2xx', async () => {
    global.fetch = jest.fn().mockResolvedValue(new Response('nope', { status: 500 })) as unknown as typeof fetch;
    await expect(fetchRepoStats('foo/bar')).rejects.toThrow(/500/);
  });
});

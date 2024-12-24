import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'k88wbyzk',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false,
});

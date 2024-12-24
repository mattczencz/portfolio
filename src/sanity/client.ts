import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'k88wbyzk',
  dataset: 'production',
  apiVersion: 'vX',
  useCdn: true,
});

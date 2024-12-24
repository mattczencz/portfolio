import { sanityFetch } from '@/sanity/live';
import { PROJECTS_HOME_QUERY } from '@/sanity/queries/projects';
import Link from 'next/link';

export default async function Home() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_HOME_QUERY });

  console.log(projects);

  return (
    <main className="flex flex-col text-center gap-8 h-screen justify-center items-center">
      <section>Hello!</section>

      <section className="space-y-4">
        {projects.map((proj) => (
          <div key={proj._id}>
            <h1>{proj.name}</h1>
            {proj.slug && (
              <Link href={`/projects/${proj.slug.current}`}>View Project</Link>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

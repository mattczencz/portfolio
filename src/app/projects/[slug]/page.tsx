import { sanityFetch } from '@/sanity/live';
import { PROJECT_SINGLE_QUERY } from '@/sanity/queries/projects';
import { notFound } from 'next/navigation';

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { data: project } = await sanityFetch({
    query: PROJECT_SINGLE_QUERY,
    params: await params,
  });

  if (!project) notFound();

  return (
    <main>
      <h1>{project.name}</h1>
    </main>
  );
};

export default ProjectPage;

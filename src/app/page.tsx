import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="flex flex-col px-4 lg:px-0">
      <Hero />
      <About />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      <Contact />
    </main>
  );
}

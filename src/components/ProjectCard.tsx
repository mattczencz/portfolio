import { PROJECTS_HOME_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Props {
  orientation: 'left' | 'right';
  project: PROJECTS_HOME_QUERYResult[0];
}

const ProjectCard = ({
  orientation,
  project: {
    name,
    shortDesc,
    image,
    repoLink,
    liveLink,
    technology,
    inProgress,
  },
}: Props) => {
  return (
    <div
      className={`flex flex-col lg:items-center bg-white shadow-lg rounded-2xl p-4 lg:p-8 gap-12 ${
        orientation === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      <div className="drop-shadow-md rounded-2xl overflow-hidden relative w-full lg:w-1/2 h-[400px]">
        {image && image.url && (
          <Image
            src={image.url}
            width={600}
            height={400}
            alt={image.altText ?? ''}
            priority
            className="object-cover object-top scrolling-image transition duration-[10000ms] ease-in-out relative"
          />
        )}
        {inProgress && (
          <span className="absolute top-6 -right-20 bg-theme-accent text-white z-10 px-20 py-2 rotate-45 shadow-md">
            In Progress
          </span>
        )}
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/2 gap-8">
        <h3 className="text-xl">{name}</h3>
        <p className="text-center text-lg">{shortDesc}</p>
        <div className="flex gap-8 flex-wrap justify-center">
          {technology?.map((tech) => (
            <p
              key={name + '-' + tech.name}
              className="px-4 py-2 shadow-md rounded-2xl border-theme-accent/25 border text-sm font-bold text-theme-heading-text"
            >
              {tech.name}
            </p>
          ))}
        </div>
        {(liveLink || repoLink) && (
          <div className="flex gap-8 flex-wrap justify-center">
            {repoLink && (
              <Link href={repoLink} className="project-link" target="_blank">
                <FiGithub />
                Code
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} className="project-link" target="_blank">
                <FiExternalLink />
                Live Site
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

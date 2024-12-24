import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className="bg-theme-heading-text flex justify-center px-4 pb-32 pt-8 lg:py-8">
      <div className="flex flex-col md:flex-row gap-4 items-center lg:gap-8 max-w-6xl w-full text-white">
        <FiGithub size={24} />
        <Link
          href="https://github.com/mattczencz/portfolio"
          target="_blank"
          className="text-xl text-center md:text-left text-white relative after:w-0 hover:after:w-4/5 after:border-b-2 after:left-0 after:-bottom-1 after:border-white after:block after:transition-all after:duration-200"
        >
          This site was built by Matt Czencz with Next.js!{' '}
          <span className="underline text-white lg:no-underline">
            View the code here
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;

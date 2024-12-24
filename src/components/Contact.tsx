import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="container content-section gap-16">
      <div className="flex flex-col justify-start gap-4 w-full max-w-6xl">
        <h3 className="text-2xl text-theme-primary">Contact</h3>
        <h3 className="text-3xl">Want to get in touch? Find me below!</h3>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-16 max-w-6xl md:flex-wrap">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white shadow-lg w-16 h-16 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border border-theme-accent/25">
            <FiMail className="text-3xl lg:text-5xl" />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-bold text-xl">Email</p>
            <Link
              href="mailto:mattczenczdev@gmail.com"
              className="text-lg hover:text-theme-primary"
            >
              mattczenczdev@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white shadow-lg w-16 h-16 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border border-theme-accent/25">
            <BsLinkedin className="text-3xl lg:text-5xl" />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-bold text-xl">LinkedIn</p>
            <Link
              href="https://www.linkedin.com/in/matthewczencz/"
              target="_blank"
              className="text-lg hover:text-theme-primary"
            >
              /in/matthewczencz
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white shadow-lg w-16 h-16 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border border-theme-accent/25">
            <FiGithub className="text-3xl lg:text-5xl" />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-bold text-xl">GitHub</p>
            <Link
              href="https://github.com/mattczencz"
              target="_blank"
              className="text-lg hover:text-theme-primary"
            >
              github.com/mattczencz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

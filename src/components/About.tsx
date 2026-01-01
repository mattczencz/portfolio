import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="container content-section lg:bg-theme-background lg:bg-gradient-to-tr lg:from-theme-background from-50% lg:to-white to-50%"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-stretch max-w-6xl">
        <Image
          src="https://images.unsplash.com/photo-1423450822265-fcd97e52ecb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80"
          alt="Welcome to Colorado sign"
          width={400}
          height={400}
          title="Welcome to Colorado sign"
          className="rounded-2xl drop-shadow-lg"
          priority
        />
        <div className="flex flex-col justify-start gap-4">
          <h3 className="text-2xl text-theme-primary">About Me</h3>
          <h3 className="text-3xl">
            A passionate engineer based in Colorado, USA
          </h3>
          <p className="text-lg mt-4">
            Over the course of my career I have gained specialized experience in
            technologies and clients ranging from monorepos and headless
            systems, mom & pop shops and global enterprise companies. As an
            award winning developer, I have made it my career&apos;s mission to
            develop responsive, accessible, and memorable products for whoever I
            get the pleasure to work with. I love finding areas to optimize
            things or make a process simpler. I&apos;m a team player, translator
            for the non-techies, and motivated worker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

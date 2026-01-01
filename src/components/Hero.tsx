const Hero = () => {
  return (
    <section className="container content-section gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl lg:text-7xl text-center">
          Hey! I&apos;m Matt Czencz
        </h1>
        <small className="text-base italic font-extralight">
          Pronunciation: Senz
        </small>
      </div>
      <p className="text-lg lg:text-2xl text-center">
        A{' '}
        <span className="font-bold">
          senior full stack engineer, passionate developer, and computer geek
        </span>{' '}
        based in Colorado. <br />
        My goal is to engineer phenomenal user experiences.
      </p>
    </section>
  );
};

export default Hero;

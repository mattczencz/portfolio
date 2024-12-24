const ProjectsSkeleton = () => {
  return (
    <section
      id="projects"
      className="container content-section gap-16 lg:bg-theme-background"
    >
      <div className="flex flex-col justify-start gap-4 w-full max-w-6xl">
        <div role="status" className="animate-pulse w-full max-w-full">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[800px] mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl w-full">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className={` bg-white shadow-lg rounded-2xl p-4 lg:p-8 gap-12`}
          >
            <div
              role="status"
              className="space-y-12 animate-pulse md:space-y-0 md:space-x-12 rtl:space-x-reverse md:flex md:items-center"
            >
              <div className="flex items-center justify-center w-1/2 h-[400px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-[600px] h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectsSkeleton;

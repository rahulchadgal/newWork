import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl max-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        voluptatibus qui repellendus, eveniet est, fugiat nesciunt in veritatis
        expedita ducimus saepe molestias minima sunt necessitatibus repudiandae,
        natus doloremque? Rerum, tempore.
      </p>
    </>
  );
};

export default About;

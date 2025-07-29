import React from "react";

const IntroCard = () => {
  return (
      <section className="w-full mt-[30px] container">
        <div className="p-2 text-justify">
          <p className="mt-8 text-center">
            <span className="text-primary">Hi!</span> I'm
          </p>
          <h1 className="uppercase no-underline mt-[20px] text-xl md:text-[50px]">
            Experienced
            <span className="text-primary"> Full-Stack </span>
            <span className="md:mt-5 block">Web Developer</span>
          </h1>
          <p className="text-muted my-10">
            Experienced Full-Stack Developer skilled in <strong>.NET</strong>,{" "}
            <strong>Entity Framework</strong>, <strong>MS SQL</strong>,{" "}
            <strong>MongoDB</strong>, <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Tailwind</strong>, and{" "}
            <strong>Bootstrap</strong>. Passionate about learning new
            technologies, tackling challenges, and delivering high-quality
            solutions. A dedicated team player with strong problem-solving skills
            and a collaborative mindset.
          </p>
          <p className="text-muted mb-10">
            <strong>Software Engineer at Brain Station 23</strong> <br />
            <em>July 2025 – Present | Onsite</em> <br />
            Working with <strong>.NET Framework</strong>, <strong>C#</strong>,{" "}
            <strong>Entity Framework</strong>, and{" "}
            <strong>Microsoft SQL Server</strong>. Experienced in{" "}
            <strong>OOP</strong>, <strong>Design Patterns</strong>,{" "}
            <strong>SOLID Principles</strong>, <strong>Clean Architecture</strong>
            , <strong>Stored Procedures</strong>, <strong>SignalR</strong>,{" "}
            <strong>CI/CD</strong>, <strong>Git</strong>, <strong>GitHub</strong>,{" "}
            <strong>Docker</strong>, and <strong>Unit Testing</strong>. Currently
            developing plugins and themes for <strong>NopCommerce</strong> under{" "}
            <strong>NopStation</strong>.
          </p>
        </div>
      </section>
  );
};

export default IntroCard;

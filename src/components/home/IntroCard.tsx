import React from "react";

const IntroCard = () => {
  return (
    <section className="w-full mt-[30px] container">
      <div className="p-2 text-justify">
        <p className="mt-8"> Hi ! There I &#39; m </p>
        <h1 className="uppercase no-underline mt-[20px] text-[50px] ">
          {" "}
          Professional{" "}
          <span className="text-primary"> Full-Stack <br/> Web Developer </span>{" "}
        </h1>
        <p className="text-muted my-10">
          Full Stack Web Developer and Web Application specializing in front-end
          and back-end development. Experienced with all stages of the
          development cycle for dynamic websites. Well versed in numerous
          programming languages JavaScript ES6 Nodejs, structured language HTML5
          CSS3, open-source front-end JavaScript library ReactJS, NextJS With
          MongoDB & MySql Database.
        </p>
      </div>
    </section>
  );
};

export default IntroCard;

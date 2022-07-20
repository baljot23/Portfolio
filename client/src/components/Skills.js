import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="h-full px-2 scroll-smooth">
      {/*container*/}
      <div className="container text-center mt-4 h-full ">
        <div className="flex flex-wrap -m-2 h-full ">
          {/*Web-Developer Container */}
          <div className="p-4 lg:pb-12  md:w-1/3 ">
            <div className="h-full border-2 border-violet-300 overflow-hidden">
              <h2 className="text-center pt-4 font-bold">Web Developer</h2>
              <div className="p-6 ">
                <p className="tracking-widest text-xs title-font font-medium mb-1">
                  I ensure that sites meet user expectations by making sure it
                  is presentable, run smoothly and offer easy access points
                </p>
                <h1 className="title-font text-lg text-violet-300 mb-3 font-bold ">
                  Languages I know:
                </h1>
                <div>
                  <ul>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>NodeJs</li>
                    <li>Tailwind</li>
                    <li>Github</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div>
                  <h1 className="title-font text-lg font-bold text-violet-300 mb-3">
                    Languages I'm Learning:
                  </h1>
                  <ul>
                    <li>MySQL</li>
                    <li>Redux</li>
                    <li>WordPress</li>
                    <li>VueJs</li>
                    <li>Angular</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="flex items-center flex-wrap "></div>
              </div>
            </div>
          </div>

          {/*Graphic Designer Container */}
          <div className="p-4 lg:pb-48 md:pb-40 md:w-1/3">
            <div className="h-full border-2 border-violet-300 overflow-hidden mb-2">
              <h2 className="text-center pt-4 font-bold">Graphic Designer</h2>
              <div className="p-6">
                <p className="tracking-widest text-xs title-font font-medium mb-1">
                  I design engaging user experiences and intuitive user
                  interfaces for the web. I make sure it meets my clients
                  expectations and make their vision come to live.
                </p>
                <h1 className="title-font text-lg font-medium text-violet-300 mb-3">
                  Languages I know:
                </h1>
                <div>
                  <ul>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe After Effects</li>
                    <li>Canva</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div>
                  <h1 className="title-font text-lg font-medium text-violet-300 mb-3">
                    Languages I'm Learning:
                  </h1>
                  <ul>
                    <li>Adobe InDesign</li>
                    <li>Lunacy</li>
                    <li>Sketch</li>
                    <li>Corel Draw</li>
                  </ul>
                </div>
                <div className="flex items-center flex-wrap"></div>
              </div>
            </div>
          </div>

          {/*Freelancer Container */}
          <div className="p-4 lg:pb-80 md:pb-80 md:w-1/3 w-full">
            <div className="h-full border-2 border-violet-300 overflow-hidden sm:w-full">
              <h2 className="text-center pt-4 font-bold">Freelancer</h2>
              <div className="p-6">
                <p className="tracking-widest text-xs title-font font-medium mb-1">
                  I help some of the fastest growing startups launch and grow
                  their products.
                </p>
                <h1 className="title-font text-lg font-medium text-violet-300 mb-3">
                  View Services Offered
                </h1>
                <div>
                  <ul>
                    <li>Fiverr</li>
                    <li>upwork</li>
                    <li>freelancer</li>
                    <li>upstack</li>
                  </ul>
                </div>
                <div>
                  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-300 hover:border-violet-300">
                    Let's Work Together
                  </button>
                </div>
                <div className="flex items-center flex-wrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

import React from 'react';

function ProjectCard({ img_bg, title, title_url, level, demo_url, solution_url, brief_url, tools }) {

  function getLevelName(level) {
    if (level == "1") {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level1 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level1 text-white text-center">1</p>
          <p className="px-2 pt-[2px] h-full text-level1">NEWBIE</p>
        </div>
      );
    } else if (level == "2") {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level2 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level2 text-white text-center">2</p>
          <p className="px-2 pt-[2px] h-full text-level2">JUNIOR</p>
        </div>
      );
    } else if (level == "3") {
      return (
        <div className="flex flex-row items-center justify-between min-w-max ml-2 ring-level3 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level3 text-white text-center">3</p>
          <p className="px-2 pt-[2px] h-full text-level3">INTERMEDIATE</p>
        </div>
      );
    } else if (level == "4") {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level4 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.9rem]">
          <p className="px-2 pt-[2px] h-full bg-level4 text-white text-center">4</p>
          <p className="px-2 pt-[2px] h-full text-level4">ADVANCED</p>
        </div>
      );
    } else if (level == "5") {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level5 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level5 text-white text-center">5</p>
          <p className="px-2 pt-[2px] h-full text-level5">GURU</p>
        </div>
      );
    }
  }

  function getLevelClass(level) {
    if (level == "1") {
      return "border-l-level1 border-b-level1 text-level1";
    } else if(level == "2") {
      return "border-l-level2 border-b-level2 text-level2";
    } else if(level == "3") {
      return "border-l-level3 border-b-level3 text-level3";
    } else if(level == "4") {
      return "border-l-level4 border-b-level4 text-level4";
    } else if(level == "5") {
      return "border-l-level5 border-b-level5 text-level5";
    }
  }

  function getLabel(tool) {
    if (tool == "React") {
      return (
        <p className="px-2 h-full bg-react text-white w-fit my-1 ring-react ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">REACT</p>
      );
    } else if (tool == "Bootstrap") {
      return (
        <p className="px-2 h-full bg-bootstrap text-white w-fit my-1 ring-bootstrap ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">BOOTSTRAP</p>
      );
    } else if (tool == "SASS") {
      return (
        <p className="px-2 h-full bg-sass text-white w-fit my-1 ring-sass ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">SASS</p>
      );
    } else if (tool == "Nextjs") {
      return (
        <p className="px-2 h-full bg-nextjs text-white w-fit my-1 ring-nextjs ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">NEXTJS</p>
      );
    } else if (tool == "Tailwind") {
      return (
        <p className="px-2 h-full bg-tailwind text-white w-fit my-1 ring-tailwind ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">TAILWIND</p>
      );
    }
  }

  return (
    // <div className="flex w-full max-h-fit flex-col rounded-lg overflow-hidden shadow-lightPurple shadow-[0_0px_5px]">
    //   <div className={`flex flex-row h-44 ${ img_bg }`}></div>
    //   <div className="px-6 py-3 text-darkBlue">
    //     <div className="flex flex-row items-center justify-between">
    //       <a href={title_url} target="_blank" className="py-2 text-xl font-heeboBold hover:underline lg:text-md">{title}</a>
    //       {getLevelName(level)}
    //     </div>
    //     <div className="flex flex-row items-center justify-left py-3 text-md lg:text-sm">
    //       <a href={demo_url} target="_blank" className="project-link italic mr-3">Live Demo</a>
    //       <a href={solution_url} target="_blank" className="project-link italic mr-3">Solution</a>
    //       <a href={brief_url} target="_blank" className="project-link italic mr-3">Project Brief</a>
    //     </div>
    //   </div>
    // </div>

    <div className="flex w-full max-h-fit flex-col rounded-lg overflow-hidden shadow-lightPurple shadow-[0_0px_5px]">
      <div className={`flex flex-row h-44 ${ img_bg }`}>
        {/* <div className="flex flex-row h-fit w-full justify-end">
          <span className={`flex bg-white px-2 py-2 rounded-bl-md border-l-2 border-b-2 ${ getLevelClass(level) } text-sm font-sourceSansProBold lg:text-[0.75rem]`}>
            {getLevelName(level)}
          </span>
        </div> */}
      </div>
      <div className="flex-auto grid grid-cols-1 px-5 py-3 pb-1 text-gray">
        <div className="flex flex-row items-center justify-between">
          <a href={title_url} target="_blank" className="py-2 text-xl font-heeboBold hover:underline lg:text-md">{title}</a>
          {getLevelName(level)}
        </div>
        {/* <div className="grid grid-cols-2 items-end justify-between py-3 font-sourceSansProRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={`flex flex-row project-link text-lg ${ getHoverClass(type.split(",")[0]) }`}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col items-end">
              {type.split(",").map((t) => getLabel(t))}
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-2 items-end justify-between py-3 text-md lg:text-sm">
          <div className="flex flex-row items-end justify-left w-full">
            <a href={demo_url} target="_blank" className="project-link italic mr-3 w-full">Live Demo</a>
            <a href={solution_url} target="_blank" className="project-link italic mr-3">Solution</a>
            <a href={brief_url} target="_blank" className="project-link italic mr-3">Project Brief</a>
          </div>
           
           <div className="flex flex-col items-end justify-end w-full">
            <div className="flex flex-col items-end">
              {tools.split(",").map((t) => getLabel(t))}
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard;

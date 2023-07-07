import React from 'react';

function ProjectCard({ img_bg, title, title_url, level, demo_url, solution_url, brief_url }) {

  function getLevelName(level) {
    if (level == '1') {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level1 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level1 text-white text-center">1</p>
          <p className="px-2 pt-[2px] h-full text-level1">NEWBIE</p>
        </div>
      );
    } else if (level == '2') {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level2 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level2 text-white text-center">2</p>
          <p className="px-2 pt-[2px] h-full text-level2">JUNIOR</p>
        </div>
      );
    } else if (level == '3') {
      return (
        <div className="flex flex-row items-center justify-between min-w-max ml-2 ring-level3 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level3 text-white text-center">3</p>
          <p className="px-2 pt-[2px] h-full text-level3">INTERMEDIATE</p>
        </div>
      );
    } else if (level == '4') {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level4 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.9rem]">
          <p className="px-2 pt-[2px] h-full bg-level4 text-white text-center">4</p>
          <p className="px-2 pt-[2px] h-full text-level4">ADVANCED</p>
        </div>
      );
    } else if (level == '5') {
      return (
        <div className="flex flex-row items-center justify-center min-w-max ml-2 ring-level5 ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]">
          <p className="px-2 pt-[2px] h-full bg-level5 text-white text-center">5</p>
          <p className="px-2 pt-[2px] h-full text-level5">GURU</p>
        </div>
      );
    }
  }

  return (
    <div className="flex w-full max-h-fit flex-col rounded-lg overflow-hidden shadow-lightPurple shadow-[0_0px_5px]">
      <div className={`flex flex-row h-44 ${ img_bg }`}></div>
      <div className="px-6 py-3 text-darkBlue">
        <div className="flex flex-row items-center justify-between">
          <a href={title_url} target="_blank" className="py-2 text-xl font-heeboBold hover:underline lg:text-md">{title}</a>
          {getLevelName(level)}
        </div>
        <div className="flex flex-row items-center justify-left py-3 text-md lg:text-sm">
          <a href={demo_url} target="_blank" className="project-link italic mr-3">Live Demo</a>
          <a href={solution_url} target="_blank" className="project-link italic mr-3">Solution</a>
          <a href={brief_url} target="_blank" className="project-link italic mr-3">Project Brief</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;

import React from 'react';
import details from '../styles/dynamicDetails';

function ProjectCard({ img, title, code_url, level, demo_url, solution_url, brief_url, tools }) {

  // Get specific Tailwind class based on CSS and project types
  function getDetails(category, type) {
    return details[category][type];
  }

  function getLabel(tool) {
    return (
      <p className={`px-2 h-full ${getDetails('toolText', tool)} w-fit my-1 font-heeboBold text-lg overflow-hidden lg:text-[1.7rem]`}>{getDetails('toolLabel', tool)}</p>
    );
  }

  function getLevelName(level) {
    return (
      <div className={`flex flex-row items-center justify-center min-w-max ml-2 ${getDetails('levelRing', level)} ring-1 rounded-md font-heeboBold text-sm overflow-hidden lg:text-[0.75rem]`}>
        <p className={`px-2 pt-[2px] h-full ${getDetails('levelBg', level)} text-white text-center`}>{level}</p>
        <p className={`px-2 pt-[2px] h-full ${getDetails('levelText', level)}`}>{getDetails('levelLabel', level)}</p>
      </div>
    );
  }

  return (
    <div className="flex w-full max-h-fit flex-col rounded-lg overflow-hidden shadow-lightPurple shadow-[0_0px_5px]" x-intersect="$el.classList.add('fade-in-bottom')">
      <div 
        className={"flex flex-row h-44 bg-top bg-no-repeat bg-cover bg-project"}
        style={{
          backgroundImage: `url(${ img }.jpg)`
        }}
      >
      </div>
      <div className="flex-auto grid grid-cols-1 px-5 py-3 pb-1 text-gray">
        <div className="flex flex-row items-center justify-between">
          <a href={code_url} target="_blank" className="py-2 text-xl font-heeboBold hover:underline lg:text-md">{title}</a>
          {getLevelName(level)}
        </div>
        <div className="grid grid-cols-2 items-end justify-between py-3 text-md lg:text-sm">
          <div className="flex flex-row items-end justify-left w-full">
            <a href={demo_url} target="_blank" className="project-link italic mr-3">Demo</a>
            <a href={solution_url} target="_blank" className="project-link italic mr-3">Solution</a>
            <a href={brief_url} target="_blank" className="project-link italic mr-3">Brief</a>
          </div>
           
           <div className="flex flex-col items-end justify-end w-full">
            <div className="flex flex-row items-end">
              {tools.map((t) => getLabel(t))}
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard;

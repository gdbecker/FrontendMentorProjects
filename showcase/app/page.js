'use client'
import React, { useState, useEffect } from 'react';
import LoadingPage from './loading';
import ProjectCard from './components/ProjectCard';
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from './services/firebase.config';

function Home() {

  // Firebase db variables
  const collectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [projectSearch, setProjectSearch] = useState('');
  const [levelSelect, setLevelSelect] = useState('Filter by Level');
  const [levels, setLevels] = useState([]);
  const [toolsSelect, setToolsSelect] = useState('Filter by Tools');
  const [tools, setTools] = useState([]);

  // Update project to search
  const onChangeProjectSearch = (e) => {
    setProjectSearch(e.currentTarget.value);

    filterProjects(e.currentTarget.value, levelSelect, toolsSelect);
  }

  // Update difficulty level to filter
  const handleLevelChange = (e) => {
    setLevelSelect(e.target.name);

    filterProjects(projectSearch, e.target.name, toolsSelect);
  };

  // Update tools to filter
  const handleToolsChange = (e) => {
    setToolsSelect(e.target.name);

    filterProjects(projectSearch, levelSelect, e.target.name);
  };

  // Filter by project name search, level, and tools
  const filterProjects = (projectName, level, tools) => {
    if (projectName != "" && tools != "Filter by Tools" && level != "Filter by Level") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.level == level && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools" && level != "Filter by Level") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.level == level;
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools" && projectName != "") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools) && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (level != "Filter by Level" && projectName != "") {
      let f =  projects.filter(function(p) {
        return p.level == level && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (tools != "Filter by Tools") {
      let f =  projects.filter(function(p) {
        return p.tools.includes(tools);
      });

      setFilteredProjects(f);
    } else if (level != "Filter by Level") {
      let f =  projects.filter(function(p) {
        return p.level == level;
      });

      setFilteredProjects(f);
    } else if (projectName != "") {
      let f =  projects.filter(function(p) {
        return p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else {
      setFilteredProjects(projects);
    }
  }

  // Get project types list
  const grabTools = (projects) => {
    let allTools = projects.map(p => p.tools);
    let allToolsMerge = allTools.flat(1);
    let toolsList = [...new Set(allToolsMerge)].sort();

    toolsList = toolsList.map(p => {
      return({tools: p});
    });

    toolsList.unshift({tools: "Filter by Tools"})
    setTools(toolsList);
  }

  // Get difficulty levels list
  const grabLevels = (projects) => {
    let allLevels = projects.map(p => p.level);
    let levelsList = [...new Set(allLevels)].sort();

    levelsList = levelsList.map(p => {
      return({level: p});
    });

    levelsList.unshift({level: "Filter by Level"})
    setLevels(levelsList);
  }

  // Get all projects
  const getProjects = async () => {
    await getDocs(collectionRef).then((project) => {
      let projectData = project.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      projectData = projectData.filter((project) => project.active);
      projectData.sort(function (first, second) {
        return second.level - first.level || first.title.localeCompare(second.title)
      })
      setProjects(projectData);
      setFilteredProjects(projectData);
      grabTools(projectData);
      grabLevels(projectData);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Set up app for viewing
  useEffect(() => {
    getProjects();
  }, [])

  if (isLoading) {
    return (
      <LoadingPage />
    )
  }

  if (!isLoading) {
    return (
      <main className="flex flex-col items-center justify-center w-full h-full p-10 bg-white md:items-center 2xl:px-36">

        <h1 className="pb-9 font-heeboRegular text-justify text-darkBlue leading-7 md:w-[50vw]">
          Here is a collection of solutions I created for a variety of challenges from <a href="https://www.frontendmentor.io" target="_blank" className=" font-heeboRegular font-bold hover:text-darkPurple">Frontend Mentor</a> - a platform that provides 
          an awesome way to grow in frontend development skills. I really enjoy how each project's approach is a lot like a real-life 
          scenario: you're given a brief that contains core design goals and styles, sometimes Sketch or Figma files for a greater 
          level of detail, and then it's up to you to deliver a solution that as closely matches what's needed as possible. There is a 
          lot of flexibility to build however you want. Each of these projects within this showcase pushed me for different reasons, to 
          stretch what I thought I was capable of, and to challenge me to keep learning and growing - aiming to get better everyday with 
          practice.
          
          Take a look and explore the projects I've worked on, view more details in Github, my solutions on Frontend Mentor and play with a live demo!
        </h1>

        <div className="flex flex-col w-full py-5 justify-between md:flex-row md:min-h-fit">
          <div className="flex flex-row w-full items-center justify-between pl-5 shadow-md rounded-md bg-white md:w-[40%]">
            <h1 className="font-heeboRegular text-gray"><BiSearch /></h1>
            <input 
              className="flex w-full p-4 bg-white text-gray text-xs font-heeboRegular rounded-md focus:outline-none"
              placeholder="Search for a project!"
              id="projectSearch" 
              type="text" 
              value={projectSearch}
              onChange={e => onChangeProjectSearch(e)}
            />
          </div>
          <details className="flex dropdown w-[100%] my-2 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
            <summary className="flex flex-row items-center justify-between h-full mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-veryDarkBlue-Light hover:bg-white">
              <h1 
                className="flex normal-case text-xs font-heeboRegular"
              >{levelSelect}</h1>
              <BiChevronDown className="text-sm"/>
            </summary>
            <ul className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-gray">
              {levels.map((l) => (
                <li
                  onClick={(e) => handleLevelChange(e)}
                  className="text-xs font-heeboRegular"
                >
                  <a 
                    className="px-4 py-1 rounded-none hover:bg-white"
                    name={l.level}
                  >
                    {l.level}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <details className="flex dropdown w-[100%] my-0 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
            <summary className="flex flex-row items-center justify-between h-full mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-veryDarkBlue-Light hover:bg-white">
              <h1 
                className="flex normal-case text-xs font-heeboRegular"
              >{toolsSelect}</h1>
              <BiChevronDown className="text-sm"/>
            </summary>
            <ul className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-gray">
              {tools.map((t) => (
                <li
                  onClick={(e) => handleToolsChange(e)}
                  className="text-xs font-heeboRegular"
                >
                  <a 
                    className="px-4 py-1 rounded-none hover:bg-white"
                    name={t.tools}
                  >
                    {t.tools}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProjects.map(({ id, img, title, code_url, level, demo_url, solution_url, brief_url, tools  }, index) =>
            <ProjectCard
              key={index} 
              index={index}
              id={id}
              img={img}
              title={title}
              code_url={code_url}
              level={level}
              demo_url={demo_url}
              solution_url={solution_url}
              brief_url={brief_url}
              tools={tools}
            />
          )}
        </div>
      </main>
    )
  }
}

export default Home;

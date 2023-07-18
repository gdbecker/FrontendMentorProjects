import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProjectCard({ alpha2Code, img_url, name, population, region, capital }) {

  return (
    <Link 
      href={{
        pathname: `/${alpha2Code}` ,
        // query: {
        //   demo_url: `${demo_url}`,
        //   title: `${title}`,
        //   code_url: `${code_url}`,
        //   type: `${type}`,
        // }
      }}
      className="flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-md">
      <div className={`flex flex-row h-44 ${ img_bg }`}></div>
      <div className="px-5 py-3 pb-1 text-gray">
        
        <div className="grid grid-cols-2 items-center justify-between py-3 font-interRegular text-md lg:text-sm">
          
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;
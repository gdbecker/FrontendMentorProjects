import React from 'react';

function Footer() {

  return (
    <div className="h-fit p-5 font-heeboRegular text-center text-black text-sm border-lightGray border-t-2 bg-white 2xl:px-36">
      Challenges by <a href="https://www.frontendmentor.io" target="_blank" className=" font-heeboRegular hover:text-darkPurple">Frontend Mentor</a>.
      Designed and developed with ❤️ by <a href="https://github.com/gdbecker/FrontendMentorProjects/tree/main" target="_blank" className="font-heeboRegular hover:text-darkPurple">Garrett Becker</a>. &copy; 2023-{new Date().getFullYear()} All rights reserved.
    </div>
  )
}

export default Footer;
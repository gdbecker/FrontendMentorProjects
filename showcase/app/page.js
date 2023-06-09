import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
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

      <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProjectCard 
          img_bg="bg-advice-app"
          title="Advice Generator App"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/advice-app"
          level="2"
          demo_url="https://advice-app-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/advice-app-with-next-tailwind-8S94c3c-U-"
          brief_url="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        />

        <ProjectCard 
          img_bg="bg-blogr-homepage"
          title="Blogr Landing Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/blogr-homepage"
          level="2"
          demo_url="https://blogr-homepage-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/blogr-landing-page-with-react-bootstrap-ziqxnxrt9z"
          brief_url="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP"
        />

        <ProjectCard 
          img_bg="bg-fylo-landing-dark"
          title="Fylo Dark Theme Landing Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/fylo-landing-dark"
          level="2"
          demo_url="https://fylo-landing-dark-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/fylo-dark-landing-page-with-next-and-sass-IAyv5CaYqZ#comment-64722b78fc4fcd2328945d5f"
          brief_url="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"
        />

        <ProjectCard 
          img_bg="bg-news-homepage"
          title="News Homepage"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/news-homepage"
          level="2"
          demo_url="https://news-homepage-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/news-homepage-with-react-bootstrap-tkackbvjn1"
          brief_url="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
        />

        <ProjectCard 
          img_bg="bg-notifications-page"
          title="Notifications Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/notifications-page"
          level="2"
          demo_url="https://notifications-page-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/notifications-page-with-react-bootstrap-LjvWM4bG57"
          brief_url="https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC"
        />

        <ProjectCard 
          img_bg="bg-social-media-dashboard"
          title="Social Media Dashboard with Theme Switcher"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/social-media-dashboard"
          level="2"
          demo_url="https://social-media-dashboard-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/social-media-dashboard-with-next-tailwind-k1uS7_Om47"
          brief_url="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
        />

        <ProjectCard 
          img_bg="bg-sunnyside"
          title="Sunnyside Agency Landing Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/sunnyside"
          level="2"
          demo_url="https://sunnyside-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/sunnyside-landing-page-with-next-sass-EZ3xT9DAIG"
          brief_url="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef"
        />

        <ProjectCard 
          img_bg="bg-testimonials-grid"
          title="Notifications Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/testimonials-grid"
          level="2"
          demo_url="https://testimonials-grid-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/testimonials-grid-with-next-tailwind-Jk2KbMWvmV"
          brief_url="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7"
        />

        <ProjectCard 
          img_bg="bg-3-column-card"
          title="3-Column Preview Card Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/3-column-card"
          level="1"
          demo_url="https://3-column-card-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/3column-card-with-nextjs-sass-voBV4ThwSG"
          brief_url="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
        />

        <ProjectCard 
          img_bg="bg-huddle-landing"
          title="Huddle Landing Page"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/huddle-landing"
          level="1"
          demo_url="https://huddle-landing-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/huddle-landing-with-next-tailwind-qui6I1xtZh"
          brief_url="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0"
        />

        <ProjectCard 
          img_bg="bg-rating-component"
          title="Interactive Rating Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/rating-component"
          level="1"
          demo_url="https://rating-component-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/rating-component-with-react-bootstrap-Tba__w3pRE"
          brief_url="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
        />
        
        <ProjectCard 
          img_bg="bg-nft-card"
          title="NFT Preview Card Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/nft-card"
          level="1"
          demo_url="https://nft-card-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/nft-card-component-with-react-bootstrap-hiW4LJD-cc"
          brief_url="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
        />

        <ProjectCard 
          img_bg="bg-profile-card"
          title="Profile Card Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/profile-card"
          level="1"
          demo_url="https://profile-card-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/profile-card-with-next-sass-bgCML2EGD_"
          brief_url="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ"
        />
        
        <ProjectCard 
          img_bg="bg-qr-code"
          title="QR Code Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/qr-code"
          level="1"
          demo_url="https://qr-code-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/qr-code-component-hosted-on-netlify-rwLGIUAbUi"
          brief_url="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
        />

        <ProjectCard 
          img_bg="bg-results-component"
          title="Results Summary Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/results-component"
          level="1"
          demo_url="https://results-component-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/results-component-with-react-bootstrap-EaorfiBf3j"
          brief_url="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV"
        />

        <ProjectCard 
          img_bg="bg-stats-card"
          title="Stats Preview Card Component"
          title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/stats-card"
          level="1"
          demo_url="https://stats-card-gdbecker.netlify.app"
          solution_url="https://www.frontendmentor.io/solutions/stats-card-with-next-tailwind-s2UBHsewM6"
          brief_url="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"
        />
      </div>
  </main>
  )
}

export default Home;

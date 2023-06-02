import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-white lg:grid lg:grid-cols-3 xl:grid-cols-4">
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
    </main>
  )
}

export default Home;

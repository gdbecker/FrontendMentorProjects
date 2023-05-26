import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-white lg:grid lg:grid-cols-3">
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
        img_bg="bg-blogr-homepage"
        title="Blogr Landing Page"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/blogr-homepage"
        level="2"
        demo_url="https://blogr-homepage-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/blogr-landing-page-with-react-bootstrap-ziqxnxrt9z"
        brief_url="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP"
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
        solution_url=""
        brief_url="https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC"
      />
    </main>
  )
}

export default Home;

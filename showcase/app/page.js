import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-white lg:grid lg:grid-cols-3">
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
        img_bg="bg-nft-card"
        title="NFT Preview Card Component"
        title_url="https://github.com/gdbecker/FrontendMentorProjects/tree/main/nft-card"
        level="1"
        demo_url="https://nft-card-gdbecker.netlify.app"
        solution_url="https://www.frontendmentor.io/solutions/nft-card-component-with-react-bootstrap-hiW4LJD-cc"
        brief_url="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
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
    </main>
  )
}

export default Home;

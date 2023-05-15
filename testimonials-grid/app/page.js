import React from 'react';
import Image from 'next/image';
import ImgDaniel from '../public/image-daniel.jpg';
import ImgJeanette from '../public/image-jeanette.jpg';
import ImgJonathan from '../public/image-jonathan.jpg';
import ImgKira from '../public/image-kira.jpg';
import ImgPatrick from '../public/image-patrick.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-lightGrayishBlue" >
      <section className="flex flex-col gap-6 p-20 lg:flex-row lg:grid-cols-4">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:basis-3/4">

          <div className="px-8 py-6 bg-violet-100 rounded-lg font-barlowMedium bg-[url('../../public/bg-pattern-quotation.svg')] bg-no-repeat bg-[right_2rem_top_0rem] md:bg-[right_6rem_top_0rem] md:col-span-2">
            <div className="flex flex-row p-2 pl-0">
              <div className="flex h-7 items-center justify-start pr-5">
                <Image src={ImgDaniel} alt="Daniel" className="w-8 h-8 rounded-full ring-2 ring-white-200" />
              </div>
              <div className="flex h-7 items-center justify-center">
                <div className="flex flex-col">
                  <h4 className="text-white-100 text-sm">Daniel Clifford</h4>
                  <p className="text-white-200 text-sm">Verified Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <h4 className="font-barlowSemiBold text-white-100 text-xl">
                I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                in the company I joined. I honestly feel I got every penny’s worth.
              </h4>
            </div>
            <div className="flex flex-row py-2">
              <p className="text-white-200 text-sm">
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
              </p>
            </div>
          </div>

          <div className="px-8 py-6 bg-grayishBlue rounded-lg font-barlowMedium">
            <div className="flex flex-row p-2 pl-0">
              <div className="flex h-7 items-center justify-start pr-5">
                <Image src={ImgJonathan} alt="Jonathan" className="w-8 h-8 rounded-full ring-2 ring-white-200" />
              </div>
              <div className="flex h-7 items-center justify-center">
                <div className="flex flex-col">
                  <h4 className="text-white-100 text-sm">Jonathan Walters</h4>
                  <p className="text-white-200 text-sm">Verified Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <h4 className="font-barlowSemiBold text-white-100 text-xl">
                The team was very supportive and kept me motivated
              </h4>
            </div>
            <div className="flex flex-row py-2">
              <p className="text-white-200 text-sm">
                “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                for a big company. This was one of the best investments I’ve made in myself. ”
              </p>
            </div>
          </div>

          <div className="px-8 py-6 bg-white-100 rounded-lg font-barlowMedium">
            <div className="flex flex-row p-2 pl-0">
              <div className="flex h-7 items-center justify-start pr-5">
                <Image src={ImgJeanette} alt="Jeanette" className="w-8 h-8 rounded-full ring-2 ring-white-200" />
              </div>
              <div className="flex h-7 items-center justify-center">
                <div className="flex flex-col">
                  <h4 className="text-grayishBlue text-sm">Jeanette Harmon</h4>
                  <p className="text-lightGray text-sm">Verified Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <h4 className="font-barlowSemiBold text-blackishBlue text-xl">
                An overall wonderful and rewarding experience
              </h4>
            </div>
            <div className="flex flex-row py-2">
              <p className="text-grayishBlue text-sm">
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                while doing something I love. ”
              </p>
            </div>
          </div>

          <div className="px-8 py-6 bg-blackishBlue rounded-lg font-barlowMedium md:col-span-2">
            <div className="flex flex-row p-2 pl-0">
              <div className="flex h-7 items-center justify-start pr-5">
                <Image src={ImgPatrick} alt="Jonathan" className="w-8 h-8 rounded-full ring-2 ring-white-200" />
              </div>
              <div className="flex h-7 items-center justify-center">
                <div className="flex flex-col">
                  <h4 className="text-white-100 text-sm">Patrick Abrams</h4>
                  <p className="text-white-200 text-sm">Verified Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <h4 className="font-barlowSemiBold text-white-100 text-xl">
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                learning from their experiences was easy.
              </h4>
            </div>
            <div className="flex flex-row py-2">
              <p className="text-white-200 text-sm">
                “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                junior developer. The standard is above the rest. You will get the personal attention you need from 
                an incredible community of smart and amazing people. ”
              </p>
            </div>
          </div>

        </div>
        <div className="lg:grid lg:basis-1/4">

          <div className="px-8 py-6 bg-white-100 rounded-lg font-barlowMedium">
            <div className="flex flex-row p-2 pl-0">
              <div className="flex h-7 items-center justify-start pr-5">
                <Image src={ImgKira} alt="Kira" className="w-8 h-8 rounded-full ring-2 ring-white-200" />
              </div>
              <div className="flex h-7 items-center justify-center">
                <div className="flex flex-col">
                  <h4 className="text-grayishBlue text-sm">Kira Whittle</h4>
                  <p className="text-lightGray text-sm">Verified Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-2">
              <h4 className="font-barlowSemiBold text-blackishBlue text-xl">
                Such a life-changing experience. Highly recommended!
              </h4>
            </div>
            <div className="flex flex-row py-2">
              <p className="text-grayishBlue text-sm">
                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                100% recommend! ”
              </p>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Home;

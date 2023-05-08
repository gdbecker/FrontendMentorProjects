'use client';
import React from'react';
import { useState, useEffect } from'react';
import Image from 'next/image';
import IconAccess from '../public/icon-access-anywhere.svg';
import IconSecurity from '../public/icon-security.svg';
import IconCollaboration from '../public/icon-collaboration.svg';
import IconAnyFile from '../public/icon-any-file.svg';
import IconArrow from '../public/icon-arrow.svg';
import Profile1 from '../public/profile-1.jpg';
import Profile2 from '../public/profile-2.jpg';
import Profile3 from '../public/profile-3.jpg';
import LoadingPage from './loading';

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div id="home-page">
      <div className="section-intro">
        <div className="row">
          <div className="section-intro-pic"></div>
        </div>
        <div className="row mt-3">
          <div className=""></div>
          <div className="">
            <div className="row mt-3">
              <h1 className="section-intro-header">
                All your files in one secure location, accessible anywhere.
              </h1>
            </div>
            <div className="row mt-3">
              <p className="section-intro-text">
                Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.
              </p>
            </div>
            <div className="row mt-3">
              <div className="">
                <button type="button" className="section-intro-button">Get Started</button>
              </div>
              
            </div>
          </div>
        </div>


      </div>

      <div className="container section-details">
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="row mt-4">
              <Image 
                src={IconAccess}
                alt="Access"
                width={75}
                height={75}
              />
            </div>
            <div className="row mt-4">
              <h2 className="section-details-header">Access your files, anywhere</h2>
            </div>
            <div className="row mt-1">
              <p className="section-details-text">
                The ability to use a smartphone, tablet, or computer to access your account means your 
                files follow you everywhere.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="row mt-4">
              <Image 
                src={IconSecurity}
                alt="Security"
                width={75}
                height={75}
              />
            </div>
            <div className="row mt-4">
              <h2 className="section-details-header">Security you can trust</h2>
            </div>
            <div className="row mt-1">
              <p className="section-details-text">
                2-factor authentication and user-controlled encryption are just a couple of the security 
                features we allow to help secure your files.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5">
            <div className="row mt-4">
              <Image 
                src={IconCollaboration}
                alt="Collaboration"
                width={75}
                height={75}
              />
            </div>
            <div className="row mt-4">
              <h2 className="section-details-header">Real-time collaboration</h2>
            </div>
            <div className="row mt-1">
              <p className="section-details-text">
                Securely share files and folders with friends, family and colleagues for live collaboration. 
                No email attachments required.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="row mt-4">
              <Image 
                src={IconAnyFile}
                alt="Any File"
                width={75}
                height={75}
              />
            </div>
            <div className="row mt-4">
              <h2 className="section-details-header">Store any type of file</h2>
            </div>
            <div className="row mt-1">
              <p className="section-details-text">
                Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                file types to be securely stored and shared.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-how">
        <div className="row">
          <div className="col-md-6 section-how-pic">

          </div>
          <div className="col-md-6 section-how-content">
            {/* <div className="row mt-3"> */}
              <h1 className="section-how-header">Stay productive, wherever you are</h1>
            {/* </div> */}
            {/* <div className="row mt-3"> */}
              <p className="section-how-text">
                Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                storage needs.
              </p>
            {/* </div> */}
            {/* <div className="row mt-0"> */}
              <p className="section-how-text">
                Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.
              </p>
            {/* </div> */}
            {/* <div className="row mt-0"> */}
              <a href="/" className="section-how-link">
                <p className="section-how-text">
                  See how Fylo works <Image src={IconArrow} alt="Arrow" width={15} height={15}/>
                </p>
              </a>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="container section-testimonials">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="testimonial-box">
              <div className="row">
                <p className="testimonial-text">
                  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                  become a well-oiled collaboration machine.
                </p>
              </div>
              <div className="d-inline-flex flex-row">
                <div className="p-2">
                  <div className="profile-wrapper">
                    <Image src={Profile1} alt="Profile" width={33} height={33} />
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="profile-name">Satish Patel</h4>
                  <h4 className="profile-title">Founder & CEO, Huddle</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <div className="row">
                <p className="testimonial-text">
                  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                  become a well-oiled collaboration machine.
                </p>
              </div>
              <div className="d-inline-flex flex-row">
                <div className="p-2">
                  <div className="profile-wrapper">
                    <Image src={Profile2} alt="Profile" width={33} height={33} />
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="profile-name">Bruce McKenzie</h4>
                  <h4 className="profile-title">Founder & CEO, Huddle</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <div className="row">
                <p className="testimonial-text">
                  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                  become a well-oiled collaboration machine.
                </p>
              </div>
              <div className="d-inline-flex flex-row">
                <div className="p-2">
                  <div className="profile-wrapper">
                    <Image src={Profile3} alt="Profile" width={33} height={33} />
                  </div>
                </div>
                <div className="p-2">
                  <h4 className="profile-name">Iva Boyd</h4>
                  <h4 className="profile-title">Founder & CEO, Huddle</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

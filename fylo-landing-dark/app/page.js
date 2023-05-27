'use client';
import React from'react';
import { useState, useEffect } from'react';
import Image from 'next/image';
import { FaFacebookF } from  'react-icons/fa';
import { FaTwitter } from  'react-icons/fa';
import { FaInstagram } from  'react-icons/fa';
import Logo from '../public/logo.svg'
import IconAccess from '../public/icon-access-anywhere.svg';
import IconSecurity from '../public/icon-security.svg';
import IconCollaboration from '../public/icon-collaboration.svg';
import IconAnyFile from '../public/icon-any-file.svg';
import IconArrow from '../public/icon-arrow.svg';
import IconLocation from '../public/icon-location.svg';
import IconPhone from '../public/icon-phone.svg';
import IconEmail from '../public/icon-email.svg';
import Profile1 from '../public/profile-1.jpg';
import Profile2 from '../public/profile-2.jpg';
import Profile3 from '../public/profile-3.jpg';
import LoadingPage from './loading';

function Home() {

  const [loading, setLoading] = useState(true);
  const [formEmail, setFormEmail] = useState('');
  const [formError, setFormErrors] = useState('');

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.min.js');
    setLoading(false);
  }, []);

  const onChange = (e) => {
    setFormEmail( e.target.value );
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formEmail.match(validRegex)) {
      setFormErrors('');
    } else {
      setFormErrors('Please enter a valid email address');
    }
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <main id="home-page">
      <div className="section-intro">
        <div className="row">
          <div className="section-intro-pic"></div>
        </div>
        <div className="row mt-3">
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
            <h1 className="section-how-header">Stay productive, wherever you are</h1>
            <p className="section-how-text">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
              storage needs.
            </p>
            <p className="section-how-text">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email 
              attachments required.
            </p>
            <a href="/" className="section-how-link">
              <p className="section-how-text">
                See how Fylo works 
                <Image 
                  src={IconArrow} 
                  alt="Arrow" 
                  width={15} 
                  height={15}
                />
              </p>
            </a>
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
                    <Image 
                      src={Profile1} 
                      alt="Profile" 
                      width={33} 
                      height={33}
                    />
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
                    <Image 
                      src={Profile2} 
                      alt="Profile" 
                      width={33} 
                      height={33}
                    />
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
                    <Image 
                      src={Profile3} 
                      alt="Profile" 
                      width={33} 
                      height={33} 
                    />
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
      <div className="section-register">
        <div className="register-box">
          <div className="row mt-3">
            <h1 className="register-header">Get early access today</h1>
          </div>
          <div className="row mt-1">
            <p className="register-text">
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
              questions, our support team would be happy to help you.
            </p>
          </div>
          <div className="row mt-2">
            <form onSubmit={e => onSubmit(e)}>
              <div className="row mt-1">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      className='form-control register-input'
                      type='text'
                      placeholder='email@example.com'
                      id="year"
                      name='year'
                      value={formEmail}
                      onChange={e => onChange(e)}
                      required
                    />
                    <label className='register-form register-error' htmlFor="day">{formError}</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <button 
                      className="register-button" 
                      type="submit">Get Started for Free</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="section-footer">
        <Image
          src={Logo}
          alt="Logo"
          width={145}
          height={70}
        />
        <div className="row g-4">
          <div className="col-md-4">
            <div className="d-inline-flex flex-row">
              <div className="col-1">
                <Image
                  src={IconLocation}
                  alt="Location"
                  width={15}
                  height={15}
                />
              </div>
              <div className="col-11 footer-location">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-inline-flex flex-row">
              <div className="p-1">
                <Image
                  src={IconPhone}
                  alt="Phone"
                  width={15}
                  height={15}
                />
              </div>
              <div className="p-2 footer-contact">
                +1-543-123-4567
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-1">
                <Image
                  src={IconEmail}
                  alt="Email"
                  width={15}
                  height={15}
                />
              </div>
              <div className="p-2 footer-contact">
                example@fylo.com
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">About Us</a>
            </div>
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Jobs</a>
            </div>
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Press</a>
            </div>
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Blog</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Contact Us</a>
            </div>
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Terms</a>
            </div>
            <div className="d-flex flex-row">
              <a href="/" className="footer-link">Privacy</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="icon-row">
              <button type="button" className="icon-btn"><FaFacebookF /></button>
              <button type="button" className="icon-btn"><FaTwitter /></button>
              <button type="button" className="icon-btn"><FaInstagram /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;

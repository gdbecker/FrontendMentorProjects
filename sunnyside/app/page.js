'use client';
import React, { useState, useEffect } from'react';
import Image from 'next/image'
import LoadingPage from './loading';
import Logo from '../public/logo-green.svg';
import IconArrow from '../public/icon-arrow-down.svg';
import { FaFacebook } from  'react-icons/fa';
import { FaTwitter } from  'react-icons/fa';
import { FaInstagram } from  'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

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
      <div className="row">
        <div className="section-header">
          <div className="row mt-5">
            <h1 className="section-header-title">WE ARE CREATIVES</h1>
          </div>
          <div className="row mt-5">
            <Image
              src={IconArrow}
              alt="arrow-down"
              width={30}
              height={100}
            />
          </div>
          
        </div>
      </div>

      <div className="container-fluid">
        <div className="row row-egg">
          <div className="col-lg-6">
            <div className="col-transform">
              <div className="row mt-2">
                <h1 className="section-details-title">Transform your brand</h1>
              </div>
              <div className="row mt-2">
                <p className="section-details-text">
                  We are a full-service creative agency specializing in helping brands grow fast. 
                  Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
              </div>
              <div className="row mt-2">
                <a href="/" className="section-details-link"><span className="transform">LEARN MORE</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-egg"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-cup"></div>
          </div>
          <div className="col-lg-6">
            <div className="col-audience">
              <div className="row mt-2">
                <h1 className="section-details-title">Stand out to the right audience</h1>
              </div>
              <div className="row mt-2">
                <p className="section-details-text">
                  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, 
                  we’ll build and extend your brand in digital places. 
                </p>
              </div>
              <div className="row mt-2">
                <a href="/" className="section-details-link"><span className="audience">LEARN MORE</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-cherry">
              <h4 className="section-details-subtitle">Graphic Design</h4>
              <p className="section-details-fruit">
                Great design makes you memorable. We deliver artwork that underscores your brand message and 
                captures potential clients’ attention.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-orange">
              <h4 className="section-details-subtitle">Photography</h4>
              <p className="section-details-fruit">
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row section-testimonials">
        <h3 className="section-testimonials-title">CLIENT TESTIMONIALS</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="row mt-5">
              <div className="avatar-wrapper avatar-emily"></div>
            </div>
            <div className="row mt-5">
              <p className="section-testimonials-text">
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines 
                were always hit.
              </p>
            </div>
            <div className="row mt-5">
              <h4 className="section-testimonials-name">Emily R.</h4>
            </div>
            <div className="row">
              <p className="section-testimonials-role">Marketing Director</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-5">
              <div className="avatar-wrapper avatar-thomas"></div>
            </div>
            <div className="row mt-5">
              <p className="section-testimonials-text">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and 
                enjoyable experience.
              </p>
            </div>
            <div className="row mt-5">
              <h4 className="section-testimonials-name">Thomas S.</h4>
            </div>
            <div className="row">
              <p className="section-testimonials-role">Chief Operating Officer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-5">
              <div className="avatar-wrapper avatar-jennie"></div>
            </div>
            <div className="row mt-5">
              <p className="section-testimonials-text">
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
              </p>
            </div>
            <div className="row mt-5">
              <h4 className="section-testimonials-name">Jennie F.</h4>
            </div>
            <div className="row">
              <p className="section-testimonials-role">Business Owner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <div className="col-milk"></div>
                </div>
                <div className="col-6">
                  <div className="col-bowl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="col-cone"></div>
              </div>
              <div className="col-6">
                <div className="col-cubes"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="row section-footer">
        <div className="row mt-2 section-footer-logo">
          <Image
            src={Logo}
            alt="logo"
            width={55}
            height={30}
          />
        </div>
        <div className="row mt-4">
          <span>
            <a href="/" className="section-footer-link">About</a>
            <a href="/" className="section-footer-link">Services</a>
            <a href="/" className="section-footer-link">Projects</a>
          </span>
        </div>
        <div className="row mt-5">
          <span>
            <a href="/" className="section-footer-link"><FaFacebook /></a>
            <a href="/" className="section-footer-link"><FaInstagram /></a>
            <a href="/" className="section-footer-link"><FaTwitter /></a>
            <a href="/" className="section-footer-link"><FaPinterest /></a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home;
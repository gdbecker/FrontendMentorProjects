import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as PicSection2Big } from '../assets/illustration-editor-desktop.svg';
import { ReactComponent as PicSection3 } from '../assets/illustration-phones.svg';

import Navigation from '../components/Navigation';

function LandingPage() {
  return (
    <div id="landing-page" className="container-fluid">
      <div className="row section-1">

        <Navigation></Navigation>

        <div className="row mt-4">
          <h1 className="section-1-header">A modern publishing platform</h1>
        </div>
        <div className="row mt-2">
          <p className="section-1-text">Grow your audience and build your online brand</p>
        </div>
        <div className="row mt-4 button-row">
          <button className="start-button" type="button">Start for Free</button>
          <button className="learn-button" type="button">Learn More</button>
        </div>
      </div>

      <div className="row section-2">
        <h1 className="section-2-header">Designed for the future</h1>
        <div className="row mt-3 section-2-content">
          <div className="col-lg-6 my-auto">
            <div className="row mt-2">
              <h2 className="section-2-subheader">Introducing an extensible editor</h2>
            </div>
            <div className="row mt-2">
              <p className="section-2-text">
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
              </p>
            </div>
            <div className="row mt-2">
              <h2 className="section-2-subheader">Robust content management</h2>
            </div>
            <div className="row mt-2">
              <p className="section-2-text">
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </p>
            </div>
          </div>
          <div className="col-lg-6 section-2-pic-wrapper">
            <PicSection2Big className="section-2-pic-big"></PicSection2Big>
          </div>
        </div>
      </div>

      <div className="row section-3">
        <div className="col-lg-6 section-3-pic-wrapper">
          {/* <PicSection3 className="section-3-pic"></PicSection3> */}
        </div>
          
        <div className="col-lg-6 section-3-copy">
          <div className="row mt-2">
            <h1 className="section-3-header">State of the Art Infrastructure</h1>
          </div>
          <div className="row mt-2">
            <p className="section-3-text">
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
          
        </div>
      </div>

      <div className="row section-4">
        <div className="container g-2">
          <div className="row mt-3 section-4-content">
            <div className="col-lg-6">
              <div className="section-4-pic-wrapper">
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="row mt-2">
                <h2 className="section-4-subheader">Free, open, simple</h2>
              </div>
              <div className="row mt-2">
                <p className="section-4-text">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
              </div>
              <div className="row mt-2">
                <h2 className="section-4-subheader">Powerful tooling</h2>
              </div>
              <div className="row mt-2">
                <p className="section-4-text">
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row section-5">
        <div className="container g-4">
          <div className="row">
            <div className="col-lg-3">
              <Logo></Logo>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <p className="section-5-header">Product</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Overview</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Pricing</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Marketplace</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Features</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Integrations</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <p className="section-5-header">Company</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">About</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Team</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Blog</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Careers</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <p className="section-5-header">Connect</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Contact</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">Newsletter</p>
              </div>
              <div className="row mt-1">
                <p className="section-5-text">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
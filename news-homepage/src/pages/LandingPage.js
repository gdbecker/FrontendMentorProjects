import React from 'react';


function LandingPage() {
    return (
        <div id="landing-page">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="block-pic-1"></div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h1 className="news-header">The Bright Future of Web 3.0?</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="row mt-2">
                                    <p className="news-text">
                                        We dive into the next evolution of the web that claims to put the power of the platforms 
                                        back into the hands of the people. 
                                        But is it really fulfilling its promise?
                                    </p>
                                </div>
                                <div className="row mt-3">
                                    <div className="form-group">
                                        <button 
                                        className="read-more-button" 
                                        type="button">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="new-section">
                            <div className="row mt-3">
                                <h1 className="new-section-header">New</h1>
                            </div>
                            <div className="row mt-2">
                                <a href="/hydrogen" className="new-section-subheader">Hydrogen VS Electric Cars</a>
                            </div>
                            <div className="row mt-2">
                                <p className="new-section-text">
                                    Will hydrogen-fueled cars ever catch up to EV's?
                                </p>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <hr></hr>
                                </div>
                                <div className="col-md-1"></div>    
                            </div>
                            <div className="row mt-2">
                                <a href="/ai" className="new-section-subheader">The Downsides of AI Artistry</a>
                            </div>
                            <div className="row mt-2">
                                <p className="new-section-text">
                                    What are the possible adverse effects of on-demand AI image generation?
                                </p>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <hr></hr>
                                </div>
                                <div className="col-md-1"></div>    
                            </div>
                            <div className="row mt-2">
                                <a href="/vc" className="new-section-subheader">Is VC Funding Drying Up?</a>
                            </div>
                            <div className="row mt-2">
                                <p className="new-section-text">
                                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                                </p>
                            </div>                
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="row mt-4">
                            <div className="col-4 block-pic-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <h1 className="bottom-section-header">01</h1>
                                </div>
                                <div className="row mt-1">
                                    <a href="/vc" className="bottom-section-subheader">Reviving Retro PCs</a>
                                </div>
                                <div className="row mt-3">
                                    <p className="bottom-section-text">
                                        What happens when old PCs are given modern upgrades?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row mt-4">
                            <div className="col-4 block-pic-3"></div>
                            <div className="col-8">
                                <div className="row">
                                    <h1 className="bottom-section-header">02</h1>
                                </div>
                                <div className="row mt-1">
                                    <a href="/laptops" className="bottom-section-subheader">Top 10 Laptops of 2022</a>
                                </div>
                                <div className="row mt-3">
                                    <p className="bottom-section-text">
                                        Our best picks for various needs and budgets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row mt-4">
                            <div className="col-4 block-pic-4"></div>
                            <div className="col-8">
                                <div className="row">
                                    <h1 className="bottom-section-header">03</h1>
                                </div>
                                <div className="row mt-1">
                                    <a href="/gaming" className="bottom-section-subheader">The Growth of Gaming</a>
                                </div>
                                <div className="row mt-3">
                                    <p className="bottom-section-text">
                                        How the pandemic has sparked fresh opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
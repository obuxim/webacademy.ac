import React from 'react'

const Facilities = () => {
    return (
        <>
            <section>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="list_facts_wrap">
                    <div className="sec-heading mb-3">
                        <h2><span className="theme-cl">Web Academy</span> Facilities</h2>
                    </div>
                    <div className="list_facts">
                        <div className="list_facts_icons"><i className="ti-desktop" /></div>
                        <div className="list_facts_caption">
                        <h4>Learn from Full Stack Designer: Get trained by the expert web designers.</h4>
                        </div>
                    </div>
                    <div className="list_facts">
                        <div className="list_facts_icons"><i className="ti-heart" /></div>
                        <div className="list_facts_caption">
                        <h4>Learn by Doing: Take the opportunity to learn & create simultaneously</h4>
                        </div>
                    </div>
                    <div className="list_facts">
                        <div className="list_facts_icons"><i className="ti-harddrives" /></div>
                        <div className="list_facts_caption">
                        <h4>Learning awards and rewards: Get certified online after completing any course</h4>
                        </div>
                    </div>
                    </div>
                    <a href="#" className="btn btn-modern"> See More<span><i className="ti-arrow-right" /></span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="list_facts_wrap_img">
                    <img src="/assets/img/fac.png" className="img-fluid" alt />
                    </div>
                </div>
                </div>
            </div>
            </section>


        </>
    )
}

export default Facilities

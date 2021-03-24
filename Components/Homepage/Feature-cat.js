import React from 'react'
import Slider from "react-slick";

const FeatureCat = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        
        <>
            <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="sec-heading center">
                    <h2>Assess yourself with the quizzes and get a huge price off on your desired courses</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                    <Slider {...settings}  className="arrow_slide three_slide-dots arrow_middle">
                    <div className="singles_items">
                        <div className="edu_cat">
                        <div className="pic">
                            <a className="pic-main" href="#" style={{backgroundImage: 'url(/assets/img/qiz1.png)'}} />
                        </div>
                        <div className="edu_data">
                            <h4 className="title"><a href="#">Finance &amp; Accounting</a></h4>
                            <ul className="meta">
                            <li className="video"><i className="ti-video-clapper" />23 Videos</li>
                            <li className="lessions"><i className="ti-book" />54 Lessions</li>
                            </ul>
                        </div>
                        </div>	
                    </div>
                    {/* Single Slide */}
                    <div className="singles_items">
                        <div className="edu_cat">
                        <div className="pic">
                            <a className="pic-main" href="#" style={{backgroundImage: 'url(/assets/img/qiz2.png)'}} />
                        </div>
                        <div className="edu_data">
                            <h4 className="title"><a href="#">Gym &amp; Lifestyle</a></h4>
                            <ul className="meta">
                            <li className="video"><i className="ti-video-clapper" />23 Videos</li>
                            <li className="lessions"><i className="ti-book" />54 Lessions</li>
                            </ul>
                        </div>
                        </div>		
                    </div>
                    {/* Single Slide */}
                    <div className="singles_items">
                        <div className="edu_cat">
                        <div className="pic">
                            <a className="pic-main" href="#" style={{backgroundImage: 'url(/assets/img/qiz3.png)'}} />
                        </div>
                        <div className="edu_data">
                            <h4 className="title"><a href="#">Health &amp; Fitness</a></h4>
                            <ul className="meta">
                            <li className="video"><i className="ti-video-clapper" />23 Videos</li>
                            <li className="lessions"><i className="ti-book" />54 Lessions</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* Single Slide */}
                    <div className="singles_items">
                        <div className="edu_cat">
                        <div className="pic">
                            <a className="pic-main" href="#" style={{backgroundImage: 'url(/assets/img/qiz1.png)'}} />
                        </div>
                        <div className="edu_data">
                            <h4 className="title"><a href="#">Software &amp; Development</a></h4>
                            <ul className="meta">
                            <li className="video"><i className="ti-video-clapper" />23 Videos</li>
                            <li className="lessions"><i className="ti-book" />54 Lessions</li>
                            </ul>
                        </div>
                        </div>		
                    </div>
                    {/* Single Slide */}
                    <div className="singles_items">
                        <div className="edu_cat">
                        <div className="pic">
                            <a className="pic-main" href="#" style={{backgroundImage: 'url(/assets/img/qiz2.png)'}} />
                        </div>
                        <div className="edu_data">
                            <h4 className="title"><a href="#">Business Development</a></h4>
                            <ul className="meta">
                            <li className="video"><i className="ti-video-clapper" />23 Videos</li>
                            <li className="lessions"><i className="ti-book" />54 Lessions</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </Slider>
                </div>
                </div>
            </div>
            </section>


        </>
    )
}

export default FeatureCat;
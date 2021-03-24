import React from 'react'
import Slider from 'react-slick'

const CourseTutorials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
     <section className="gray">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="sec-heading center">
          <h2><span className="theme-cl">Free</span> Web Design Tutorials</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 p-0">
        <Slider {...settings} className="arrow_slide three_slide-dots arrow_middle">
          <div className="singles_items">
            <div className="education_block_grid style_2">
              <div className="education_block_thumb">
                <a href="course-detail.html"><img src="/assets/img/free1.png" className="img-fluid" alt /></a>
                <div className="education_ratting"><i className="fa fa-star" />4.7 (40)</div>
              </div>
              <div className="education_block_body">
                <h4 className="bl-title"><a href="course-detail.html">The Complete Business Plan Course (Includes 50 Templates)</a></h4>
              </div>
              <div className="cources_info_style3">
                <ul>
                  <li><i className="ti-eye mr-2" />10682 Views</li>
                  <li><i className="ti-control-skip-forward mr-2" />82 Lectures</li>
                  <li><i className="ti-time mr-2" />9h 45min</li>
                </ul>
              </div>
              <div className="education_block_footer">
                <div className="education_block_author">
                  <div className="path-img"><a href="instructor-detail.html"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></a></div>
                  <h5><a href="instructor-detail.html">Litha Jethaani</a></h5>
                </div>
                <div className="cources_price_foot"><span className="price_off">$199.00</span>149.00</div>
              </div>
            </div>
          </div>
          {/* Single Slide */}
          <div className="singles_items">
            <div className="education_block_grid style_2">
              <div className="education_block_thumb">
                <a href="course-detail.html"><img src="/assets/img/free2.png" className="img-fluid" alt /></a>
                <div className="education_ratting"><i className="fa fa-star" />4.9 (29)</div>
              </div>
              <div className="education_block_body">
                <h4 className="bl-title"><a href="course-detail.html">An Entire MBA In 1 Course:Award Winning Business School Prof</a></h4>
              </div>
              <div className="cources_info_style3">
                <ul>
                  <li><i className="ti-eye mr-2" />9882 Views</li>
                  <li><i className="ti-control-skip-forward mr-2" />47 Lectures</li>
                  <li><i className="ti-time mr-2" />6h 30min</li>
                </ul>
              </div>
              <div className="education_block_footer">
                <div className="education_block_author">
                  <div className="path-img"><a href="instructor-detail.html"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></a></div>
                  <h5><a href="instructor-detail.html">Adam Gilvork</a></h5>
                </div>
                <div className="cources_price_foot"><span className="price_off">$89.65</span>49.10</div>
              </div>
            </div>		
          </div>
          {/* Single Slide */}
          <div className="singles_items">
            <div className="education_block_grid style_2">
              <div className="education_block_thumb">
                <a href="course-detail.html"><img src="/assets/img/free3.png" className="img-fluid" alt /></a>
                <div className="education_ratting"><i className="fa fa-star" />4.7 (60)</div>
              </div>
              <div className="education_block_body">
                <h4 className="bl-title"><a href="course-detail.html">The Complete Financial Analyst Course 2020</a></h4>
              </div>
              <div className="cources_info_style3">
                <ul>
                  <li><i className="ti-eye mr-2" />5882 Views</li>
                  <li><i className="ti-control-skip-forward mr-2" />52 Lectures</li>
                  <li><i className="ti-time mr-2" />5h 15min</li>
                </ul>
              </div>
              <div className="education_block_footer">
                <div className="education_block_author">
                  <div className="path-img"><a href="instructor-detail.html"><img src="https://via.placeholder.com/500x500" className="img-fluid" alt /></a></div>
                  <h5><a href="instructor-detail.html">Shilpa Shekh</a></h5>
                </div>
                <div className="cources_price_foot"><span className="price_off">$149.77</span>99.00</div>
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

export default CourseTutorials;

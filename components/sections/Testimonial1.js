import Slider from "react-slick"
const settings = {
    dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
}


export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-115 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="testimonial-img">
                                <img src="/assets/img/project1/project-06.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Our Testimonial</span>
                                    <h2 className="title tg-element-title">Some of Our Respected Happy Clients Says</h2>
                                </div>
                                <Slider {...settings} className="testimonial-active">
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                        <p><q>This is a young startup and with lot of promise and passion.
                         Young graduates of alternate energy  have all relevant skills,
                           techniques  and knowledge of this new emerging discipline. 
                           I recommend fully to their success,  as have seen on my project.</q></p>                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                {/* <img src="/assets/img/images/testi_avatar01.png" alt="" /> */}
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">- Mr. Azhar Abbas</h6>
                                                <p>Head of Facilities Management, Habib University</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                        <p><q>This team of young engineers has impressed me.
                         In a small span of time they have achieved landmark success. 
                          They are energetic, intelligent, hard working,articulate and 
                          because of this they fix difficult targets and endeavour challenging projects
                           for themselves, they then work diligently to achieve results
                            and usually succeed. Their creative and result oriented approach is applaudable. 
                             I am glad to wish these young professionals pronounced success in their carrier.</q></p>                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                {/* <img src="/assets/img/images/testi_avatar01.png" alt="" /> */}
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">- Yousuf Khan</h6>
                                                <p>General Manager (Energy and Engineering)Matiari Group.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                        <p><q>Sustainable Solar Energy Solution is a wonderful setup with young
                         and qualified engineers who are experts in their field. I am fully satisfied 
                         with their services.</q></p>                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="" />
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">- Mr. Imran Qayyum</h6>
                                                <p>Owner of Alpha Petroleum Services ( PSO Outlet )</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                        <p><q>I had installed the solar power generation system at my home 
                        through Sustainable Solar Energy Solutions & have been using
                         it since July 2019. Alhamdulillah very satisfied with the work
                          & the product. Excellent customer service, the team is very supportive
                           & resolves any kind of issues immediately. <br /> P.S. The society i 
                           am living in has no K.E. connection yet. Solar power is the only source of
                            electricity since I am against the Kunda system. </q></p>                                       </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                {/* <img src="/assets/img/images/testi_avatar01.png" alt="" /> */}
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">- Owais Zaki</h6>
                                                <p>(Area Manager Ideas By Gul Ahmed)</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

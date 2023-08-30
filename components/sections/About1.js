import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/icon/about-woman.png" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/icon/mission-img3.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">We have years of experiences</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">We use professional and experienced person</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About Our Company</span>
                                    <h2 className="title tg-element-title">We’re Committed to Solar energy Excellence</h2>
                                </div>
                                <p>We are representing world's best and most renowned brands with a highly professional and knowledgeable team, one of the key element of our business 
                                    is establishing long-lasting relationship with our clients.</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />Market Partners have worked us.</li>
                                        <li><i className="fas fa-check" />Professional and experienced human resources.</li>
                                        <li><i className="fas fa-check" />Provide the best solar services</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

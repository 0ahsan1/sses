import Link from "next/link"


export default function Team1() {
    return (
        <>
            <section className="team-area pt-115 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Professional Team</span>
                                <h2 className="title tg-element-title">Professional Team Member</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link href="/team-details"><img src="/assets/img/team/team-member1.jpg" alt="" /></Link>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/hassan.jafri.902/"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/hassan-jafri-7a6b171ba/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw"><i className="fab fa-youtube" /></Link></li>
                                            {/* <li><Link href="#"><i className="fab fa-instagram" /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Hassan Jafri</Link></h2>
                                    <span>CEO/ Managing Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link href="/team-details"><img src="/assets/img/team/team-member2.jpg" alt="" /></Link>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/engr.mengal/"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            {/* <li><Link href="#"><i className="fab fa-twitter" /></Link></li> */}
                                            <li><Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw/"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Abdul Hameed Mengal</Link></h2>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link href="/team-details"><img src="/assets/img/team/team-member3.jpg" alt="" /></Link>
                                    <div className="team-social">
                                    <ul className="list-wrap">
                                            <li><Link href="https://www.facebook.com/M.UsamaNasir/"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/mohammad-usama-518555a6/"><i className="fab fa-linkedin-in" /></Link></li>
                                            {/* <li><Link href="#"><i className="fab fa-twitter" /></Link></li> */}
                                            <li><Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw/"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link href="/team-details">Muhammad Usama Nasir</Link></h2>
                                    <span>Managing Director</span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>

        </>
    )
}

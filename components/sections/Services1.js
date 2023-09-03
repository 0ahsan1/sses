import Link from "next/link"
import { useState } from 'react'

export default function Services1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Services Areas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s" data-background="/assets/img/services/img-one.jpg" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 1 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon01.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 1 ? "none" : "block"}` }}><Link href="/services-details/solar-water-pumping-system">SOLAR WATER PUMPING SYSTEM</Link></h2>
                                    {/* <h2 className="number">01</h2> */}
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details//solar-water-pumping-system">SOLAR WATER PUMPING SYSTEM</Link></h2>
                                    <p>The system operates on power generated using solar PV (photovoltaic) system.</p>
                                    <Link href="/services-details/solar-water-pumping-system" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s" data-background="/assets/img/services/img-two.jpg" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 2 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon02.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 2 ? "none" : "block"}` }}><Link href="/services-details/On-Grid-Solar-PV-System">ON-GRID SOLAR SYSTEM</Link></h2>
                                    {/* <h2 className="number">02</h2> */}
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details/On-Grid-Solar-PV-System">ON-GRID SOLAR SYSTEM</Link></h2>
                                    <p>On-grid or grid-tie solar systems are by far the most common & widely used.</p>
                                    <Link href="/services-details/On-Grid-Solar-PV-System" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="/assets/img/services/img-three.jpg" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 3 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon03.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 3 ? "none" : "block"}` }}><Link href="/services-details/Off-Grid-Solar-PV-System">OFF-GRID SOLAR SYSTEM</Link></h2>
                                    {/* <h2 className="number">03</h2> */}
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details/Off-Grid-Solar-PV-System">OFF-GRID SOLAR SYSTEM</Link></h2>
                                    <p>An off-grid system is not connected to the electricity grid.</p>
                                    <Link href="/services-details/Off-Grid-Solar-PV-System" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".3s" data-background="/assets/img/services/img-four.jpg" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 4 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon04.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 4 ? "none" : "block"}` }}><Link href="/services-details/Hybrid-Solar-PV-System">HYBRID SOLAR PV SYSTEM</Link></h2>
                                    {/* <h2 className="number">04</h2> */}
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details/Hybrid-Solar-PV-System">HYBRID SOLAR PV SYSTEM</Link></h2>
                                    <p>The system operates on power generated using solar PV (photovoltaic) system.</p>
                                    <Link href="/services-details/Hybrid-Solar-PV-System" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s" data-background="/assets/img/services/img-five.jpg" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 5 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon05.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 5 ? "none" : "block"}` }}><Link href="/services-details/Solar-Water-Heater-System">SOLAR WATER HEATER SYSTEM</Link></h2>
                                    {/* <h2 className="number">05</h2> */}
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details/Solar-Water-Heater-System">SOLAR WATER HEATER SYSTEM</Link></h2>
                                    <p>Investigationes demonstraverunt lectore legere me lius quod ii legunt saepius.</p>
                                    <Link href="/services-details/Solar-Water-Heater-System" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="/assets/img/services/services_item06.jpg" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon06.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/services-details">Roofing Animation</Link></h2>
                                    <h2 className="number">06</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details">Roofing Animation</Link></h2>
                                    <p>There are many variations of passages of Lorem a Ipsum available, but the majority have suffered ali teration in some form</p>
                                    <Link href="/services-details" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

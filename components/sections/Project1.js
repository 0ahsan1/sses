import Link from "next/link"
import { useState } from 'react'

export default function Project1() {
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
            <section className="project-area project-bg" data-background="/assets/img/bg/project_bg.jpg">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Latest Projects</span>
                                <h2 className="title tg-element-title">Explore Our Latest Projects</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="view-all-btn text-end mb-50">
                                <Link href="/project" className="btn">View All Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-item wow fadeInUp" data-wow-delay=".2s" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                <div className="project-thumb" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <img width={600} src="/assets/img/project1/single-project_1.jpg" alt="" />
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <span>5 kW Kangoori, Shah Noorani</span>
                                        <h2 className="title"><Link href="/project-details">SOLAR WATER PUMPING SYSTEM</Link></h2>
                                        <p style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        This is a 5 kW solar water pumping system installed by SSES on 24th April, 2020.
                                         Mr. Sardar Akhtar Mengal (Member of National Assembly, Pakistan) sponsored...</p>

                                    </div>
                                    <div className="project-link">
                                        <Link href="/project-details"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item wow fadeInUp" data-wow-delay=".3s" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                <div className="project-thumb" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <img width={600} src="/assets/img/project1/single-project_9.jpg" alt="" />
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <span>15 kW Lasbela University, Uthal</span>
                                        <h2 className="title"><Link href="/project-details">SOLAR WATER PUMPING SYSTEM</Link></h2>
                                        <p style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        This is a 15 kW solar water pumping system installed by SSES on 16th August, 2019. SSES won this tender of installation of Solar Water Pumping...</p>
                                    </div>
                                    <div className="project-link">
                                        <Link href="/project-details"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item wow fadeInUp" data-wow-delay=".4s" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                <div className="project-thumb" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <img width={600} src="/assets/img/project1/single-project_11.jpg" alt="" />
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <span>9 kW Solar On-Grid System</span>
                                        <h2 className="title"><Link href="/project-details">ON-GRID SOLAR SYSTEM</Link></h2>
                                        <p style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        This is a 9 kW Solar On-Grid System which was installed by SSES at Gul
                                        shan e Maymar, Karachi. This system is running all the load of the house on Solar Power...</p>
                                    </div>
                                    <div className="project-link">
                                        <Link href="/project-details"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-item wow fadeInUp" data-wow-delay=".5s" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                <div className="project-thumb" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <img width={600} src="/assets/img/project1/single-project_14.jpg" alt="" />
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <span>15 kW Solar Off-Grid System</span>
                                        <h2 className="title"><Link href="/project-details">OFF-GRID SOLAR SYSTEM</Link></h2>
                                        <p style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        This is 15 kW Solar Off-Grid System. Three off-grid inverters were used to power three floors of the house, one inverter is for basement, second is for ground floor and...</p>
                                    </div>
                                    <div className="project-link">
                                        <Link href="/project-details"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

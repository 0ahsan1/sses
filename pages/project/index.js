import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { projects } from "./items"
export default function Project() {
    const data = projects
    return (
        <>
            <Layout breadcrumbTitle="Projects">
                <section className="inner-project-area pt-115 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-60">
                                    <span className="sub-title">Our Projects</span>
                                    <h2 className="title">Our Latest Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                        {data.map((d,index)=>(
                             <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                                <div className="project-item-two text-center">
                                    <div className="project-thumb-two">
                                        <Link href={'/project-details/'+d.link}><img src={d.img} alt="" /></Link>
                                    </div>
                                    <div className="project-content-two">
                                        <span>{d.type}</span>
                                        <h2 className="title"><Link href="/project-details">{d.name}</Link></h2>
                                        <Link href={'/project-details/'+d.link} className="link-btn"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                    <h5 className="mt-3">{d.name}</h5>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

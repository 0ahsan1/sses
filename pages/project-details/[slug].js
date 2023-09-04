import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useRouter } from "next/router"
import { projects } from "../project/items"
export default function ProjectDetails() {
    const router = useRouter()
    let comp =<></>
    const {slug} = router.query
    comp = projects.find(s=>s.link===slug).content

    return (
        <>
            <Layout breadcrumbTitle="Project Details">
                <div>
                    <section className="project-details-area pt-120">
                        <div className="container">
                            <div className="row">
                                {comp}
                            </div>
                        </div>
                    </section>
                    {/* project-details-area-end */}
                    {/* brand-area */}
                    <Brand3 />
                </div>

            </Layout>
        </>
    )
}
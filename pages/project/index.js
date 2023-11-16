import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {
  Project1,
  Project3,
  Project10,
  Project11,
  Project12,
  Project13,
  Project14,
  Project15,
  Project16,
  Project17,
  Project2,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
} from "@/components/content/projects";

export const projects = [
  {
    name: "Shah Noorani",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "shah-noorani",
    img: "/assets/img/project1/project-01.jpg",
    content: <Project1 />,
  },
  {
    name: "Harambove, Khuzdar",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "harambove-wadh",
    img: "/assets/img/project1/project-02.jpg",
    content: <Project2 />,
  },
  {
    name: "Noorani Dargah",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "noorani-dargah",
    img: "/assets/img/project1/project-03.jpg",
    content: <Project3 />,
  },
  {
    name: "Yusuf Shah Goth",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "yusuf-shah-goth",
    img: "/assets/img/project1/project-04.jpg",
    content: <Project4 />,
  },
  {
    name: "Khuzdar Sunni",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "khuzdar-sunni",
    img: "/assets/img/project1/project-05.jpg",
    content: <Project5 />,
  },
  {
    name: "Trickle Irrigation",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "trickle-irrigation",
    img: "/assets/img/project1/project-06.jpg",
    content: <Project6 />,
  },
  {
    name: "Tuk District Khuzdar",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "tuk-district-khuzdar",
    img: "/assets/img/project1/project-07.jpg",
    content: <Project7 />,
  },
  {
    name: "Kaka Heer, Wadh",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "kaka-heer-wadh",
    img: "/assets/img/project1/project-08.jpg",
    content: <Project8 />,
  },
  {
    name: "Lasbela University",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "lasbela-university",
    img: "/assets/img/project1/project-09.jpg",
    content: <Project9 />,
  },
  {
    name: "Gulshan e Maymar",
    type: "On GRID SOLAR SYSTEM",
    link: "gulshan-e-maymar",
    img: "/assets/img/project1/project-10.jpg",
    content: <Project10 />,
  },
  {
    name: "KDA Scheme",
    type: "On GRID SOLAR SYSTEM",
    link: "kda-scheme-1-ext",
    img: "/assets/img/project1/project-11.jpg",
    content: <Project11 />,
  },
  {
    name: "Azeem Town Safoora",
    type: "Off GRID SOLAR SYSTEM",
    link: "azeem-town-safoora",
    img: "/assets/img/project1/project-12.jpg",
    content: <Project12 />,
  },
  {
    name: "Itehaad Town Orangi",
    type: "Off GRID SOLAR SYSTEM",
    link: "itehaad-town-orangi",
    img: "/assets/img/project1/project-13.jpg",
    content: <Project13 />,
  },
  {
    name: "Karsaz, Karachi",
    type: "Off GRID SOLAR SYSTEM",
    link: "karsaz-karachi",
    img: "/assets/img/project1/project-14.jpg",
    content: <Project14 />,
  },
  {
    name: "Solar Geysers",
    type: "OTHER PROJECTS",
    link: "Solar-Geysers",
    img: "/assets/img/project1/project-15.jpg",
    content: <Project15 />,
  },
  {
    name: "Solar Street Lights",
    type: "OTHER PROJECTS",
    link: "solar-street-light",
    img: "/assets/img/project1/project-16.jpg",
    content: <Project16 />,
  },
];

export default function Project() {
  const data = projects;
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
              {data.map((d, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="project-item-two text-center">
                    <div className="project-thumb-two">
                      <Link href={"/project-details/" + d.link}>
                        <img src={d.img} alt="" />
                      </Link>
                    </div>
                    <div className="project-content-two">
                      <span>{d.type}</span>
                      <h2 className="title">
                        <Link href="/project-details">{d.name}</Link>
                      </h2>
                      <Link
                        href={"/project-details/" + d.link}
                        className="link-btn"
                      >
                        <i className="fas fa-arrow-right" />
                      </Link>
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
  );
}

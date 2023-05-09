import Head from "next/head";
import Navbar from "../components/Navbar";
import ShowcaseCard from "../components/ShowcaseCard";
import ServiceCard from "../components/ServiceCard";
import PortfolioCard from "../components/PortfolioCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>SixDesign</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="hero-section container">
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col col-md-9">
            <div className="d-flex gap-5  pt-5">
              <div className="d-flex flex-column">
                <h5 className="fs-3 fw-bold">40+</h5>
                <p>Happy Clients</p>
                <div className="border-bottom border-2 border-dark"></div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="fs-3 fw-bold">54</h5>
                <p>Projects Completed</p>
                <div className="border-bottom border-2 border-dark"></div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="fs-3 fw-bold">20</h5>
                <p>Dedicated Members</p>
                <div className="border-bottom border-2 border-dark"></div>
              </div>
              <div className="d-flex flex-column">
                <h5 className="fs-3 fw-bold">10+</h5>
                <p>Recognitions</p>
                <div className="border-bottom border-2 border-dark"></div>
              </div>
            </div>
            <h1 className="main-title pt-1">
              <span class="aff2">
                We’re a creative ‍ design agency from Canada
              </span>
            </h1>
            <div className="py-2"></div>
            <button className="btn btn-lg btn-mine2 btn-trans">
              Get your quote
              <img src="/arrow.svg" alt="arrow" className="img-fluid arrow" />
            </button>
            <button className="btn btn-lg btn-trans">Browse Portfolio</button>
          </div>
          <div className="col col-md-3 d-flex flex-column gap-3 pt-2">
            <ShowcaseCard
              image="/kipling.jpg"
              imagealt="kipling station condos"
              title="Kipling Station Condos - Rego Realty"
            ></ShowcaseCard>
            <ShowcaseCard
              image="/oakpark.jpg"
              imagealt="oakpark village"
              title="The Village of Oak Park - Rego Realty"
            ></ShowcaseCard>
            <ShowcaseCard
              image="/knight.jpg"
              imagealt="Knightsbridge Condos"
              title="Knightsbridge Condos - Rego Realty"
            ></ShowcaseCard>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="intro">
            <span className="title">What You Get</span>
            <h2>Top-Notch Services</h2>
            <div className="intro-line"></div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
          <div className="col">
            <ServiceCard
              image="/design.svg"
              imagealt="Beautifully Designed"
              title="Beautifully Designed"
              description="Stunning designs that captivate your audience."
            ></ServiceCard>
          </div>
          <div className="col">
            <ServiceCard
              image="/responsive.svg"
              imagealt="100% Responsive"
              title="100% Responsive"
              description="Optimized for all devices, ensuring seamless browsing."
            ></ServiceCard>
          </div>
          <div className="col">
            <ServiceCard
              image="/animations.svg"
              imagealt="Smooth Animations"
              title="Smooth Animations"
              description="Engaging animations for an immersive experience."
            ></ServiceCard>
          </div>
          <div className="col">
            <ServiceCard
              image="/cms.svg"
              imagealt="CMS Content"
              title="CMS Content"
              description="Easy-to-update always up-to-date content management system."
            ></ServiceCard>
          </div>
          <div className="col">
            <ServiceCard
              image="/pack.svg"
              imagealt="Templates Set"
              title="Templates Set"
              description="Wide range of customizable templates to choose from."
            ></ServiceCard>
          </div>
          <div className="col">
            <ServiceCard
              image="/support.svg"
              imagealt="Friendly Support"
              title="Friendly Support"
              description="Expert and responsive support team at your service."
            ></ServiceCard>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <div className="py-3 pb-5">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <div>
              <h2 className="fw-bold container">Discover Our Creativity</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
            <div className="col">
              <PortfolioCard
                image="/kipling.jpg"
                imagealt="kipling station condos"
                title="Kipling Station Condos - Rego Realty"
              ></PortfolioCard>
            </div>
            <div className="col">
              <PortfolioCard
                image="/oakpark.jpg"
                imagealt="oakpark village"
                title="The Village of Oak Park - Rego Realty"
              ></PortfolioCard>
            </div>
            <div className="col">
              <PortfolioCard
                image="/knight.jpg"
                imagealt="Knightsbridge Condos"
                title="Knightsbridge Condos - Rego Realty"
              ></PortfolioCard>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
    </>
  );
}

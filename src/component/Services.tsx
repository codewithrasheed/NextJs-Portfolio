import Image from "next/image";
import React from "react";
import responive from "../../public/responsive-app.png";
import api from "../../public/api.png";
import frontend from "../../public/mobile-development.png";
import cms from "../../public/cms.png";
import dbms from "../../public/data-management.png";
import deployment from "../../public/deployment.png";

const Services = () => {
  return (
    // <div className="services" id="services">
    //     <div className="heading-container">
    //         <h1>Services</h1>
    //     </div>
    //     <div className="servicesBody">
    //         <div className="service">
    //         <h1>Frontend Development</h1>
    //         <p>
    //             I build responsive web applications using modern technologies like
    //             MongoDB, Express, React, Node.js, and Next.js.
    //         </p>
    //         </div>
    //         <div className="service">
    //         <h1>Responsive Design</h1>
    //         <p>
    //             I design clean, modern, and user-friendly websites that enhance user experience and engagement.
    //         </p>
    //         </div>
    //         <div className="service">
    //         <h1>Backend Development</h1>
    //         <p>
    //             I build robust and scalable server-side applications using MongoDB, Express, Node.js, and Next.js.
    //         </p>
    //         </div>
    //     </div>
    // </div>
    <>
      <section id="services" className="services">
        <div className="services-container">
          <div className="heading-container">
            <h1>Services</h1>
          </div>
          <div className="row1">
            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img"
                    src={responive}
                    alt="responsive-design"
                  />
                </div>
                <div className="title-heading">Responsive Design</div>
              </div>
              <div className="description">
                <p>
                  Designing layouts that adapt perfectly to any screen size for
                  a smooth user experience on all devices.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image className="img" src={api} alt="api-integration" />
                </div>
                <div className="title-heading">API Integration</div>
              </div>
              <div className="description">
                <p>
                  Seamlessly integrating third-party APIs to enhance your
                  application’s functionality and user experience.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img"
                    src={frontend}
                    alt="mobile-development"
                  />
                </div>
                <div className="title-heading">Frontend Development</div>
              </div>
              <div className="description">
                <p>
                  Building interactive, user-friendly interfaces that engage
                  your users and deliver a seamless experience
                </p>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image className="img" src={cms} alt="cms-development" />
                </div>
                <div className="title-heading">CMS Development</div>
              </div>
              <div className="description">
                <p>
                  Custom content management systems that give you complete
                  control over your website content without the hassle.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image className="img" src={dbms} alt="database-management" />
                </div>
                <div className="title-heading">Database Management</div>
              </div>
              <div className="description">
                <p>
                  Building scalable, efficient databases to ensure your data is
                  well-organized, secure, and easy to access.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img"
                    src={deployment}
                    alt="ecommerce-website"
                  />
                </div>
                <div className="title-heading">Deployment & Launch</div>
              </div>
              <div className="description">
                <p>
                  Developing custom e-commerce platforms with secure payment
                  integration and smooth shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

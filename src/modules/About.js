import React from "react";
import "../assets/style.css";
import Web_Developer from "../assets/img/web_developer.svg";
import Welcome from "../assets/img/welcome.svg";
import Profile_Detail from "../assets/img/profile_details.svg";
import Detail_Hiro from "../assets/img/detail_hero.svg";
import Resume from "../assets/img/resume.pdf";
import ServiceImage1 from "../assets/img/service_1.svg";
import ServiceImage2 from "../assets/img/service_2.svg";
import Images from "./../assets/img/image1.png";
import Imagess from "./../assets/img/image2.png";
import Imagesss from "./../assets/img/image3.png";
import Imagessss from "./../assets/img/image4.png";

function About() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar_background navbar_index">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold" href="#">
            Gerald Diego
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginLeft: "500px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active px-3 fw-bold"
                  aria-current="page"
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold active" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold active" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 fw-bold active" href="mailto:trimuru199@gmail.com">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={Resume}
                  type="button"
                  className="btn mx-4 btn_hover"
                  download
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Component */}
      <div id="about" className="background_image"></div>
      <div className="container-fluid">
        <div className="row img_pos">
          <div className="col _margin_left_col">
            <div className="row">
              <div className="col">
                <img className="marg_left" src={Welcome} />
              </div>
              <div className="row">
                <div className="col">
                  <p className="fw-bolder fs_title">Gerald Diego</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="pos_title_web_dev fw-bold">
                    Software Engineer / Web Application Developer
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    I am currently working as a software engineer from a
                    japanese own company. My job role is to do software
                    maintenance and project development for a Point Of Sale
                    (POS) Softwares and Customer Relational Management (CRM)
                    Softwares. I do design using Figma and my technology skills
                    are Angular, Vue and React (Front-End Frameworks) also
                    Laravel, PHP, ExpressJS and NodeJS (Back-End Frameworks)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={Web_Developer} />
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#05263B" }}>
        <img
          style={{ marginTop: "50px", marginBottom: "50px" }}
          src={Detail_Hiro}
        />
      </div>
      {/* Services Components */}
      <div id="services" className="container">
        <p className="fw-bolder fs_title_service">Services</p>
      </div>
      <div className="container-fluid">
        <p>
          This sections shows the services that I can provide to my clients and
          also to help them achieve their goals, to become a successful
          intrepreneurs.
        </p>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <img src={ServiceImage1} />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <p
                  className="fw-bolder"
                  style={{ fontSize: "35px", float: "left" }}
                >
                  Websites
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="pos_title_web_dev fw-bold">
                  Company or Personal Websites
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p
                  className="lh-lg"
                  style={{
                    textAlign: "justify",
                    marginLeft: "50px",
                    marginRight: "40px",
                  }}
                >
                  Creating a websites that helps a individual or a company to
                  boost their products, increase users interaction to the
                  company and also being a competent.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <p className="pos_title_web_dev fw-bold">
                  Front-End Programming Languages
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ol
                  style={{
                    listStyleType: "number",
                    float: "left",
                    textAlign: "left",
                    marginLeft: "40px",
                    marginRight: "40px",
                  }}
                >
                  <li>React Javascript</li>
                  <li>Angular</li>
                  <li>Vue Javascript</li>
                  <li>Bootstrap</li>
                  <li>PrimeNG</li>
                  <li>Ant Design</li>
                  <li>Material UI</li>
                  <li>Tailwind CSS</li>
                  <li>Chart Javascript</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="#about-component"
                  type="button"
                  className="btn mx-4 btn_hover"
                >
                  Hire Me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid" style={{ margin: "10px" }}>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <p
                  className="fw-bolder"
                  style={{ fontSize: "35px", float: "left" }}
                >
                  Software Applications
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="pos_title_web_dev fw-bold">
                  Company or Personal Applications
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p
                  className="lh-lg"
                  style={{
                    textAlign: "justify",
                    marginLeft: "50px",
                    marginRight: "40px",
                  }}
                >
                  Providing a Point of Sales Applications and Customer
                  Relational Management Applications to increase the
                  productivity of company staffs and also help to manage the
                  companies product data counts and sales.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <p className="pos_title_web_dev fw-bold">
                      Front-End Programming Languages
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ol
                      style={{
                        listStyleType: "number",
                        float: "left",
                        textAlign: "left",
                        marginLeft: "40px",
                        marginRight: "40px",
                      }}
                    >
                      <li>React Javascript</li>
                      <li>Angular</li>
                      <li>Vue Javascript</li>
                      <li>Bootstrap</li>
                      <li>PrimeNG</li>
                      <li>Ant Design</li>
                      <li>Material UI</li>
                      <li>Tailwind CSS</li>
                      <li>Chart Javascript</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <p className="pos_title_web_dev fw-bold">
                      Front-End Programming Languages
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ol
                      style={{
                        listStyleType: "number",
                        float: "left",
                        textAlign: "left",
                        marginLeft: "40px",
                        marginRight: "40px",
                      }}
                    >
                      <li>React Javascript</li>
                      <li>Angular</li>
                      <li>Vue Javascript</li>
                      <li>Bootstrap</li>
                      <li>PrimeNG</li>
                      <li>Ant Design</li>
                      <li>Material UI</li>
                      <li>Tailwind CSS</li>
                      <li>Chart Javascript</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <a
                  href="#about-component"
                  type="button"
                  className="btn mx-4 btn_hover"
                >
                  Hire Me!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={ServiceImage2} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        className="container-fluid" id="projects"
        style={{ backgroundColor: "#05263B", height: "70vh" }}
      >
        <br/>
        <div id="services" className="container">
          <p className="fw-bolder fs_title_service" style={{color: 'white'}}>Projects</p>
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <a href="https://gerald-diego54.github.io/magazine.github.io/" style={{ textDecoration: "none", color: "white" }}>
              <div className="row" style={{ paddingLeft: "70px" }}>
                <img src={Images} style={{ width: "15vw" }} />
              </div>
              <br />
              <div className="row">
                <h5>Praise and Worship Magazine</h5>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="#" style={{ textDecoration: "none", color: "white" }}>
              <div className="row" style={{ paddingLeft: "70px" }}>
                <img src={Imagess} style={{ width: "15vw" }} />
              </div>
              <br />
              <div className="row">
                <h5>Customer Management Software</h5>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="https://gerald-diego54.github.io/clinic-care.github.io/" style={{ textDecoration: "none", color: "white" }}>
              <div className="row" style={{ paddingLeft: "70px" }}>
                <img src={Imagesss} style={{ width: "15vw" }} />
              </div>
              <br />
              <div className="row">
                <h5>Clinical Forms</h5>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="https://shadowlight016.github.io/4WebServices/" style={{ textDecoration: "none", color: "white" }}>
              <div className="row" style={{ paddingLeft: "70px" }}>
                <img src={Imagessss} style={{ width: "15vw" }} />
              </div>
              <br />
              <div className="row">
                <h5>Outsourcing Websites</h5>
              </div>
            </a>
          </div>
        </div>
      </div><br/><br/><br/>
      <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3" style={{textAlign: 'left'}}>
        <h5>Navigation</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Me</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Services</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Projects</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Me</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3" style={{marginLeft: '500px'}}>
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2022 Gerald Diego, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"/></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  );
}

export default About;

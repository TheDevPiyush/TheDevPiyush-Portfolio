import React, { Component } from 'react';
import "./Home.css"

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      getProjectsDetails: [],
      no: null,
      isLoaded: false,
      prorgessValue: null,
      contentLoaded: false
    }
  }
  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    let url = "https://api.github.com/users/thedevpiyush/repos" //?per_page=n
    this.setState({ prorgessValue: "10%" })
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({ prorgessValue: "30%" })
    this.setState({ getProjectsDetails: jsonData })
    this.setState({ prorgessValue: "70%" })
    this.setState({ prorgessValue: "100%" })

    setTimeout(() => {
      this.setState({ no: jsonData.length })
      this.setState({ isLoaded: true })

    }, 1500);

  }

  next = () => {
    let div = document.getElementById("cardcontainer")

    div.scrollLeft += div.clientWidth + 1;

  }
  prev = () => {
    let div = document.getElementById("cardcontainer")

    div.scrollLeft -= div.clientWidth + 1;

  }



  render() {

    return (
      <>
        {/* Navigation Bar --START--*/}
        <div className="navigationParent">
          <div className='navigation'>
            <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
              <div className="container-fluid">
                <a className="navbar-brand fw-bold" style={{ "color": "white" }} rel="noreferrer" href="/">
                  TheDevPiyush
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" aria-current="page" rel="noreferrer" href="#home">|Home|</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" aria-current="page" rel="noreferrer" href="#about">|About| </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" rel="noreferrer" href="#project">|Projects|</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" rel="noreferrer" href="#sociall">|Social-Medias|</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" rel="noreferrer" href="#form">|Contact|</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navigation Bar --END--*/}

        {/* BOTTOM NAVIGATOR --START-- */}

        <div className="bottomnav">
          <div className="navBtn">
            <a href="#home">
              <div className="navlogo"><i class="fa fa-home" aria-hidden="true"></i></div>
              <div className="text">Home</div>
            </a>
          </div>
          <div className="navBtn">
            <a href="#about">
              <div className="navlogo"><i class="fa-solid fa-user"></i></div>
              <div className="text">About</div>
            </a>
          </div>
          <div className="navBtn">
            <a href="#project">
              <div className="navlogo"><i class="fa-brands fa-github"></i></div>
              <div className="text">Projects</div>
            </a>
          </div>
          <div className="navBtn">
            <a href="#sociall">
              <div className="navlogo"><i class="fa fa-instagram" aria-hidden="true"></i></div>
              <div className="text">Social</div>
            </a>
          </div>
          <div className="navBtn">
            <a href="#contact">
              <div className="navlogo"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div className="text">Contact</div>
            </a>
          </div>
        </div>


        {/* BOTTOM NAVIGATOR --END-- */}


        {/* Home --START--*/}
        <div className="Home" id='home'>
          <div className="homeBox">
            <h4 className='fw-bold'>Welcome to TheDevPiyush</h4>
            <p>I help Spider-Man with his web shooters, or you can simply call me <strong>
              Web-Developer.
            </strong>
            </p>
          </div>
        </div>
        {/* Home --END--*/}



        {/* About --START-- */}

        <div className="about" id='about'>
          <h2>
            <u>
              About
            </u>
          </h2>
          <div className="contentBox" id='contentBox'>
            Hello, I am Piyush. I'm a self taught Programmer, and still learning. I'm good in Python, Java, C, C++ and especially in <strong>React-js (Web-Development)</strong>, and I have made some physics based games in Unity Game Engine, using C# language.
            <p>
              You can see or get my projects' source codes on my github account <a className='a' rel="noreferrer" href="https://github.com/thedevpiyush/" target="_blank">@TheDevPiyush
              </a>.
            </p>
            <p>
              I'll be creating more complex and useful projects in future, so make sure to follow me on github.
            </p>
            <h5>
              <u>
                This site automatically fetches projects from my github.
              </u>
            </h5>
            <p>
              Here are all my projects which are available on GitHub, their live working links and their source code links are provided respectively.
            </p>
          </div>
        </div>
        {/* About --END -- */}



        {/* Projects --START--*/}
        <div className="project" id='project'>
          <h2>
            <u>
              Projects</u> - {this.state.no} <i className="fa fa-arrow-right float-end px-3" onClick={this.next} id='arrow' aria-hidden="true"></i><i className="fa fa-arrow-left float-end px-3" onClick={this.prev} id='arrow' aria-hidden="true"></i>
          </h2>
          {this.state.isLoaded ?
            <div className="cardContainer" id='cardcontainer'>
              {this.state.getProjectsDetails.map((items, index = 0) =>

                <div key={items.id} className="projectCard" id='projectcard'>
                  <div className="projectHeading">

                    {index + 1}.{items.name}

                  </div>

                  <div className="card">

                    <div className="projectBody">
                      {items.description}
                    </div>
                    <br />


                    <div className="live">
                      <div id='titleLive'>
                        The App is live here:
                      </div>
                      <br />
                      <a rel="noreferrer" className='a cardLinks liveLink' href={`${items.homepage}`} target="_blank">
                        {items.homepage}
                      </a>
                    </div>

                    <div className="borderBetween"></div>

                    <div className="projectsourceurl">
                      <div id='titleSource'>
                        Source code is here :
                      </div>
                      <br />
                      <a rel="noreferrer" className='a cardLinks sourceLink' href={`${items.html_url}`} target="_blank">
                        {items.html_url}
                      </a>
                    </div>
                  </div>

                </div>)}
            </div> :
            <div className="text-center">
              <div className="spinner-border text-light my-4" id='spinner' role="status">
              </div>
              <div id='wait' >Getting projects. Please wait... {this.state.prorgessValue}</div>
            </div>}

        </div>
        {/* Projecta --END-- */}




        {/* Social Icons -- START -- */}
        <div className="social" id='sociall'>
          <div className="title">

            <h2>
              <u>
                Social Media
              </u>
            </h2>
          </div>
          <div className="logocontainer">

            <div className="insta">
              <a href="https://www.instagram.com/hey.its.piyush/" rel="noreferrer" target='_blank'> <i id='socialicon' className="fa fa-instagram inst" aria-hidden="true"></i></a>
            </div>

            <div className="github">
              <a href="https://github.com/thedevpiyush/" rel="noreferrer" target='_blank'> <i id='socialicon' className="fa fa-github git" aria-hidden="true"></i></a>
            </div>

            <div className="fb">
              <a href="https://www.facebook.com/heyitspiyush/" rel="noreferrer" target='_blank'> <i id='socialicon' className="fa fa-facebook-official fbk" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        {/* Social Icons -- END -- */}




        {/* Contact Form --Start-- */}
        <div className="contact" id='contact'>

          <h2>
            <u>
              Contact
            </u>
          </h2>
          <div className="form" id="form">
            <form action="https://formspree.io/f/xayzonpa"
              method="POST">
              <div className="inputs">

                <input required placeholder='Full Name' name='Name' id='name' type="text" onKeyDown={
                  (e) => {
                    if (e.ctrlKey && e.key === "Enter") {
                      document.getElementById("send").click()
                    }
                  }
                } />
                <br />
                <input required placeholder='Email' name='Email' id='email' type="email" onKeyDown={
                  (e) => {
                    if (e.ctrlKey && e.key === "Enter") {
                      document.getElementById("send").click()
                    }
                  }
                } />
                <br />

                <input placeholder='Contact No. (Optional)' type="number" name="Phone Number" id="phn" onKeyDown={
                  (e) => {
                    if (e.ctrlKey && e.key === "Enter") {
                      document.getElementById("send").click()
                    }
                  }
                } />
                <br />

                <textarea required placeholder='Message' onKeyDown={
                  (e) => {
                    if (e.ctrlKey && e.key === "Enter") {
                      document.getElementById("send").click()
                    }
                  }
                } type="text" name="Message" id="message" />
                <br />

                <button id='send'>
                  Send
                </button>
              </div>
            </form>

          </div>

        </div>
        {/* Contact Form --END-- */}




      </>
    );
  }
}

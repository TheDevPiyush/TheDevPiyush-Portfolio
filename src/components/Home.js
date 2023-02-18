import React, { Component } from 'react';
import "./Home.css"


export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      getProjectsDetails: [],
      no: null,
      isLoaded: false
    }
  }
  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    let url = "https://api.github.com/users/thedevpiyush/repos"
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({ getProjectsDetails: jsonData })
    this.setState({ no: jsonData.length, isLoaded: true })
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
                    <a className="nav-link active fw-bold" aria-current="page" rel="noreferrer" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active fw-bold" aria-current="page" rel="noreferrer" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active fw-bold" rel="noreferrer" href="#project">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active fw-bold" rel="noreferrer" href="#form">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Navigation Bar --END--*/}



        {/* Home --START--*/}
        <div className="Home" id='home'>
          <div className="homeBox">
            <h4 className='fw-bold'>Welcome to TheDevPiyush</h4>
            <p>I help Spider-Man with his web shooters, or you can simply call me <strong>
              Web-Designer.
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
            Hello, I am Piyush. I'm a self taught Coder, and still learning. I'm good in Python, React js (Web-Development), and I have made some physics based games in Unity Game Engine, using C# language.
            <p>
              You can see or get my projects' source codes on my github account <a rel="noreferrer" href="https://github.com/thedevpiyush/" target="_blank">@TheDevPiyush
              </a>.
            </p>
            <p>
              I'll be creating more complex and useful projects in future so make sure to follow me on github.
            </p>
            <h5>
              This site automatically fetches projects from my github.
            </h5>
            <p>
              Here are all my projects which are available on my github.
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
                <div className="projectCard" id='projectcard'>
                  <div className="projectHeading">
                    <h3 key={items.id}>
                      {index + 1}.{items.name}
                    </h3>
                  </div>
                  <div className="card">

                    <div key={items.id} className="projectBody">
                      {items.description}
                    </div>
                    <br />
                    <div className="live">
                      <h5>
                        The App is live here:
                      </h5>
                      <br />
                      <a key={items.id} rel="noreferrer" href={`${items.homepage}`} target="_blank">
                        {items.homepage}
                      </a>
                    </div>
                  </div>

                </div>)}
            </div> :
            <div className="text-center">
              <div className="spinner-border text-light" role="status">
              </div>
            </div>}

        </div>
        {/* Projecta --END-- */}



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

                <input required placeholder='Full Name' name='Name' id='name' type="text" />
                <br />
                <input required placeholder='Email' name='Email' id='email' type="email" />
                <br />

                <input placeholder='Contact No. (Optional)' type="number" name="Phone Number" id="phn" />
                <br />

                <textarea required placeholder='Message' type="text" name="Message" id="message" />
                <br />

                <button>
                  Send Message
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

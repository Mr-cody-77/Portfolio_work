import React, { useState } from 'react'
import './Resume.css'
import DP from './Images/DP.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import CV from "./Images/CV.pdf";
import { Link } from 'react-scroll';

const Resume = () => {
  // light and dark mode state
  // toggle menu status
  const [isopen, setisopen] = useState(false)
  const togglemenu = () => {
    setisopen(!isopen)
  }
  const qualification_data = [
    {
      year: "2021",
      institute: "St. Xavier's Collegiate School - India",
      desc: "Grade : 98%, Board : I.C.S.E"
    },
    {
      year: "2023",
      institute: "Techno India Group Public School",
      desc: "Grade : 91%, Board : C.B.S.E"
    },
    {
      year: "2023-2027",
      institute: "National Insitute of Technology, Durgapur",
      desc: "Pursuing B.Tech in Electrical Engineering"
    },
    {
      year: "2024",
      institute: "Indian Institute of Technology, Madras",
      desc: "Bachelor of Science - BS, Data Science"
    },

  ]
  const exprience = [
    {
      event: 'Campus Ambassador',
      post: "Kshitij, IIT Kharagpur",
      year: '2024-Present',

    },
    {
      event: 'Marketing Intern',
      post: "Corizo, Part-Time",
      year: '2024-Present',

    },
    {
      event: 'Content Writer',
      post: "I AM A NITIAN, Full-Time",
      year: '2024-Present',

    }

  ]
  const projects = [
    {
      name: "Smart Stick",
      year: "2024",
      desc: "Research paper on Smart stick for blind people."
    },

  ]
  const skills = ["TensorFlow", "Front-End Development","Python", "Algorithms","React", "Bootstrap", "Exploratory Data Analysis"]
  const achievment = [
    {
      name: "Howzzat Finalist",
      by: 'Issued by Quizinc NIT Durgapur',
      year: '2024'
    },
    {
      name: "Honour Card",
      by: 'Issued by St. Xaviers COllegiate School',
      year: '2019'
    },
    {
      name: "Spell Bee Competition",
      by: 'Issued by SpellBee',
      year: '2018'
    },

  ]
  const linkedin = 'https://www.linkedin.com/in/shrutisadhan-mudly-ab4b342a4/'
  const instagram = 'https://www.instagram.com/sunamxx?igsh=MTE2a3Z6eGN5aTB3Nw%3D%3D&utm_source=qr'
  const github = "https://github.com/SSMudly"
  const facebook = "https://www.facebook.com/shrutisadhan.mudly?mibextid=LQQJ4d"
  const [formData, setFormData] = useState({
    Email: '',
    Name: '',
    Message: ''
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = '#'; // Add your Google Apps Script URL here

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      {/* for light mode background image */}
      <div className="bglight">
      </div>
 
      {/* main container */}
      <section className="maincontent">
        <div className="navbody">
          <ul className="navlinks">
            <li><Link to="introcontent" spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
            <li><Link to="aboutme" spy={true} smooth={true} offset={-80} duration={500}>About Me</Link></li>
            <li><Link to="qualification" spy={true} smooth={true} offset={-80} duration={500}>Qualification</Link></li>
            <li><Link to="exp-pro" spy={true} smooth={true} offset={-80} duration={500}>Exprience & Projects</Link></li>
            <li><Link to="skills-achievment" spy={true} smooth={true} offset={-80} duration={500}>Skills & Achievments</Link></li>
            <li><Link to="contactme" spy={true} smooth={true} offset={-80} duration={500}>Contact Me</Link></li>
          </ul>
          <div className="hamburger">
            <div className="togglemenu">
              <div className="icon" onClick={togglemenu}>
                <div className={isopen ? "lines line1open" : "lines line1"}></div>
                <div className={isopen ? "lines line2open" : "lines line2"}></div>
                <div className={isopen ? "lines line3open" : "lines line3"}></div>
              </div>
              <div className={isopen ? "togglenav tactive" : "togglenav"} id="togglenav">
                <ul>
                  <li><Link to="introcontent" spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
                  <li><Link to="aboutme" spy={true} smooth={true} offset={-80} duration={500}>About Me</Link></li>
                  <li><Link to="qualification" spy={true} smooth={true} offset={-80} duration={500}>Qualification</Link></li>
                  <li><Link to="exp-pro" spy={true} smooth={true} offset={-80} duration={500}>Exprience & Projects</Link></li>
                  <li><Link to="skills-achievment" spy={true} smooth={true} offset={-80} duration={500}>Skills & Achievments</Link></li>
                  <li><Link to="contactme" spy={true} smooth={true} offset={-80} duration={500}>Contact Me</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="introcontent">
            <img className='DP' src={DP} alt="" />
            <div className='mydesc'>
              <h1><span>Hello! </span>I'm</h1>
              <h1>Shrutisadhan Mudly</h1>
              <p>B.Tech in E.E</p>
              <p>Email:- sm.23ee8040@nitdgp.ac.in</p>
              <p>Phone No. :- 8240064024</p>
              <p>Address :- Hall-14, NITDGP</p>
            </div>
          </div>
          <div className="introfooter">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        {/* about myself */}
        <div className="aboutme">
          <h1>About Me</h1>
          <p>Hi, I am <span style={ { color: 'blue', fontSize: '1.2em' }}> Shrutisadhan Mudly</span>, pursuing my graduation in technology from <span style={ { color: 'blue', fontSize: '1.2em' }}>NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR</span>  IN E.E . I a dedicated student with a passion for technology and a stronf commitment to personal and professioin growth. Known for a kind and empathetic nature, I strive to create a positive enviroment in collaborative settings. I prioritize focus and mindfulness in my work, always seeking to enhance my skills and contribute meaningfully to projects, Eager to leverage my technical knowledge and interpersonal skills in a dynamic work enviroment. </p>
          <div className="spec">
            <p><span>Field of Interest :-</span> Robotics and Automation, Internet of Things, Mechtronics</p>
            <p><span>Language Known :-</span> English, Hindi, Bengali</p>
            <p><span>hobbies :-</span> Web Development, Painting, Playing Guitar, Football</p>
          </div>

        </div>
        {/* For my qualifications */}
        <div className="qualification">
          <h1 id='qhead'>Qualification</h1>
          {qualification_data.map(data => (
            <div className='timeline'>
              <div className="dot">
                <div></div>
              </div>
              <div className="items">
                <h4>{data.year}</h4>
                <h3>{data.institute}</h3>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* for exprience and projects */}
        <div className="exp-pro">
          <div className="exprience">
            <h2>Exprience</h2>
            {exprience.map(data => (
              <div className="item">
                <h3>{data.event}</h3>
                <p>{data.post},   ({data.year})</p>
              </div>
            ))}
          </div>
          <div className="projects">
            <h2>Projects</h2>
            {projects.map(data => (
              <div className="item">
                <h3>{data.name},   {data.year}</h3>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* For skills and acheivement */}
        <div className="skills-achievment">
          <div className="skills">
            <h2>Technical Skills</h2>
            <ul className='item'>
              {skills.map(data => (
                <li>{data}</li>
              ))}
            </ul>
          </div>
          <div className="achievment">
            <h2>Achievments</h2>
            <ul>
              {achievment.map(data => (
                <div>
                  <li>{data.name}, {data.year}</li>
                  <p>By, {data.by}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="contactme">
          <form className='form' onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <p>
              Email:
            </p>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required="True" />
            <p>
              Name:
            </p>
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required="True"/>
            <p>
              Message:
            </p>
            <textarea name="Message" value={formData.Message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="social">
            <div>
              <h4>My Social Media handles</h4>
              <div className="icons">
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className="CV">
              <h4>View/Download My CV</h4>
              <a href="#" download={CV}>Download</a>

            </div>

          </div>
        </div>
        <div className="footer">
          <p>&copy; 2024 Created and Managed by Sonu Mahata.</p>
        </div>
      </section>
    </div>
  )
}

export default Resume


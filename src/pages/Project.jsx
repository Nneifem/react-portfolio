import recipediaImage from '../assets/recipedia.png'
import bookbustaImage from '../assets/bookbusta.png'
import weatherDashboardImage from '../assets/weather.png'
import textEditorImage from '../assets/text.png'
import noteTakerImage from '../assets/note.png'
import passwordGeneratorImage from '../assets/password.png'
import githubLogo from '../assets/github.svg.png'
import habitYourWayImage from '../assets/habityourway.png'
import corbinPortfolio from '../assets/corbinportfolio.png'
import './style/Project.css'

export default function Project(){
    const projects = [
        {
            name: "Recipedia",
            githubLink: "https://github.com/ruggerheist/recipedia",
            websiteLink: "https://ruggerheist.github.io/recipedia/",
            description: 'discover some new recipes',
            image: recipediaImage,
            technology: 'HTML, CSS, JavaScript, recipe/nutrition api'
        },
        {
            name: "Bookbusta",
            githubLink: "https://github.com/Nneifem/bookbusta",
            websiteLink: "https://bookbusta-950538aa625f.herokuapp.com/",
            description: 'create an account, find books, and leave reviews',
            image: bookbustaImage,
            technology: 'book api, axois, bcrypt, dotenv, express, session,',
            technology2: 'handlebars, sequelize, mysql2, bootstrap, JavaScript'
        },
        {
            name: "Corbin Portfolio",
            githubLink: "https://github.com/Nneifem/corbin-portfolio",
            websiteLink: "https://corbinportfolio.netlify.app/",
            description: 'portfolio to view Corbins art, music, and youtube ',
            image: corbinPortfolio,
            technology: 'React, Vite, Bootstrap, CSS'
        },
        {
            name: "Weather Dashboard",
            githubLink: "https://github.com/Nneifem/weather-dashboard",
            websiteLink: "https://nneifem.github.io/weather-dashboard/",
            description: 'checkout the weather anywhere for the next 5 days',
            image: weatherDashboardImage,
            technology: 'HTML, CSS, JavaScript, OpenWeatherMap api'
        },
        {
            name: "Text Editor",
            githubLink: "https://github.com/Nneifem/text-editor",
            websiteLink: "https://nneif-text-editor-2d4fcad3ac4f.herokuapp.com/",
            description: 'write some text online or offline',
            image: textEditorImage,
            technology: 'HTML, CSS, JavaScript, progressive web application(PWA)',
            technology2: 'express'
        },
        {
            name: "Note Taker",
            githubLink: "https://github.com/Nneifem/note-taker",
            websiteLink: "https://nneif-note-taker.herokuapp.com/",
            description: 'create, update, and delete notes',
            image: noteTakerImage,
            technology: 'HTML, CSS, JavaScript, node.js, express.js'
        },
        {
            name: "Habit Your Way",
            githubLink: "https://github.com/slmov215/habit-your-way",
            websiteLink: "https://habit-your-way-habit-tracker-8b86617a280e.herokuapp.com/",
            description: 'keep track of your daily activities',
            image: habitYourWayImage,
            technology: 'react, apollo, bootstrap, node.js, express.js, graphQL,',
            technology2: 'mongoDB, JWT, cloudinary api'
        },

    ]
    
    return(
        <section>
            <h3 className="project-name">My Projects</h3>
            <ul className="projects">
                {
                    projects.map((project, i) => (
                        <li className="list" key = {i}>
                           <div className="card">
                            <h4 className="card-header">{project.name}</h4>
                            <p className="project-detail">"{project.description}"</p>
                            <img src={project.image} className="img-fluid" alt="each picture image"></img>
                            <div className="card-body">
                                <p className="tech-used">Technologies Used: <br></br>{project.technology} <br></br> {project.technology2}</p>
                                <a href={project.websiteLink} className="web-link">Website Link</a>
                                <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                            </div>
                           </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};


{/* <div className="flip-card">
                                <div className="flip-card-inner">
                                <div className="front-card">
                                <img src={project.image} className="image" alt="each picture image"></img>
                            </div>
                            <div className="back-card">
                                <div className="project-title">
                                        <a href={project.websiteLink} style={{color: "#38220f"}}>{project.name}</a>
                                </div>
                                <h5>"{project.description}"</h5>
                                <p>Technology Used: {project.technology} {project.technology2}</p>
                                <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                            </div>
                                </div>
                            </div> */}
                        {/* <div className='card'>
                        <div className="project-section">
                            <img src={project.image} className="image" alt="each picture image"></img>
                            <div className="project-info">
                                <div className="project-title">
                                    <a href={project.websiteLink} style={{color: "#D4B59E"}}>{project.name}</a>
                            </div>
                            <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                            <div className='project-description'>
                                <h5>"{project.description}"</h5>
                                <p>Technology Used: {project.technology}</p>
                                <p>{project.technology2}</p>
                            </div>
                            </div>
                        </div>
                        </div> */}
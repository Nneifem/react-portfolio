import recipediaImage from '../assets/recipedia.png'
import bookbustaImage from '../assets/bookbusta.png'
import weatherDashboardImage from '../assets/weather.png'
import textEditorImage from '../assets/text.png'
import noteTakerImage from '../assets/note.png'
import passwordGeneratorImage from '../assets/password.png'
import githubLogo from '../assets/github.svg.png'
import habitYourWayImage from '../assets/habityourway.png'
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
            name: "Habit Your Way",
            githubLink: "https://github.com/slmov215/habit-your-way",
            websiteLink: "https://habit-your-way-habit-tracker-8b86617a280e.herokuapp.com/",
            description: 'keep track of your daily activities',
            image: habitYourWayImage,
            technology: 'react, apollo, bootstrap, node.js, express.js, graphQL,',
            technology2: 'mongoDB, JWT, cloudinary api'
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
            name: "Password Generator",
            githubLink: "https://github.com/Nneifem/password-generator",
            websiteLink: "https://nneifem.github.io/password-generator/",
            description: 'generate a new password',
            image: passwordGeneratorImage,
            technology: 'HTML, CSS, JavaScript'
        },

    ]
    
    return(
        <section>
            <h3 className="project-name">My Projects</h3>
            <ul className="projects">
                {
                    projects.map((project, i) => (
                        <li key = {i}>
                        <div className='card'>
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
                        </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};
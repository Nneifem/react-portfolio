import recipediaImage from '../assets/recipedia.png'
import bookbustaImage from '../assets/bookbusta.png'
import weatherDashboardImage from '../assets/weather.png'
import textEditorImage from '../assets/text.png'
import noteTakerImage from '../assets/note.png'
import passwordGeneratorImage from '../assets/password.png'
import githubLogo from '../assets/github.svg.png'
import './style/Project.css'

export default function Project(){
    const projects = [
        {
            name: "Recipedia",
            githubLink: "https://github.com/ruggerheist/recipedia",
            websiteLink: "https://ruggerheist.github.io/recipedia/",
            description: 'discover some new recipes',
            image: recipediaImage,
        },
        {
            name: "Bookbusta",
            githubLink: "https://github.com/Nneifem/bookbusta",
            websiteLink: "https://bookbusta-950538aa625f.herokuapp.com/",
            description: 'create an account, find books, and leave reviews',
            image: bookbustaImage,
        },
        {
            name: "Weather Dashboard",
            githubLink: "https://github.com/Nneifem/weather-dashboard",
            websiteLink: "https://nneifem.github.io/weather-dashboard/",
            description: 'checkout the weather anywhere for the next 5 days',
            image: weatherDashboardImage,
        },
        {
            name: "Text Editor",
            githubLink: "https://github.com/Nneifem/text-editor",
            websiteLink: "https://nneif-text-editor-2d4fcad3ac4f.herokuapp.com/",
            description: 'write some text online or offline',
            image: textEditorImage,
        },
        {
            name: "Note Taker",
            githubLink: "https://github.com/Nneifem/note-taker",
            websiteLink: "https://nneif-note-taker.herokuapp.com/",
            description: 'create, update, and delete notes',
            image: noteTakerImage,
        },
        {
            name: "Password Generator",
            githubLink: "https://github.com/Nneifem/password-generator",
            websiteLink: "https://nneifem.github.io/password-generator/",
            description: 'generate a new password',
            image: passwordGeneratorImage,
        },

    ]
    
    return(
        <section>
            <h3 className="project-name">My Projects</h3>
            <ul className="projects">
                {
                    projects.map((project, i) => (
                        <li key = {i}>
                        <div className="project-section">
                            <img src={project.image} className="image" alt="each picture image"></img>
                            <div className="project-info">
                                <div className="project-title">
                                    <a href={project.websiteLink} style={{color: "38220f"}}>{project.name}</a>
                            </div>
                            <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                            <p>{project.description}</p>
                            </div>
                        </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};
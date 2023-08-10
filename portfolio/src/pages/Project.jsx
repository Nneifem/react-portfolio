import recipediaImage from '../assets/recipedia.png'
import bookbustaImage from '../assets/bookbusta.png'
import weatherDashboardImage from '../assets/weather.png'
import textEditorImage from '../assets/text.png'
import noteTakerImage from '../assets/note.png'
import passwordGeneratorImage from '../assets/password.png'
import githubLogo from '../assets/github.svg.png'
import './Project.css'

export default function Project(){
    const projects = [
        {
            name: "Recipedia",
            githubLink: "https://github.com/ruggerheist/recipedia",
            websiteLink: "https://ruggerheist.github.io/recipedia/",
            image: recipediaImage,
        },
        {
            name: "Bookbusta",
            githubLink: "https://github.com/Nneifem/bookbusta",
            websiteLink: "https://bookbusta-950538aa625f.herokuapp.com/",
            image: bookbustaImage,
        },
        {
            name: "Weather Dashboard",
            githubLink: "https://github.com/Nneifem/weather-dashboard",
            websiteLink: "https://nneifem.github.io/weather-dashboard/",
            image: weatherDashboardImage,
        },
        {
            name: "Text Editor",
            githubLink: "https://github.com/Nneifem/text-editor",
            websiteLink: "https://nneif-text-editor-2d4fcad3ac4f.herokuapp.com/",
            image: textEditorImage,
        },
        {
            name: "Note Taker",
            githubLink: "https://github.com/Nneifem/note-taker",
            websiteLink: "https://nneif-note-taker.herokuapp.com/",
            image: noteTakerImage,
        },
        {
            name: "Password Generator",
            githubLink: "https://github.com/Nneifem/password-generator",
            websiteLink: "https://nneifem.github.io/password-generator/",
            image: passwordGeneratorImage,
        },

    ]
    
    return(
        <section>
            <h3>Projects</h3>
            <ul>
                {
                    projects.map((project, i) => (
                        <li key = {i}>
                            <img src={project.image} className="project-images" alt="each picture image"></img>
                            <a href={project.websiteLink}>{project.name}</a>
                            <a href={project.githubLink}><img src={githubLogo} className="github-image" alt="github logo"></img></a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};
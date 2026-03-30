import resumePdf from './Nneifem.pdf'
import './style/Resume.css'

export default function Resume(){
    return(
        <>
        <h3 className="resume-title">Skills & Resume</h3>
        <p className="social-links">
            <a href="https://www.linkedin.com/in/nneif-akpunonu-2799a4266/" className="linkedin-link">Linkedin</a>
            <a href="https://github.com/Nneifem" className="github-link">Github</a>
        </p>
        <a href={resumePdf} download='resume-pdf' target='_blank' rel='noreferrer' className="resume-link">Download my resume</a>
        <p className=""></p>
        <section className="front-end">
            <h4>Languages</h4>
            <ul className="front-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
            </ul>
        </section>
        <section className="front-end">
            <h4>Softwares</h4>
            <ul className="front-list">
                <li>MySQL</li>
                <li>Figma</li>
                <li>React</li>
                <li>Vite</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Replit</li>
            </ul>
        </section>
        <section className="back-end">
            <h4>Methods</h4>
            <ul className="back-list">
                <li>Object-Oriented Programming</li>
                <li>Front-end development</li>
                <li>UI/UX design</li>
            </ul>
        </section>
        </>
    )
};
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
            <h4>Front-End Skills</h4>
            <ul className="front-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Java</li>
                <li>Figma</li>
                <li>Rest APIs</li>
            </ul>
        </section>
        <section className="back-end">
            <h4>Back-End Skills</h4>
            <ul className="back-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>Object-Oriented Programming</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>MIPS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Sequelize</li>
            </ul>
        </section>
        </>
    )
};
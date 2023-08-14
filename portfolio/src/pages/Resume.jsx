import resumePdf from './resume.pdf'
import './Resume.css'
export default function Resume(){
    return(
        <>
        <h3>Resume</h3>
        <body>
        <a href={resumePdf} download='resume-pdf' target='_blank' rel='noreferrer' className="resume-link">Download my resume</a>
        <section className="front-end">
            <h4>Front-End Skills</h4>
            <ul className="front-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Java</li>
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
            </ul>
        </section>
        </body>
        </>
    )
};
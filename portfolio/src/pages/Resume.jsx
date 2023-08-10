import resumePdf from './resume.pdf'
export default function Resume(){
    return(
        <>
        <h3>Resume</h3>
        <a href={resumePdf} download='resume-pdf' target='_blank' rel='noreferrer'>Download my resume</a>
        <section className="fron-end">
            <h4>Front-End Skills</h4>
            <ul>
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
            <ul>
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
        </>
    )
};
import resumePdf from './resume.pdf'
export default function Resume(){
    return(
        <>
        <h3>Resume</h3>
        <body className="p-3">
        <a href={resumePdf} download='resume-pdf' target='_blank' rel='noreferrer'>Download my resume</a>
        <section className="front-end">
            <h4>Front-End Skills</h4>
            <ul className="list-group list-group-disc" style={{ width: "9rem" }}>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Java</li>
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
        </body>
        </>
    )
};
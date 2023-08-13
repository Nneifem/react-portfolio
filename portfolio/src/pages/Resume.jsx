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
            <ul className="list-group list-group-disc" style={{ width: "9rem" }}>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">Object-Oriented Programming</li>
                <li className="list-group-item">SQL</li>
                <li className="list-group-item">NoSQL</li>
                <li className="list-group-item">MIPS</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Mongoose</li>
            </ul>
        </section>
        </body>
        </>
    )
};
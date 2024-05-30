import povImage from '../assets/POV.png'
import walmartImage from '../assets/Walmart.png'
import './style/UI.css'

export default function UI(){
    const uiprojects = [
        {
            name: 'Walmart',
            task: 'take a "bad" website and redesign it',
            desktopLink: 'https://www.figma.com/proto/ErFebmZKeM15ViVj4poYct/Akpunonu-Desktop-Home%2FService%2FDepartment?node-id=1-2&t=rqIi2ZAjimBRfcVS-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2',
            mobileLink: 'https://www.figma.com/proto/yIlTMwFlKDZ2JMlDJUZZhX/Akpunonu-Mobile-Home%2FService%2FDepartment?t=qUpfdMmYU7b6uXyM-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2',
            image: walmartImage
        },
        {
            name: 'P O V',
            task: 'poetry webiste designed for poetry lovers',
            desktopLink: 'https://www.figma.com/proto/gJr5T2tzTzjaL2U0jbliD8/Akpunonu-POV-High-Fidelity?node-id=3-2&t=wXCEtHgWoEBty7xH-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2',
            mobileLink: 'https://www.figma.com/proto/cePZjpFxpY5M613AqdyAnk/Akpunonu-POV-High-Fidelity?node-id=2-2&t=xLFuhzRg2x4VSnJs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A4',
            image: povImage
        },
    ]

    return(
        <section>
            <h3> UI Projects</h3>
            <ul className="ui-projects">
                {
                    uiprojects.map((uiproject, i) => (
                        <li className="list" key = {i}>
                            <div className="card">
                                <h4 className="card-header">{uiproject.name}</h4>
                                <p className="project-detail">"{uiproject.task}"</p>
                                <img src={uiproject.image} className="img-fluid" alt="project homepage"></img>
                                <div className="card-body">
                                    <a href={uiproject.desktopLink} className='web-link'>Desktop Link <br></br></a>
                                    <a href={uiproject.mobileLink} className='web-link'>Mobile Link</a>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
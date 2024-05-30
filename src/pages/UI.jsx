import povImage from '../assets/POV.png'
import walmartImage from '../assets/Walmart.png'
import './style/UI.css'

export default function UI(){
    const uiprojects = [
        {
            name: 'Walmart',
            task: 'take a "bad" website and redesign it',
            desktopLink: 'https://lnkd.in/eG8AdMCd',
            mobileLink: 'https://lnkd.in/eeCsJ9Dc',
            image: walmartImage
        },
        {
            name: 'P O V',
            task: 'poetry webiste designed for poetry lovers',
            desktopLink: 'https://lnkd.in/eB3G-y-X',
            mobileLink: 'https://lnkd.in/eMEHm57i',
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
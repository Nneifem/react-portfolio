import selfieImage from '../assets/selfie.jpg'
import './style/About.css'

export default function About(){
    return(
        <>

        <h3>About me</h3>
        <div className="about-me">
        <img src={selfieImage} className="img-fluid" alt="picture of nneif"></img>
        <p className="bio">Hello, I'm Nneif Akpunonu and I'm a information technology student and have a Full Stack Developer certificate I earned at the University of Pennsylvania. I didn't get into coding until my second semester freshman year of college and that's when I discovered my love for web development, specifically the front-end. Looking to expand my skills and grow more as a Front-End Developer.  </p>
        </div>
        </>
    )
};
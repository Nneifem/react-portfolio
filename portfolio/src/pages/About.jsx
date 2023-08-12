import selfieImage from '../assets/selfie.jpg'
import './About.css'

export default function About(){
    return(
        <>
        <div className="p-3">
        <h3>About me</h3>
        <img src={selfieImage} className="selfie" alt="picture of nneif"></img>
        <p>Hello, I'm Nneif Akpunonu, currently as information techology student at Montgomery County Community College. Did not get into coding until mt first year of college in my first coding class when we briefly talked about HTML and CSS. It was the first time I enjoyed coding and deciding to purse a career as a Front-End Developer.</p>
        </div>
        </>
    )
};
import selfieImage from '../assets/selfie.jpg'
import './About.css'

export default function About(){
    return(
        <>
        <img src={selfieImage} className="selfie" alt="picture of nneif"></img>
        <h3>About me</h3>
        <p>add image of myself</p>
        <p>Hello, I'm Nneif Akpunonu, currently as information techology student at Montgomery County Community College. Did not get into coding until mt first year of college in my first coding class when we briefly talked about HTML and CSS. It was the first time I enjoyed coding and deciding to purse a career as a Front-End Developer.</p>
        </>
    )
};
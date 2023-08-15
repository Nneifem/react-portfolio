import githubLogo from '../assets/github.svg.png'
import linkedinLogo from '../assets/linkedin-logo.webp'
import stackOverflowLogo from '../assets/stackoverflow.png'
import './style/Footer.css'

export default function Footer(){
    return(
       <footer className=" footer d-flex justify-content-center p-5">
        <a href="https://github.com/Nneifem"><img src={githubLogo} className="logo" alt="Github logo"></img></a>
        <a href="https://www.linkedin.com/in/nneif-akpunonu-2799a4266"><img src={linkedinLogo} className="logo" alt="Linkedin logo"></img></a>
        <a href="https://stackoverflow.com/users/22367235/nneif"><img src={stackOverflowLogo} className="logo" alt="Stack overflow logo"></img></a>
       </footer>
    )
};

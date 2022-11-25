import profileImage from './../../assets/images/Asmaa.png';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import './home.css'


const Home = () =>{

    return (
        <>
         <div className="home-container row mx-auto px-5 py-2">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center pt-3">
              <div className='title-container p-2'>
                 <p className='home-title'>Hi,</p>
                 <p className='home-title mb-5'>I'm <span className='home-sub-title'>Asmaa AboBakr</span> Front-End Developer</p>
                 <div className='social-icons row mb-5 px-3'>
                   <div className="col-1 px-0 me-2"><a href="https://github.com/Asmaa-abobakr"><BsGithub className='social-icon'/></a></div>
                   <div className="col-1 px-0 me-2"><a href="https://www.linkedin.com/in/asmaaabobakr/"><BsLinkedin className='social-icon'/></a></div>
                   <div className="col-1 px-0 me-2"><a href="mailto:asmaaabobakr62018@gmail.com"><BsGoogle className='social-icon'/></a></div>
                 </div>
                <div>
                   <a href='Asmaa AboBakr_CV.pdf' download className='btn-download'>Download CV</a>
                 </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center pt-3">
            <div className='profile-img-container'>
                <img src={profileImage} alt="profile-img" />
            </div>
          </div>
        </div>
        </>
    )
}

export default Home;
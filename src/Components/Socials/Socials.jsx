import style from '../Socials/Socials.module.css'
import { Link } from 'react-router-dom';

const Socials = () => {

    return (
        <div className={style.main}>
            <div className={style.name}>
                <img src="../public/logo (2).png" alt="main image" />
                <h1>Satish Bansal</h1>
            </div>
            <button className={style.btn}><Link to='/connect'> Connect with me</Link></button>
            <p>Let's connect with our socials</p>
            <div className={style.social}>

                <a href="https://www.instagram.com/satishbansal450/" target='_blank'><img src="../public/instagram.png" alt="social-media-icon" /></a>
                <a href="https://www.linkedin.com/in/satish-bansal-a88a82203/" target='_blank'><img src="../public/linkedin.png" alt="social-media-icon" /></a>
                <a href="mailto:satishbansal931149@gmail.com" target='_blank'><img src="../public/gmail.png" alt="social-media-icon" /></a>
                <a href="https://github.com/Satish-Bansal" target='_blank'><img src="../public/github.png" alt="social-media-icon" /></a>


            </div>


        </div>
    )
}

export default Socials
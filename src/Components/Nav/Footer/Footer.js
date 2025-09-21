import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import foot from '../../../Assite/logo.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import lin from "../../../Assite/lin.png";
import face from "../../../Assite/face.png";
import inst from "../../../Assite/inst.png";
import twit from "../../../Assite/twit.png";
import f from "../../../Assite/9.png";
import ff from "../../../Assite/10.png";
import fff from "../../../Assite/download (2).png";

const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <img src={foot} className='footerlogo' title='logo'/>
                        <p>lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                            doloe smod temper incididunt ut labore et.
                        </p>
                        
                        <div className='footer-contact'>
                            <div className='footer-icon'>
                                <FontAwesomeIcon icon={faPhone}/>

                            </div>
                            <div className='footer-text'>
                                <h6>Contact Us</h6>
                                <h4> +01 123 456 789</h4>

                            </div>

                        </div>
                        <img className='f' src={f} title='f'/>

                    </div>
                      
                    <div className='col-md-3 col-sm-6'>
                        
                        <h2>Quick Links</h2>
                           
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Booking</a></li>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Our Team</a></li>
                            <li><a href='#'>Service</a></li>
                        </ul>
                        <img className='ff' src={ff} title='ff'/>

                    </div>

                                        
                    <div className='col-md-3 col-sm-6'>
                        <h2>Our Service</h2>
                        <ul>
                            <li><a href='#'>Details Care</a></li>
                            <li><a href='#'>Cardiac Clinic</a></li>
                            <li><a href='#'>Messege Therapy</a></li>
                            <li><a href='#'>Cardiology</a></li>
                            <li><a href='#'>Precise Diagnosis</a></li>
                            <li><a href='#'>Abmbulance Services</a></li>
                            <li><a href='#'>Servics</a></li>
                        </ul>

                    </div>


                                                            
                    <div className='col-md-3 col-sm-6'>
                        <h2>Subcribe</h2>
                        <form>
                            <input type="email" placeholder='Enter Email' />
                            <button type='submit'>Subscribe Now</button>
                        </form>
                          <ul className='social'>
                            <li><a href='#'><img src={face}/></a></li>
                            <li><a href='#'><img src={twit}/></a></li>
                            <li><a href='#'><img src={inst}/></a></li>
                            <li><a href='#'><img src={lin}/></a></li>
                        </ul>
                        <img className='fff' src={fff} title='fff'/>

                    </div>





                </div>

            </div>
            <div className='footerspan'>
                <span>Copyright<span className='spanO'> © </span>2023 Design<span className='spanO'> & </span>  Developed by<span className='spanO'> ThemeTrades</span></span>
            </div>

        </footer>
    )
}
export default Footer;
import { faMagento } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe, faLadderWater, faMap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Contact.css';
import Formm from "./Formm";
import aa from "../Assite/9.png";
const Contact =()=>{
    return(
        <>
         <section className="contact-us"  style={{
                backgroundColor:"#f0e9e9ff",
             
            }}>
                <img src={aa} className="fff" title="aa" style={{
                    marginLeft:"7px"
                }}/>
            <div className="container"  style={{
                backgroundColor:"#ffffffff",
                paddingTop:"10px",
                borderRadius:"10px",
                marginTop:"-60px"
             
            }}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                         <Formm />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="side">
                            <div className="overlay">
                                <h3>Contact Us For Any Informations</h3>
                                <li> <FontAwesomeIcon icon={faMap}/>Lacation</li>
                                <hr/>

                                <p>Contact Us For Any Informations 
                                    Location2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                <li> <FontAwesomeIcon icon={faEnvelope}/> Email & Phone</li>
                                <hr/>
                                
                                <p>info@gmail.com</p>
                                <p>(+10) 569 478 265</p>
                                <li> <FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                                <hr/>

                                <ul>
                                    <li><FontAwesomeIcon icon={faMap}/></li>
                                    <li><FontAwesomeIcon icon={faMagento}/></li>
                                    <li><FontAwesomeIcon icon={faLadderWater}/></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

         </section>
        </>
    )
}

export default Contact;
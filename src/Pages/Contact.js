<<<<<<< HEAD
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
=======



import '../CSS/Programs.css';

import p from "../image/m.png";



export default function Contact(){
    return(
        <>
        
            <div className="part1">
               <h3 className="p">Contact With Developers</h3>
               <div className="br" style={{marginBottom:'30px'}}> </div>

               <div style={{fontSize:'1.2rem'}} >
                <h5>If You Have Any Question,</h5>
                <h5>You Can Contact With Us Via Email And</h5>
                <h5>We Will Respond To You As Soon As Possible</h5>
               </div>

               <div className="br" style={{marginBottom:'30px'}}> </div>          
            
               <div className="contactName"> 
                <div>
                  <span className="p">Lobana Balloul</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Lobana@gmail.com</h5>

                </div> 

                <div >
                  <span className="p">Jana Aldaboos</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Jana@gmail.com</h5>

                </div> 

                <div>
                  <span className="p">Zain Ibrahim</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Zain@gmail.com</h5>

                </div> 

                <div>
                  <span className="p">Yousef Samha</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Yousef@gmail.com</h5>

                </div> 
               </div>


            </div>
         
        </>
    )
}
>>>>>>> ef2a513fd83f300b392ac15276a4a9652dd9582c

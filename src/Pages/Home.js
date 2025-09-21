
import doctor from '../Assite/1.png';
import plus from '../Assite/plus.png';
import './Home.css';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
const Home =()=>{
    const text ="Protect Your Health And Tack Care To Of Your Health";
    const pVariants={
        hidden:{
            opacity:0,
        },
        visible:{
          opacity:1,
          transition:{
            staggerChildren:0.8,
          },
        },
 }
     const pspan={
        hidden:{
            opacity:0,
        },
        visible:{
          opacity:1,
        },
 }
    return(
        <header>
          <div className="container">
           <div className="row">
            <div className="col-md-6 col-lg-6">
             <h5> We Provide All Health Care Solution</h5>
             <h2 >
                {text}
             
            </h2>
             <button> <a href='#'> Read More</a> </button>
              <img className='plus' src={plus} title='plus'/>
            </div>
            <div className="col-md-6 col-lg-6">
                <div className='header-box'>
                    <img src={doctor} title='doctor'/>
                    <FontAwesomeIcon icon={faSquare} /> 
                    <FontAwesomeIcon className='fat' icon={faSquare} /> 

                </div>

            </div>
           </div>
          </div>
        </header>
    )
}

export default Home;
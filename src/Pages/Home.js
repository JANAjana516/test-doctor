
<<<<<<< HEAD
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
=======

import "../App.css";

import AppFooter from "../Components/AppFooter";
import AppHeader from "../Components/AppHeader";
import PageContent from "../Components/PageContent";
import SideMenu from "../Components/SideMenu";



function Home() {
  return (
    <div className="App">
      
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default Home;
>>>>>>> ef2a513fd83f300b392ac15276a4a9652dd9582c

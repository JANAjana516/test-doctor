import "./Latest.css";
import News from "./News";

const LatestNews =() =>{
   return(
    <>
    <div className="lasContaina">
       <h5>Latest News</h5>
       <h3>Our Latest News</h3>
       <div className="latest">
      
        <div><News/></div> 
         <div><News/></div> 
         <div><News/></div> 
        
       </div>
    </div>
     
    </>
   )
}
export default LatestNews;
import "./Book.css";
import pho from "../Assite/7.png";
import gril from "../Assite/8.png";
import cir from "../Assite/6.png";
import squ from "../Assite/5.png";
import loc from "../Assite/download (4).png";
import sett from "../Assite/download (3).png";

const Book =()=>{
    return(
        <>
         <section className="Booking"  style={{
                backgroundColor:"#e2dfdfff",
                paddingTop:"100px",
                borderRadius:"10px",
                height:"800px",
             
            }}>
              
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                         <div className="bookleft">
                           
                            <div className="formbook">
                                <h3>Book Appointment</h3>
                               <form>
                                   <select>
                                         <option>Select Depatment</option>
                                         <option>one</option>
                                         <option>two</option>
                                         <option>three</option>
                                   </select>

                                   <select>
                                         <option>Select Doctor</option>
                                         <option>one</option>
                                         <option>two</option>
                                         <option>three</option>
                                   </select>


                      <div className="form-control">
                          <input placeholder=" Your Name"/>
                     </div>

                     

                      <div className="form-control">
                          <input placeholder=" Phone Numbers"/>
                     </div>
                     
                      <div className="form-control">
                          <input  type="date" placeholder="mm/dd/yyyy"/>
                     </div>

                    <div className="form-control">
                        <button className="buttonBook"> Appointment Now</button>
                     </div>

                      </form>
                     </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                       <div className="bookright">
                        <img src={cir} className="circl" title="circl" />
                        <img src={pho} className="phon" title="phon"/>
                        <img src={gril} className="gril" title="gril"/>
                        <img src={squ} className="squ" title="squ"/>
                        <img src={loc} className="loc" title="loc"/>
                        <img src={sett} className="sett" title="sett"/>

                       </div>
                    </div>

                </div>

            </div>

         </section>
        </>
    )
}

export default Book;
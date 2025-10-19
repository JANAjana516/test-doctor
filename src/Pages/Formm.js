import './Formm.css';

const Formm =()=>{
    
    return(
        <div className='row'>
        <form className="col-lg-4 col-md-8">
            <div className="form-control">
                <input placeholder=" Your Name"/>
            </div>

           <div className="form-control">
                <input placeholder=" Your Email"/>
            </div>

           <div className="form-control">
                <input placeholder="Phone Numbers"/>
            </div>

            <select>
                <option>Select Depatment</option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
            </select>

            <div className="form-control">
                <textarea placeholder="Message"></textarea>

            </div>

            <button>Submit</button>
        </form>
		<div className="right col-lg-4 col-md-8">
         
		 <h2 > Dactors of Depatment</h2>
		 <p> Diagnostics
          Protect Your Health And Tack Care To Of Your Health
    
         Diagnostics
          Protect Your Health And Tack Care To Of Your Health
         Read More
		  </p>
          </div>   
		
        </div>

    )
}
export default Formm;
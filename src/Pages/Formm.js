import './Formm.css';

const Formm =()=>{
    
    return(
        <>
        <form>
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
        </>

    )
}
export default Formm;
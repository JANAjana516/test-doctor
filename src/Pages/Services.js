import Service from "../Components/Servie";
import "./Services.css";
const Services =()=>{
    return(
        <>
          <div className="containerSER" >
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="left">
                    <p className="titel"> Services</p>
                    <h3>We Cover A Big Variety Of Medical Services</h3>
                    <p className="p">We provid the special tips and advice of health care 
                        treatment and high level of best.
                    </p>
                    <button> All Services</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                   <div style={{
                      overflow:"clip",
                   }}>
                    <div style={{
                        backgroundColor:"var(--min-color)",
                        width:"100%",
                        height:"500px",
                        borderRadius:"20px",
                        color:"var(--min-color)",
                        marginLeft:"60px",
                        overflow:"clip",
                    }}>jjj</div>
                   </div>
                   <div className="scroll">
                    <div class="d-flex overflow-auto ">
                      <div class="p-3  text-white"><Service/></div>
                      <div class="p-3  text-white "><Service/></div>
                      <div class="p-3  text-white "><Service/></div>
                      <div class="p-3  text-dark"><Service/></div>
                      <div class="p-3  text-white "><Service/></div> 
                   </div>

                   </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Services;
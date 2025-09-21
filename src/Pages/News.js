import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import a from "../Assite/17.jpg";
import b from "../Assite/18.jpg";
import { faArrowRight, faCalendar, faCalendarDay, faCalendarDays, faChildCombatant, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./News.css";
const News =()=>{
    return(
        <div className="containarNew">
            <img src={b} title="photo"></img>
            <div className="inline">
                <img className="face" src={a} title="doctor"/>
                <p>John Dep</p>
                <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                <p>21 july 2021</p>
            </div>
            <div>
                <h4>In this hpospital there are special surgeon</h4>
                <button>Read More</button>
            </div>

        </div>

    )
}
export default News;
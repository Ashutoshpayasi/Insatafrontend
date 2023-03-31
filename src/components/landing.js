import "./landing.css"
import { NavLink } from "react-router-dom"
const Landing=()=>{
   return(
   <div className="landingpage">
    <div className="welcome">
        <h1>welcome to 10x instaclone</h1>
        <NavLink to="/allpost"> <button>Enter</button></NavLink>
       
    </div>
    <div className="welcomeimage">
        <img height="100%" width="100%" src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg" alt="" />
    </div>
   </div>
   )
}
export default Landing
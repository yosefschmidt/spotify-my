import { Link } from "react-router-dom";
export default function TheLinks(){
 return(
    <div className="links">
       <span><Link  to="/search"> search</Link> </span>
       <span> <Link  to="/menu"> menu</Link> </span>
       <span> <Link  to="/login"> login</Link></span>
       </div> 
 )
}
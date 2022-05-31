import MyRoute from "./MyRoute";
import TheLinks from "./TheLinks";
function Header(){

    return(
        <header className="header">
            <TheLinks/><br/>
             <MyRoute/>

        </header>
    )
}

export default Header;
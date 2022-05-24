import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Search from "./Search";

export default function MyRoute(){

    return(
        <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/login" element={ <Login/>}/>
        </Routes>
    )
}
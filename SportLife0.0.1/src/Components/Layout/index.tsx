import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Publipost } from "../Publipost";

export function Layout(){
    return(
        <>
            <Header/>
            <Publipost/>
            <Outlet/>         
            <Footer/>
        </>
    )
}
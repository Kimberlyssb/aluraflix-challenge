import "./Header.css"
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <img src="/public/img/Logo.png" alt="logo"/>
            <h1 className="header-frase">TODOS LOS AVANCES DE TUS PELICULAS FAVORITAS EN UN SOLO LUGAR</h1>
             <div className="botones-header">
                <button className="button-header"><Link to="/">HOME</Link></button>
                <button className="button-header"><Link to="/nuevo_video" >NUEVO VIDEO</Link></button>
            </div>
        </header>
    )
}

export default Header
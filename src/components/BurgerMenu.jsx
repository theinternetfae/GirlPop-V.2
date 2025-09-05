import { Link } from "react-router-dom";

function BurgerMenu({ exit }) {
    return ( 
        <div className="burger-menu">
            <i className="bi bi-x" onClick={exit}></i>
            <ul className="burger-navs">
                <Link to="/home"><li className="burger-text">Shop</li></Link>
                <li className="burger-text">Blog</li>
                <li className="burger-text">Contact</li>
                <li className="burger-text">Sign in</li>
            </ul>
        </div>
    ); 
}

export default BurgerMenu;
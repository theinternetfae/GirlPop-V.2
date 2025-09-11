import { Link } from "react-router-dom";

function BurgerMenu({ exit, isOpen }) {


    return ( 
        <div className={`burger-menu transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <button onClick={exit} className="bi bi-x text-5xl"></button>
            <ul className="burger-navs">
                <li onClick={exit} className="burger-text"><Link to="/home">Shop</Link></li>
                <li onClick={exit} className="burger-text"><Link>Blog</Link></li>
                <li onClick={exit} className="burger-text"><Link>Contact</Link></li>
                <li onClick={exit} className="burger-text"><Link>Sign in</Link></li>
            </ul>
        </div>
    ); 
}

export default BurgerMenu;
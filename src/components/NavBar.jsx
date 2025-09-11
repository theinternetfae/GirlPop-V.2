import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function NavBar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [burgerStatus, setBurgerStatus] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="nav">
         
            {width < 1024 ? (
                <>
                    <Link to="/checkout" className="relative inline-block">
                            <p className="cart-count">0</p>
                            <i className="bi moves bi-bag"></i>
                    </Link>

                    <Link to="/" className="block w-[120px]">
                     <img src="./images/GirlyPop reverse.png" alt="logo" className="logo"/>
                    </Link>

                    <i className="bi bi-list" onClick={
                        () => setBurgerStatus(true)
                    }></i>

                    {<BurgerMenu isOpen={burgerStatus} exit={() => setBurgerStatus(false)} />}
                </>
            ) : (
                <>

                    <Link to="/" className="block w-[120px]">
                     <img src="./images/GirlyPop reverse.png" alt="logo" className="logo"/>
                    </Link>

                    <div className="navigations">
                        <Link to="/home"><p>Shop</p></Link>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>

                    <div className="user-nav">
                        <button className="nav-btn"><Link to="/home">Sign In</Link></button>
                        <Link to="/checkout" className="relative inline-block">
                            <p className="cart-count">0</p>
                            <i className="bi moves bi-bag"></i>
                        </Link>
                    </div>
                    
                </>
            )}
        </nav>
    );
}

export default NavBar;
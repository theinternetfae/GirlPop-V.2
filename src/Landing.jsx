import { useEffect, useState } from "react";

function Landing() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);
  
          return () => window.removeEventListener("resize", handleResize);
      }, []);  
  
  return ( 
      <div className="landing">
        
        <section className="banner">
          <h2>Welcome to GirlyPop!</h2>
          <p>Buy, sell, slay :3</p>
          <div className="banner-search">
          
            {width >= 764 && <i className="bi bi-search-heart-fill"></i> }
            <input type="text" placeholder="Search..." />
            <i className="bi bi-arrow-right"></i>
          </div>
        </section>

        <section>

        </section>
        
        <section>

        </section>
        
      </div>
    );
}

export default Landing;
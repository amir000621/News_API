import React from "react";
import { Link } from "react-router-dom";
function Navbar() {

  return (
   <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    {/* when my this button navabr toggler icon(for three lines in the corner) i have to attach a # at navbarSupportedContent and also do npm i bootstrap with two imports in index.js */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
       <li><Link className="nav-link" to="/entertainment"> Entertainment</Link></li>
       <li><Link className="nav-link" to="/"> General</Link></li>
       <li><Link className="nav-link" to="/business"> Business</Link></li>
       <li><Link className="nav-link" to="/health"> Health</Link></li>
       <li><Link className="nav-link" to="/science"> Science</Link></li>
       <li><Link className="nav-link" to="/sports"> Sports</Link></li>
       <li><Link className="nav-link" to="/technology"> Technology</Link></li>

      </ul>
     
    </div>
  </div>
</nav>
   </div>
  );
}

export default Navbar;

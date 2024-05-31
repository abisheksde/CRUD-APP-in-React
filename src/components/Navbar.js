import { NavLink } from "react-router-dom";

function Navbar() {
    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            <h4>Todo List</h4>
        </div>

        <div
        className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item">
                <NavLink to={"/"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
               <NavLink to={"/aboutus"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
         About us
</NavLink>
                </li>
        <li className="nav-item">
               <NavLink to={"/crud"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
         Crud
</NavLink>
                </li>
 <li className="nav-item">
                <NavLink to={"/list"} className={ 'nav-link '+(status => status.isActive ? 'active' : '')}>
                    blog
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;
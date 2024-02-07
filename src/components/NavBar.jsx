import { Link } from "react-router-dom";

const NavBar = () => {
  return (
     <nav>
       <ul id="navbar" >{/* navigation here */}
          <li>
            <Link to="/"><h3 className="allPlayers"> All Players </h3></Link>
          </li>
          <li>
            <Link to="/singlePlayer"><h3 className="singlePlayer"> Single Player </h3></Link>
          </li>
          <li>
            <Link to="/newPlayerForm"><h3 className="newPlayerForm"> New Player </h3></Link>
          </li>
        </ul>
    </nav>  
  );
}

export default NavBar;
import { Link, NavLink, useLocation } from "react-router"
import styles from "./Navigation.module.scss"
import { Heart, Search } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <nav className={`${styles.navigationContainer} ${isHomePage ? styles.navHomeContainer : ""}`} aria-label="Huvudnavigation">
      <Link to={"/"}>
        <h1>Palm Tree Travels</h1>
      </Link>

      <p>Upptäck varma, inspirerande destinationer baserade på upplevelser, inte bara platser</p>

      <ul>
        <li>
          <NavLink to={"/search-destination"}>{isHomePage ? "Sök destination" : <Search/>}</NavLink>
        </li>

        <li>
          <NavLink to={"/favorites"}>{isHomePage ? "Favoriter" : <Heart/>}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
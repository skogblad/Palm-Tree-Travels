import { Link, NavLink, useLocation } from "react-router"
import styles from "./Navigation.module.scss"
import { Heart, Search } from "lucide-react";
import type React from "react";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const linkScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={`${styles.navigationContainer} ${isHomePage ? styles.navHomeContainer : ""}`} aria-label="Huvudnavigation">
      <Link to={"/"}>
        <h1>Palm Tree Travels</h1>
      </Link>

      <p>Upptäck varma, inspirerande destinationer baserade på upplevelser och känsla</p>

      <ul>
        <li>
          <NavLink to={"/search-destination"} aria-label="Sök destination">
            {isHomePage ? "Sök destination" : <Search aria-hidden="true" />}
          </NavLink>
        </li>

        {isHomePage && (
          <li>
            <a
              href="#how-it-works"
              onClick={linkScroll}
            >
              Mer info
            </a>
          </li>
        )}

        {!isHomePage && (
          <li>
            <NavLink to={"/favorites"} aria-label="Favoriter">
              <Heart aria-hidden="true" />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
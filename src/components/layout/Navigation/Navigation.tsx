import { Link, NavLink, useLocation } from "react-router"
import styles from "./Navigation.module.scss"
import { Heart, Palmtree, Search } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLightNavBar =
    location.pathname === "/search-destination" ||
    location.pathname === "/favorites" ||
    location.pathname.startsWith("/destination/");

  return (
    <nav
      className={`${styles.navigationContainer} ${isHomePage ? styles.navHomeContainer : ""} ${isLightNavBar ? styles.navSearchContainer : ""}`}
      aria-label="Huvudnavigation"
    >
      <Link to={"/"} className={styles.brand}>
        <Palmtree className={styles.brandIcon} aria-hidden />
        <span className={styles.brandText}>Palm Tree Travels</span>
      </Link>

      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/search-destination"
            className={styles.textIconLink}
            aria-label="Sök destination"
          >
            <Search className={styles.navItemIcon} aria-hidden />
            <span>Upptäck</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={styles.textIconLink}>
            <Heart className={styles.navItemIcon} aria-hidden />
            <span>Favoriter</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

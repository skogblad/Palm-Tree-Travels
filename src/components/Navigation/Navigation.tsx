import { Link, NavLink } from "react-router"
import styles from "./Navigation.module.scss"

export const Navigation = () => {
  return (
    <>
      <nav className={styles.Navigation}>
        <Link to={"/"}>
          <h1>Palm Tree Travels</h1>
        </Link>

        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>

          <li>
            <NavLink to={"/search-destination"}>Sök destination</NavLink>
          </li>

          <li>
            <NavLink to={"/favorites"}>Favoriter</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
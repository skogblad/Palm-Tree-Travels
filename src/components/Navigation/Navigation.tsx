import { Link, NavLink } from "react-router"

export const Navigation = () => {
  return (
    <>
      <Link to={"/"}>
        Palm Tree Travels
      </Link>

      <ul>
        <li>
          <NavLink to={"/"}>Hem</NavLink>
        </li>

        <li>
          <NavLink to={"/sida2"}>Sida 2</NavLink>
        </li>
      </ul>
    </>
  );
}
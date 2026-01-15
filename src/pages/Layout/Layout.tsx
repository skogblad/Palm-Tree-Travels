import { Outlet } from "react-router"
import { Navigation } from "../../components/layout/Navigation/Navigation"
import { Footer } from "../../components/layout/Footer/Footer"

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
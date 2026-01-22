import { Outlet } from "react-router"
import { Navigation } from "../../components/layout/Navigation/Navigation"
import { Footer } from "../../components/layout/Footer/Footer"
import { ScrollToTop } from "../../components/layout/ScrollToTop/ScrollToTop";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <ScrollToTop />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
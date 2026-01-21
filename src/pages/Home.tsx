import { useEffect } from "react"
import { HomePresentation } from "../components/views/HomePresentation/HomePresentation"

export const Home = () => {

  useEffect(() => {
    sessionStorage.removeItem("destinationSearchState");
  }, []);

  return (
    <HomePresentation />
  )
}
import { useParams } from "react-router"
import { DestinationPresentation } from "../components/DestinationPresentation/DestinationPresentation"
import { curatedDestinations } from "../constants/curatedDestinations";

export const Destination = () => {
  const { id } = useParams();
  const destination = curatedDestinations.find(d => d.id === Number(id));

  if(!destination) {
    return <p>Destinationen hittades inte</p>
  } 

  return (
    <DestinationPresentation destination={destination}/>
  )
}
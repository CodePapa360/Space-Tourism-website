import { NavLink, useParams } from "react-router-dom";
import jsonData from "../assets/data.json";

function Destination() {
  const destinations = jsonData.destinations;
  const { name } = useParams();

  const activeName = name || destinations[0].name;
  const selectedDestination = destinations.find(
    (des) => des.name === activeName
  );

  return (
    <>
      <h1>Destination</h1>
      <ul>
        {destinations.map((des) => (
          <li key={des.name}>
            <NavLink to={`${des.name}`}>{des.name}</NavLink>
          </li>
        ))}
      </ul>

      <p>{selectedDestination.name}</p>
      <p>{selectedDestination.description}</p>
    </>
  );
}

export default Destination;

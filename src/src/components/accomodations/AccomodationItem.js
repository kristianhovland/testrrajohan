import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AccomodationItem({ id, name, image, price }) {
  return (
      <Link to={`accomodations/${id}`}>
        <Card style={{ width: "400px" }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>€ {price} per night.</p>
            <img src={image.url} width="360px" alt="Image from the accomodation"></img>
            <Button className="CardBtn">Book now!</Button>
          </Card.Body>
        </Card>
      </Link>
  );
}

export default AccomodationItem;
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AdminItem({ id, name, image, image_url }) {
  return (
    <Col>
      <Link to={`accomodations/${id}`}>
        <Card style={{ width: "400px" }}>
          <Card.Body>
            <Card.Title>{name} <img src={image} /></Card.Title>
            <img src={image_url} />
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default AdminItem;
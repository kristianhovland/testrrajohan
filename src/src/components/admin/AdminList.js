import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { messageAPI } from '../../constants/api';
import Loader from '../layout/Loader';
import ErrorMessage from '../layout/Error';
import ListGroup from "react-bootstrap/ListGroup";

function AdminList() {
  const [adminmsg, setAdminmsg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () { 
    async function fetchData() {
      try {
        const response = await fetch(messageAPI);

        if (response.ok) {
          const json = await response.json();
          setAdminmsg(json);
        } else {
          setError("Error Occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <Container>
      <Row>
        {adminmsg.map(function (adminmsg) {
          const {  name, email, message } = adminmsg;
          return (
            <>
              <ListGroup>
              <ListGroup.Item><i className="fa fa-user"></i>{name}</ListGroup.Item>
              <ListGroup.Item><i className="fa fa-envelope"></i>{email}</ListGroup.Item>
              <ListGroup.Item><i className="fa fa-comment"></i>{message}</ListGroup.Item>
            </ListGroup>
            </>
          )
         
        })}
      </Row>
    </Container>
  );
}

export default AdminList;
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { enquiryAPI } from '../../constants/api';
import Loader from '../layout/Loader';
import ErrorMessage from '../layout/Error';
import ListGroup from "react-bootstrap/ListGroup";


function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () { 
    async function fetchData() {
      try {
        const response = await fetch(enquiryAPI);

        if (response.ok) {
          const json = await response.json();
          setEnquiries(json);
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
        {enquiries.map(function (enquiries) {
          const {  name, email, date } = enquiries;
          return (
            <>
              <ListGroup>
              <ListGroup.Item><i className="fa fa-user"></i>{name}</ListGroup.Item>
              <ListGroup.Item><i className="fa fa-envelope"></i>{email}</ListGroup.Item>
              <ListGroup.Item><i className="fa fa-calendar"></i> {date}</ListGroup.Item>
            </ListGroup>
            </>
          )
         
        })}
      </Row>
    </Container>
  );
}

export default AdminEnquiries;
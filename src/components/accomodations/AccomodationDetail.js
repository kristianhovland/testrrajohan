import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import EnquiriesForm from "../details/EnquiriesForm";
import Loader from "../layout/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API } from './../../constants/api';


function AccomodationDetail() {
	const [hotels, setHotels] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = API + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

					if (response.ok) {
						const json = await response.json();
						console.log(json);
						setHotels(json);
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (

		<Container>
 		 <Row>
    		<Col>
			<img src={hotels.image.url} alt={hotels.name}/>
			</Col>
			<Col>
					<h2>{hotels.name}</h2>
					<p>{hotels.description}</p>
					<p>€ {hotels.price} per night.</p>
					<p>Category: {hotels.category.name}</p>
					<EnquiriesForm />
			</Col>
		 </Row>
		 <p className="detailDisclaimer">On checking in, the customer must make a credit card available and {hotels.name} shall record the details. If the customer does not make the payment 
			 within the agreed period, or uses the facilities (e.g. mini-bar, wellness, bar, restaurant, etc.) which were not specified on checking out, {hotels.name} is entitled to deduct 
			 them from the credit card, provided the details of the settlement are given to the customer, either electronically or by post. In any case, the customer must 
			 contest the payment within 8 days in writing if he/she thinks it was not justified.</p>
		</Container>
	
	);
  }

  export default AccomodationDetail;
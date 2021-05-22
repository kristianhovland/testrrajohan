import { useState, useEffect } from "react";
import AccomodationItem from "./AccomodationItem";
import { API } from './../../constants/api';
import Loader from './../layout/Loader';
import ErrorMessage from './../layout/Error';

function AccomodationList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          setHotels(json);
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
    <div className="listContainer">
        {hotels.map(function (hotels) {
          const {  id, name, image, price } = hotels;
          return <AccomodationItem key={id} id={id} name={name} image={image} price={price} />;
        })}
    </div>
  );
}

export default AccomodationList;
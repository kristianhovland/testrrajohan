import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="spinner-container">
      <Spinner animation="grow" variant="info" />
    </div>
  );
}

import Search from "./Search";
import logo from '../img/logo.png';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


export default function HomePage() {
	return (
		<>
	
			<div className="homeHeader">
				<div className="headerContent">
					<div className="headerLogo">
						<img src={logo} alt="Logo" />
					</div>
					<div className="headerText">
						<h3>Some of the best Norway has to offer!</h3>
					</div>
					<div className="headerSearch">
						<Search /> 
					</div>
					<hr color="white" width="12.8%"></hr>
					<div className="headerButton">
					<Link to="/housing">
  							<Button className="HomeBtn" size="lg">
  							  Browse all
 							</Button>
						</Link>
					</div>
				</div>
			</div>
		
		
		</>
	);
}
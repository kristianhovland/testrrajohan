import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { AuthProvider } from "./context/AuthContext";
import "./App.scss";
import Contact from './components/contact/ContactPage';
import NavMenu from "./components/layout/Nav";
import AccomodationPage from './components/accomodations/AccomodationPage';
import AccomodationDetail from './components/accomodations/AccomodationDetail';
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";



function App() {


	return (
		<AuthProvider>
			<Router>
				<NavMenu />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/housing" exact>
						<AccomodationPage />
					</Route>
					<Route path="/accomodations/:id">
						<AccomodationDetail />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/admin" exact>
						<AdminPage />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;


import React from "react";

//include images into your bundle
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";


//create your first component
const Home = () => {
	return (
		<div className="main">
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="text-center">
			<Footer />
			</div>
		</div>
	);
};

export default Home;

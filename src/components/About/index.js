import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import "./about.css";
// import Image from 'react-bootstrap/Image'
// import pic from "public\assets\images\self.png"
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			
			<Row>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src= "/assets/images/self.png"
						alt="Dan"
						className="img-fluid rounded-circle"
					/>
				</Col>

				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
					I'm currently enrolled in the University of Washington full stack coding bootcamp course and just
                    beginning my journey into web development. Previously, I worked as a microbiologist and I'm
                    branching out to discover a new career.
					</p>
					<p>
					During my time here at the University of Washington bootcamp, I've gained experience in HTML, CSS, React.js,
					JavaScript, Materialize, Bootstrap, Node.js, Mongo.DB, Sequelize, Express, and various other technologies.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
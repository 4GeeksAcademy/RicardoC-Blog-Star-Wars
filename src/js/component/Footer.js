import React, { Component } from "react";
import "../../styles/Footer.css";

const Footer = () => (
	<footer className="footer mt-auto py-2 text-center bg bg-light">
		<div className="d-flex justify-content-center">
			<div className="clic">
				Clic Here ⮕
				<a href="https://github.com/RicardoClaro7" target="_blank">
					<i class="fa-brands fa-github"></i></a>
			</div>
			<div className="copy">
				© 2024 RicardoClaro7 || All rights reserved.
			</div>
		</div>


	</footer>
);
export default Footer;
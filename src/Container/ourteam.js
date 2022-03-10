import { Component } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './team.css'

import { FaCheckCircle, FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'


class OurTeam extends Component {
	render() {
		return (
			<div>

				<section class="section-team">
					<div class="container">

						<div class="row justify-content-center text-center">
							<div class="col-md-8 col-lg-6">
								<div class="header-section">
									<h1 style={{color:"#a018a0",fontSize:"20px"}} >Our Experts</h1>
									<h3 style={{color:"black",fontSize:"35px",fontWeight:"bold"}} >Let's meet with our team members</h3>
								</div>
							</div>
						</div>

						<div class="row  justify-content-center text-center">
							<div class="col-sm-6 col-lg-4 col-xl-4 ">
								<div style={{height:"500px"}} class="single-person">
									<div class="person-image">
										<img style={{height:"250px",width:"250px"}}src="./images/aayush.jpg" alt="" />
										<span class="icon">
											<i class="fab fa-html5"></i>
										</span>
									</div>
									<div class="person-info">
										<p class="full-name">Aayush ghimire</p>
										<span class="speciality">Full stack web developer</span>
										<div className="row">
											<ul>
												<Link title="Facebook" target="_blank" to="https://www.facebook.com/"><FaFacebook style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link to="https://www.linkedin.com/" target="_blank" title="Linkedin"><FaLinkedin style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link to="https://instragram.com" target="_blank" title="Instragram"><FaInstagram style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link title="Whatsapp" target="_blank" to="https://www.whatsapp.com/"><FaServicestack style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
											</ul>
										</div>

									</div>
								</div>
							</div>


						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default OurTeam;

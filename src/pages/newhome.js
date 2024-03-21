import React from "react";
import "./newhome.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
// import Reactimg from "../../assets/images/React-icon.svg-removebg-preview.png";
// import Cssimg from "../../assets/images/download-removebg-preview (1).png";
// import Jsimg from "../../assets/images/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail-removebg-preview.png";
// import Htmlimg from "../assets/images/732212-removebg-preview.png";
import Reactnew from "../assets/images/React-icon.svg-removebg-preview.png";
import Jsnewpic from '../assets/images/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail-removebg-preview.png'
import Htnlnewpic from "../assets/images/732212-removebg-preview.png";
import Cssnewpic from "../assets/images/download-removebg-preview (1).png";
import { Link } from "react-router-dom";
function Newhome() {
    return (
        <div className="newhome-overall">
            <h1 className="heading">WELCOME</h1>
            <div className="seperate">
                <nav>
                    <li>Home</li>
                    <Link to="/about"> <li>About</li></Link>
                    <Link to="/skills"><li>Skills</li></Link>
                    <Link to="/contact"> <li>Contact</li></Link>


                </nav>
                <section className="new-content">
                    <h1 className="new-am">I'm<span className="newname">Bilson</span></h1>
                    <p>Creative Designer <span>from</span> <span>Rameshwarem</span></p>
                    <p className="sentanc">Am a designer and create a webside am from </p>
                    <p> rameshwaram now am developer</p>
                    <div className="newicons">
                        <FaFacebook className="newicons1" />
                        <FaInstagramSquare className="newicons2" />
                        <FaLinkedin className="newicons3" />
                        <FaYoutube className="newicons4" /><br />

                    </div>
                    <button className="newjoin">Join</button>


                </section>
                <div className="animationimg">
                    <img className="newpics1" src={Reactnew} alt="React" />
                    <img className="newpics2" src={Jsnewpic} alt="Js" />
                    <img className="newpics3" src={Htnlnewpic} alt="" />
                    <img className="newpics4" src={Cssnewpic} alt="" />

                </div>


            </div>

        </div>
    )
}
export default Newhome;
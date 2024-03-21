import React from "react";
import { FaHome } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import Multicards from "../../assets/images/multicards.png"
import Timetable from"../../assets/images/timetable.png"
import Travel from "../../assets/images/travelplaces.png"
import Footer from "../../assets/images/footer.png"
import "./about.css"

function About() {
    return (
        <div className="about-overall">
            <div className="about-icon">
                <Link className="aboutcolor" to="/"><FaHome /> </Link>

                <FiAlertCircle />
                <Link to="/contact" className="aboutcolor"><IoMdContact /></Link>
                <Link to="/skills" className="aboutcolor"><GiSkills /></Link>

            </div>
            <div className="levels">
                <div className="htmllevel">
                    <h1 className="level">Html</h1>
                    <button className="htmlbtn"></button>
                </div>
                <div className="csslevel">
                    <h1 className="level">Css</h1>
                    <button className="cssbtn"></button>
                </div>
                <div className="jslevel">
                    <h1 className="level">JS</h1>
                    <button className="jsbtn"></button>
                </div>
                <div className="reactlevel">
                    <h1 className="level">React</h1>
                    <button className="reactbtn"></button>
                </div>

            </div>
            <section className="aboutcontent">
                <p>I'M  a creative designer and i alson done a </p>
                <p>Create a resbonsive wabsite and i have a some projects </p>
                <p> i know bootstrabe while decreases the css code and it will use easy to make a responsive design</p>
                <p>also know the react i have an react project</p>
                <button className="hire">Hire Me</button>

            </section>
            <section className="photos">
<img className="aboutimg" src={Multicards} alt="" />
<img className="aboutimg" src={Travel} alt="" />
<img className="aboutimg" src={Timetable} alt="" />
<img className="aboutimg" src={Footer} alt="" />
            </section>

        </div>
    )
}
export default About;
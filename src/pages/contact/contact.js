import React from "react";
import "./contact.css";
import { FaHome } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
function Contact() {
    return (
        // <div className="moving-contact">
        <div className="overall-content">
             <div className="contacts-icons"> 
            <Link className="iconscolor1" to="/"><FaHome /></Link>

          <Link className="iconscolor1" to="/about" ><FiAlertCircle /></Link>  
            <IoMdContact />
            <Link className="iconscolor1" to="/skills"> <GiSkills /></Link>
            </div> 

            <div className="continercontact">

                <h1 className="heading"> I'M <span className="experience">DEVELOPER</span></h1>

                {/* <h1 className="heading"> I'M <span className="experience">DEVELOPER</span></h1> */}
                <section className="contact">
                    <label>Name: <br /><span>Bilson</span></label><br />
                    <label>Phone no:<br /> <span>8438061570</span></label><br />
                    <label> Mail Id:<br /> <span>bilsonjildas27@gmail.com</span></label><br />
                    <label> Address: <span>Rameshweram</span></label>
                </section>
            </div>
        </div>
        // </div>
    )
}
export default Contact;
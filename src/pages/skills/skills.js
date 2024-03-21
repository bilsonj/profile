import React from "react";
import "./skills.css"
import Html from "../../assets/images/732212-removebg-preview.png"
import React1 from "../../assets/images/React-icon.svg-removebg-preview.png";
import Js from "../../assets/images/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail-removebg-preview.png";
import Css from "../../assets/images/download-removebg-preview (1).png"
import Mobile from "../../assets/images/mobile.png"
import Dhoni from "../../assets/images/dhoni profile.png"
import Register from "../../assets/images/registerform.png"
import Google from "../../assets/images/google.png"
import Login from "../../assets/images/login form.png"
import Bilson from "../../assets/images/bilson.png"
import { FaHome } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
function Skills() {
    const skillsArray = [
        {
            icon: Html,
            title: "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript"

        },
        {
            icon: React1,
            title: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js"

        }, {
            icon: Js,
            title: "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries"
        }, {
            icon: Css,
            title: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"
        }
    ]
    return (
        <div className="skills-overall">
            <div className="skills-icon">
               <Link className="iconscolor" to="/"><FaHome /> </Link>

               <Link className="iconscolor" to="/about"> <FiAlertCircle /></Link>
                <Link  to="/contact" className="iconscolor"><IoMdContact /></Link>
                <GiSkills />
                
            </div>

            <div className="cards">
                {skillsArray.map((item, index) => {
                    return (
                        < div key={index}>
                            <div className="card">
                                <img className="htmlimg" src={item.icon} alt="html icon" />
                                <p>{item.title}</p>
                            </div>
                        </div>

                    )


                })}
            </div>
            <div className="tasks">
                <h1 className="samble">Samble Cards</h1>
                <div className="continer-task">
                    <img className="mobile" src={Mobile} alt="mobile" />
                    <img className="dhoni" src={Dhoni} alt="dhoni" />
                    <img className="register" src={Register} alt="register form" />
                    <img className="google" src={Google} alt="register form" />
                    <img className="login" src={Login} alt="login form" />
                    <img className="login" src={Bilson} alt="profile card" />
                </div>
            </div>

        </div >
    )
}
export default Skills;
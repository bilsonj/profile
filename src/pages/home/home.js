import React, { useRef } from "react";
import "./home.css"
import BilsonDb from "../../assets/images/bilson_new-removebg-preview.png";
import Reactpic from "../../assets/images/React-icon.svg-removebg-preview.png";
import Csspic from "../../assets/images/download-removebg-preview (1).png";
import Js from "../../assets/images/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail-removebg-preview.png";
import Htmlpic from "../../assets/images/732212-removebg-preview.png";
import { FaFacebook,FaInstagramSquare,FaLinkedin,FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

function Home() {
    const changecolor=useRef(null);
    const colors=['#DFFF00','#FFBF00','#6495ED','#FF7F50','#117864']
    const setcolor=(()=>{
        const randomcolor=Math.floor(Math.random()*colors.length);
changecolor.current.style.color=colors[randomcolor]
    })
    return (
        <div className="overall-home">
            <h1 className="intro">welcome</h1>
            <div className="continer">
                <div>
                    <ul className="navbar">
                        <li>Home</li>
                        
                        <Link to="/skills"><li>skills</li></Link>
                      <Link to="/contact">  <li>contact</li></Link>
                      <Link  to="/about"><li>About</li> </Link>
                    </ul>
                </div>

                <div className="content">
                    <h1 className="heading">I am <span className="name">BILSON J</span></h1>
                    <p className="para">Creative Designer <span className="from">from</span> <span className="native">Rameshwarem</span></p>
                    <p className="sentanc">Am a designer and create a webside am from </p>
                    <p ref={changecolor} className="sentance" > rameshwaram now am developer</p>
                    <FaFacebook className="icons1" />
                    <FaInstagramSquare   className="icons2"/>
                    <FaLinkedin  className="icons3" />
                    <FaYoutube  className="icons4" /><br/>
                    <button  className="join" ref={changecolor} onClick={()=>setcolor()}>join</button>

                </div>
                <div className="image">
                    <img className="profile" src={BilsonDb}  alt="bilson" />
                    <img className="reactpic" src={Reactpic} alt="Reactpic " />
                    <img className="csspic" src={Csspic} alt="Css" />
                    <img className="js" src={Js} alt="java script" />
                    <img className="htmlpic" src={Htmlpic} alt="Html" />
                    
                    {/* <FaFacebook className="icons" />
                    <FaInstagram  className="icons"/>
                    <FaLinkedin  className="icons" />
                    <FaYoutube  className="icons" /> */}
                </div>
                

            </div>


        </div>


    )
}
export default Home;
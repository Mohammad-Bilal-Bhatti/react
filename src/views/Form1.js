// import { container } from "assets/jss/material-dashboard-react";
// import { green } from "@material-ui/core/colors";
import React,{useState} from "react";
// react plugin for creating charts
// @material-ui/core
// core components
// import GridItem from "components/Grid/G
// ridItem.js"
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem";
// import Card from "components/Card/Card";
// import Card from "components/Card/Card.js";
// import CardFooter from "components/Card/CardFooter.js";

// import PersonIcon from "assets/img/person.png"
// import Wifi from "assets/img/wifi.png"
// import Bholloo from "assets/img/bholloo.png"
// import Coffee from "assets/img/coffee.png"
// import {Link}  from "react-router-dom";
// import BackImg from "assets/img/bg.PNG";
// import routes from "routes.js";

import "./Form1.css";
export default function Form1() {
    const [internetBundles] = useState({
        mehran: "mehran",
        
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(internetBundles)
    }


    return (
         <div style={{marginTop:"400px",marginBottom:"200px",display:"block",justifyContent:"end",alignContent:"center", position:"absolute"}} className="form-container">
            <h1 >Acadmic Details</h1>
            <form >
                    <select className="select  common">
                        <option >University</option>
                        <option value="mehran">Mehran University</option>
                    </select>
                    <select className="select common">
                        <option>Campus</option>
                        <option value="jamshoro">  Jamshoro</option>
                    </select>
                    <select className="select common"> 
                        <option>Degree Programme</option>
                        <option value="BE">BE</option>
                    </select>
                <input className=" noPaddding" name="roll" placeholder="Roll No" /> 
                <input className=" noPaddding"  name="email" placeholder="Academic Email"/>
                <input className=" noPaddding" name="semester" placeholder="Current Semester "/>
            <input type="submit" value="Next" onClick={handleSubmit} />
            </form>
            </div>
          
    );
}
